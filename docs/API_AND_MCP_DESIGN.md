# 静态 API + MCP Server 设计说明

## 1. 目录结构

```
csc-lab/
├── config/_default/
│   └── hugo.yaml              # 增加 outputFormats + section outputs
├── content/
│   ├── zh/api/_index.md       # headless，用于生成 /zh/api/index.json
│   ├── en/api/_index.md
│   └── fr/api/_index.md
├── layouts/
│   └── section/
│       ├── publication.api.json  # 出版物 JSON
│       ├── authors.api.json      # 作者 JSON
│       ├── project.api.json      # 项目 JSON
│       ├── projects.api.json     # (en/fr) 项目 JSON
│       ├── post.api.json         # 新闻/动态 JSON
│       └── api.api.json          # API 索引 JSON
├── docs/
│   └── API_AND_MCP_DESIGN.md  # 本设计文档
└── mcp-server/                 # MCP 服务（独立可配置 baseURL）
    ├── package.json
    ├── tsconfig.json
    ├── src/
    │   └── index.ts
    └── README.md
```

构建后静态文件（随站点部署）：

- `https://www.csc-lab.com/zh/publication/index.json`
- `https://www.csc-lab.com/zh/authors/index.json`
- `https://www.csc-lab.com/zh/project/index.json`（或 `/zh/projects/` 视 section 名）
- `https://www.csc-lab.com/zh/post/index.json`
- `https://www.csc-lab.com/zh/api/index.json`（索引，含各 endpoint 与语言列表）

英文、法文同理：`/en/...`、`/fr/...`。

---

## 2. 静态 API 接口规范

### 2.1 API 索引 `GET /{lang}/api/index.json`

**用途**：发现该语言下所有数据端点及站点信息。

**响应示例**：

```json
{
  "site": {
    "title": "上海交大CSC Lab",
    "base_url": "https://www.csc-lab.com/",
    "language": "zh",
    "languages": ["zh", "en", "fr"]
  },
  "endpoints": {
    "publications": "https://www.csc-lab.com/zh/publication/index.json",
    "authors": "https://www.csc-lab.com/zh/authors/index.json",
    "projects": "https://www.csc-lab.com/zh/project/index.json",
    "posts": "https://www.csc-lab.com/zh/post/index.json"
  }
}
```

### 2.2 出版物 `GET /{lang}/publication/index.json`

**字段**：slug, title, summary, authors, date, publish_date, publication (期刊/会议名), publication_types, volume, number, pages, url, language

### 2.3 作者 `GET /{lang}/authors/index.json`

**字段**：slug, title, role, email, interests, user_groups, summary (bio), url, language

### 2.4 项目 `GET /{lang}/project/index.json` 或 `/projects/index.json`

**字段**：slug, title, summary, authors, tags, date, image (caption/focal_point), url_*, url, language

### 2.5 新闻/动态 `GET /{lang}/post/index.json`

**字段**：slug, title, summary, date, featured, image, url, language

---

## 3. MCP Server 设计

### 3.1 配置

- **base_url**（环境变量 `CSC_LAB_BASE_URL`）：站点根 URL，默认 `https://www.csc-lab.com/`
- **language**（环境变量 `CSC_LAB_LANG`）：默认语言，默认 `zh`

### 3.2 Tools 名称与参数

| Tool 名称 | 说明 | 参数 |
|-----------|------|------|
| `csc_lab_api_index` | 获取 API 索引（端点列表与语言） | `lang` (optional): 语言代码 zh / en / fr |
| `csc_lab_list_publications` | 列出出版物 | `lang` (optional): 语言代码；`limit` (optional): 条数上限，默认 50 |
| `csc_lab_get_publication` | 按 slug 获取单条出版物 | `slug`: 出版物 slug（如 yang-2025-input）；`lang` (optional) |
| `csc_lab_list_authors` | 列出作者 | `lang` (optional)；`limit` (optional)，默认 100 |
| `csc_lab_get_author` | 按 slug 获取单条作者 | `slug`: 作者 slug（如 bihui-jin）；`lang` (optional) |
| `csc_lab_list_projects` | 列出项目 | `lang` (optional)；`limit` (optional)，默认 50 |
| `csc_lab_get_project` | 按 slug 获取单条项目 | `slug`；`lang` (optional) |
| `csc_lab_list_posts` | 列出新闻/动态 | `lang` (optional)；`limit` (optional)，默认 20 |

实现方式：MCP Server 内通过 HTTP GET 请求上述静态 JSON，解析后返回；单条 get 从 list 中按 slug 过滤或单独请求后过滤。

---

## 4. 自动化与使用

- **构建**：现有 `hugo` 构建流程不变，构建产物中自动包含各 `index.json`。
- **MCP**：在 Cursor 等客户端中配置 MCP server 指向本仓库 `mcp-server`，按需设置 `CSC_LAB_BASE_URL` / `CSC_LAB_LANG` 即可使用上述 tools。
