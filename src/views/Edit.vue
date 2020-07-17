<template>
  <div class="editor">
    <div class="editor-toolbar">
      <ToolBar />
    </div>
    <div class="editor-main">
      <Split style="height: 2000px;" :gutterSize="5">
        <SplitPanel :size="80">
          <Editor />
        </SplitPanel>
        <SplitPanel :size="20"></SplitPanel>
      </Split>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ToolBar from "@/components/editor/ToolBar.vue";
import Editor from "@/components/editor/Editor.vue";
import Split from "@/components/common/Split/Split.vue";
import SplitPanel from "@/components/common/Split/SplitPanel.vue";

export default {
  name: "Edit",
  components: {
    ToolBar,
    Editor,
    Split,
    SplitPanel
  }
};
</script>

<style scoped lang="less">
.editor {
  background-color: #444;
  .editor-toolbar {
    height: 40px;
  }
}
</style>
