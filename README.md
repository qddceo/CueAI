# CueAI

**按场景选对 AI 工具**

CueAI 是一个公开免费的 AI 工具目录：按写作、图像、视频、编程、办公、客服等真实使用场景，给出 2～4 个主流工具的一句话定位、适合 / 不适合、起步价与官网链接（含联盟参数占位 `?ref=cueai`）。

本仓库用 **零构建静态站点**，通过 **GitHub Pages**（`main` 分支的 `/docs` 目录）发布。

---

## 本地文件结构

上传到 GitHub 仓库根目录后应类似：

```
CueAI/
├── .gitignore
├── README.md
└── docs/
    ├── index.html      # 首页（6 个场景入口）
    ├── styles.css      # 共享样式
    ├── writing.html    # 写作
    ├── image.html      # 图像
    ├── video.html      # 视频
    ├── coding.html     # 编程
    ├── office.html     # 办公
    └── support.html    # 客服
```

---

## 如何上传到 github.com/qddceo/CueAI

仓库已是空的 Public 仓库时，任选一种方式：

### 方式 A：网页上传（最快）

仓库还没有任何提交时，页面是「Quick setup」空仓库首页，**不会出现 Add file 按钮**。那个按钮要等第一次提交之后、文件列表出现了才会有。

1. 打开 https://github.com/qddceo/CueAI
2. 在浅蓝色 **Quick setup** 区域里，找到这句话：`Get started by creating a new file or uploading an existing file`，点击其中的 **uploading an existing file**
3. 也可以直接打开上传页：https://github.com/qddceo/CueAI/upload/main
4. 把 **`README.md`**、**`.gitignore`** 和整个 **`docs/` 文件夹**拖进页面（保持 `docs/` 在仓库根目录下，不要只拖里面的 html）
5. 填写提交说明，例如：`Initial CueAI Pages site`，点击 **Commit changes**

### 方式 B：Git 命令行

```bash
git clone https://github.com/qddceo/CueAI.git
cd CueAI
# 将解压得到的 README.md 与 docs/ 复制到本目录
git add README.md docs
git commit -m "Initial CueAI Pages site"
git push origin main
```

若默认分支不叫 `main`，在 GitHub → Settings → General 里改成 `main`，或在 Pages 设置里选择你的实际分支。

---

## 如何开启 GitHub Pages

1. 打开 https://github.com/qddceo/CueAI/settings/pages
2. **Build and deployment → Source** 选择 **Deploy from a branch**
3. Branch 选 **`main`**，文件夹选 **`/docs`**
4. 点击 **Save**
5. 等待 1～2 分钟，站点地址为：

**https://qddceo.github.io/CueAI/**

（首次启用后，仓库 Settings → Pages 顶部会显示实际访问链接；若 404，稍等再刷新，或确认 `docs/index.html` 已在 `main` 上。）

---

## 如何新增一个工具

1. 打开对应场景页，例如 `docs/writing.html`
2. 复制已有的一个 `<article class="tool">…</article>` 区块
3. 修改：
   - 工具名称（`<h2>`）
   - 起步价（`<span class="price">`）
   - 一句话定位（`.one-liner`）
   - 适合 / 不适合（两个 `.meta-block`）
   - 官网链接：在官方首页 URL 后追加 `?ref=cueai`（若官网已有查询参数，则用 `&ref=cueai`）
4. 保存并提交到 `main`，Pages 会自动更新

**注意：** 不要编造评价人数或虚假评测；定价写「起步价 / 以官网为准」即可。

---

## 联盟链接说明

当前所有外链使用占位参数 `?ref=cueai`。申请到真实联盟计划后，把对应 `href` 换成官方联盟链接即可，页脚已标注「本站含联盟链接」。

---

## 许可与免责

站点内容仅供选型参考，不构成购买建议。功能与价格以各产品官方最新说明为准。
