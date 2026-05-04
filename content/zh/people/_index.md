---
title: 团队成员
date: 2022-10-24
type: landing
translationKey: people

sections:
  - block: people
    content:
      title: 团队成员
            # 添加排序参数
      sort_by: "weight" # 按 weight 排序
      sort_ascending: true # true 为升序，false 为降序
           # 添加中文显示名称映射
      user_groups:
        - 实验室导师 # Researchers
        - 博士后 # Postdocs
        - 工程师 # Engineers
        - 博士生 # Phd Students
        - 硕士生 # Master Students
        - 本科生 # Undergraduate Students
        - 行政人员 # Administration
        - 访问学者 # Visitors
        - 已毕业博士 # PhD Alumni
        - 已毕业硕士 # Master Alumni
      # user_groups:
      #   - Researchers
      #   - Postdocs
      #   - Engineers
      #   - Phd Students
      #   - Master Students
      #   - Undergraduate Students
      #   - Administration
      #   - Visitors
      #   - Alumni
    design:
      show_interests: true
      show_role: true
      show_social: true

  - block: markdown
    content:
      title: 历史时期成员（2022 年前）
      subtitle: 以下为按年代的示意性汇总，不提供具体人员信息；完整名录仍在整理中。
      text: |
        <section class="people-era-archive" aria-labelledby="people-era-heading">
          <h3 id="people-era-heading" class="visually-hidden">按年代划分的早期成员示意</h3>
          <p class="people-era-archive__intro">
            下列三个时段反映实验室在不同发展阶段的成员规模与构成类型，数字与表述均为示意，不代表精确统计。
          </p>
          <div class="people-era-archive__grid" role="list">
            <article class="people-era-archive__card" role="listitem">
              <h4 class="people-era-archive__period">2000 年以前</h4>
              <p class="people-era-archive__summary">奠基阶段：以早期研究生与少量联合培养人员为主，规模较小，侧重预测控制等方向的基础积累。</p>
              <p class="people-era-archive__hint">示意规模：约十余人量级（在读与已毕业合计，下同）。</p>
            </article>
            <article class="people-era-archive__card" role="listitem">
              <h4 class="people-era-archive__period">2000 — 2010</h4>
              <p class="people-era-archive__summary">扩展阶段：博士、硕士与工程应用课题逐年增多，团队研究方向与工业合作项目逐步丰富。</p>
              <p class="people-era-archive__hint">示意规模：约数十人量级。</p>
            </article>
            <article class="people-era-archive__card" role="listitem">
              <h4 class="people-era-archive__period">2010 — 2020</h4>
              <p class="people-era-archive__summary">活跃阶段：招生与课题规模稳定扩大，国际化交流与横向合作进一步增加，人才梯队更加完整。</p>
              <p class="people-era-archive__hint">示意规模：约近百人量级。</p>
            </article>
          </div>
        </section>
---