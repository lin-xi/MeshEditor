<template>
  <div class="editor">
    <div class="editor-toolbar">
      <ToolBar />
    </div>
    <div class="editor-main">
      <Split :style="hstlye" :gutterSize="5">
        <SplitPanel :size="80">
          <Editor />
        </SplitPanel>
        <SplitPanel :size="20">
          <Property />
        </SplitPanel>
      </Split>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ToolBar from "@/components/editor/ToolBar.vue";
import Editor from "@/components/editor/Editor.vue";
import Property from "@/components/editor/property/index.vue";
import Split from "@/components/common/Split/Split.vue";
import SplitPanel from "@/components/common/Split/SplitPanel.vue";

export default {
  name: "Edit",
  data() {
    return {
      hstlye: { height: "600px" },
    };
  },
  components: {
    ToolBar,
    Editor,
    Split,
    SplitPanel,
    Property,
  },
  mounted() {
    this.hstlye = { height: window.innerHeight - 60 + "px" };
  },
};
</script>

<style scoped lang="less">
.editor {
  background-color: #444;
  .editor-toolbar {
    height: 60px;
  }
}
</style>
