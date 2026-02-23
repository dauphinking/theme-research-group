# CSC Lab MCP Server

MCP (Model Context Protocol) 服务，供大模型通过工具调用访问 [SJTU CSC Lab](https://www.csc-lab.com/) 站点的静态 API 数据（出版物、作者、项目、新闻）。

## 依赖

- 站点需已部署并开启静态 API（运行 `hugo` 构建后会有 `/{lang}/api/index.json`、`/{lang}/publication/index.json` 等）。
- Node.js >= 18。

## 安装与运行

```bash
cd mcp-server
npm install
npm run build
npm start
```

或直接运行（需已安装依赖）：

```bash
node dist/index.js
```

服务器通过 **stdio** 与 MCP 客户端通信，无需开放端口。

## 环境变量

| 变量 | 说明 | 默认值 |
|------|------|--------|
| `CSC_LAB_BASE_URL` | 站点根 URL（不要末尾斜杠） | `https://www.csc-lab.com` |
| `CSC_LAB_LANG` | 默认语言 | `zh` |

## 提供的 Tools

| 名称 | 说明 | 参数 |
|------|------|------|
| `csc_lab_api_index` | 获取 API 索引（端点与语言列表） | `lang`（可选） |
| `csc_lab_list_publications` | 列出出版物 | `lang`（可选）, `limit`（可选，默认 50） |
| `csc_lab_get_publication` | 按 slug 获取单条出版物 | `slug`, `lang`（可选） |
| `csc_lab_list_authors` | 列出作者 | `lang`（可选）, `limit`（可选，默认 100） |
| `csc_lab_get_author` | 按 slug 获取单条作者 | `slug`, `lang`（可选） |
| `csc_lab_list_projects` | 列出项目 | `lang`（可选）, `limit`（可选，默认 50） |
| `csc_lab_get_project` | 按 slug 获取单条项目 | `slug`, `lang`（可选） |
| `csc_lab_list_posts` | 列出新闻/动态 | `lang`（可选）, `limit`（可选，默认 20） |

语言参数：`zh`、`en`、`fr`。

## 在 Cursor 中配置

在 Cursor 的 MCP 配置（如 `~/.cursor/mcp.json` 或项目级配置）中添加：

```json
{
  "mcpServers": {
    "csc-lab": {
      "command": "node",
      "args": ["d:/apc-bidi/csc-lab/mcp-server/dist/index.js"],
      "env": {
        "CSC_LAB_BASE_URL": "https://www.csc-lab.com",
        "CSC_LAB_LANG": "zh"
      }
    }
  }
}
```

将 `args` 中的路径改为本机 `mcp-server/dist/index.js` 的绝对路径；若使用本地或测试站点，可修改 `CSC_LAB_BASE_URL`。

## 设计说明

静态 API 与 MCP 的目录结构、端点与工具设计见项目根目录下的 [docs/API_AND_MCP_DESIGN.md](../docs/API_AND_MCP_DESIGN.md)。
