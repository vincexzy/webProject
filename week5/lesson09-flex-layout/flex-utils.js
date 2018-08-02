{

  const cid = "id" + Date.now();
  const icid = cid + 1;

  const item_ctrl_panel_html = `
    <div id="${icid}" >
      <label>
      flex-grow
      <select>
        <option value="0"> 0 </option>
        <option value="1"> 1 </option>
        <option value="2"> 2 </option>
        <option value="3"> 3 </option>
        <option value="4"> 4 </option>
        <option value="5"> 5 </option>
        <option value="6"> 6 </option>
      </select>
    </label>
    <label>
      flex-shrink
      <select>
        <option value="1"> 1 </option>
        <option value="2"> 2 </option>
        <option value="3"> 3 </option>
        <option value="4"> 4 </option>
        <option value="5"> 5 </option>
        <option value="6"> 6 </option>
      </select>
    </label>
    <label>
      align-self
      <select>
        <option value="auto"> auto </option>
        <option value="stretch"> stretch </option>
        <option value="flex-start">flex-start</option>
        <option value="flex-end">flex-end </option>
        <option value="center"> center </option>
        <option value="baseline"> baseline </option>
      </select>
    </label>
    <label>
      order
      <select>
        <option value="0"> 0 </option>
        <option value="1"> 1 </option>
        <option value="2"> 2 </option>
        <option value="3"> 3 </option>
        <option value="4"> 4 </option>
        <option value="5"> 5 </option>
        <option value="6"> 6 </option>
      </select>
    </label>
    </div>
  `;

  const ctrl_panel_html = `

    <div id="${cid}">
      <button> 加元素 </button>
      <button> 减元素 </button>
      <label>
        flex-direction
        <select>
          <option value="row">row 默认横排 </option>
          <option value="row-reverse">row-reverse 横排反转 </option>
          <option value="column">column 竖排 </option>
          <option value="column-reverse">column-reverse 竖排反转 </option>
        </select>
      </label>
      <label>
        flex-wrap
        <select>
          <option value="nowrap">nowrap 默认不换行</option>
          <option value="wrap">wrap 换行</option>
          <option value="wrap-reverse">wrap-reverse 换行反转 </option>
        </select>
      </label>
      <label>
        align-content
        <select>
          <option value="stretch"> stretch </option>
          <option value="flex-start">flex-start</option>
          <option value="flex-end">flex-end </option>
          <option value="center"> center </option>
          <option value="space-between"> space-between </option>
          <option value="space-around"> space-around </option>
        </select>
      </label>
      <label>
        align-items
        <select>
          <option value="stretch"> stretch </option>
          <option value="flex-start">flex-start</option>
          <option value="flex-end">flex-end </option>
          <option value="center"> center </option>
          <option value="baseline"> baseline </option>
        </select>
      </label>
      <label>
        justify-content
        <select>
          <option value="flex-start">flex-start</option>
          <option value="flex-end">flex-end </option>
          <option value="center"> center </option>
          <option value="space-between"> space-between </option>
          <option value="space-around"> space-around </option>
        </select>
      </label>
    </div>
  `

  const style = `
    <style>

      #${icid}{
        display:none;
        flex-direction:column;
        background-color:#eee;
        position:absolute;
      }

      #${icid}:hover{
        display:flex;
      }

      #${icid}  label{
      }


      #${cid}{
        display:flex;
        flex-wrap:wrap;
        width:300px;
        background:#eee;
        padding:10px;
      }

      #${cid} > *{
        align-items: flex-start;
        flox-grow:1;
      }

    </style>
  `
  let box;
  let itemNum = 0;
  let rpanel;
  let current_box;
  let defaultRPanelConfig = {
    flex_grow:"0",
    flex_shrink:"1",
    align_self:"auto",
    order:"0"
  }

  function findDOMS2() {

    const panel = document.body.querySelector("#" + icid);
    const flex_grow = panel.querySelector("label:nth-of-type(1) > select");
    const flex_shrink = panel.querySelector("label:nth-of-type(2) > select");
    const align_self = panel.querySelector("label:nth-of-type(3) > select");
    const order = panel.querySelector("label:nth-of-type(4) > select");
    rpanel = panel;

    return {
      panel,
      flex_grow,
      flex_shrink,
      align_self,
      order
    }

  }

  function findDOMS1() {
    const panel = document.body.querySelector("#" + cid);
    const id_input = panel.querySelector("input");
    const jia_item = panel.querySelector("button:nth-of-type(1)")
    const jian_item = panel.querySelector("button:nth-of-type(2)")
    const flex_direction = panel.querySelector("label:nth-of-type(1) > select");
    const flex_wrap = panel.querySelector("label:nth-of-type(2) > select");
    const align_content = panel.querySelector("label:nth-of-type(3) > select");
    const align_items = panel.querySelector("label:nth-of-type(4) > select");
    const justify_content = panel.querySelector("label:nth-of-type(5) > select");
    return {
      panel,
      id_input,
      jia_item,
      jian_item,
      flex_direction,
      flex_wrap,
      align_content,
      align_items,
      justify_content
    }
  }



  function bindEventListener2(doms) {

    const {
      panel,
      flex_grow,
      flex_shrink,
      align_self,
      order
    } = doms;

    let tid;
    panel.addEventListener("mouseout",function () {
      clearTimeout(tid);
      tid = setTimeout(function () {
        panel.style.display  = "none";
      },800);
    });

    panel.addEventListener("mousemove",function () {
      clearTimeout(tid);
    })

    flex_grow.addEventListener("change", function(event) {
      current_box.style.flexGrow = event.target.value;
    });

    flex_shrink.addEventListener("change", function(event) {
      current_box.style.flexShrink = event.target.value;
    });

    align_self.addEventListener("change", function(event) {
      current_box.style.alignSelf = event.target.value;
    });

    order.addEventListener("change", function(event) {
      current_box.style.order = event.target.value;
    });

  }

  function bindEventListener1(doms) {
    const {
      panel,
      id_input,
      jia_item,
      jian_item,
      flex_direction,
      flex_wrap,
      align_content,
      align_items,
      justify_content
    } = doms;

    createFlexBox("test-util-"+Date.now());
    initBox();

    jia_item.addEventListener("click", function(event) {
      const item = document.createElement("div");
      item.innerText = ++itemNum;
      item.style.width = "50px";
      item.style.height = "50px";
      item.style.backgroundColor = "#ccc";
      item.style.margin = "3px";
      box.appendChild(item);
    });

    jian_item.addEventListener("click", function(event) {
      box.querySelector(":last-child").remove();
    });

    flex_direction.addEventListener("change", function(event) {
      box.style.flexDirection = event.target.value;
    });

    flex_wrap.addEventListener("change", function(event) {
      box.style.flexWrap = event.target.value;
    });

    align_content.addEventListener("change", function(event) {
      box.style.alignContent = event.target.value;
    });

    align_items.addEventListener("change", function(event) {
      box.style.alignItems = event.target.value;
    });

    justify_content.addEventListener("change", function(event) {
      box.style.justifyContent = event.target.value;
    });

  }

  function createFlexBox(id) {
    if (box) return box;
    box = document.querySelector(id);
    if (box) return box;
    box = document.createElement("div");
    box.id = id;
    document.body.appendChild(box);
    return box;
  }



  function initBox() {
    if (!box) return;
    box.style.width = "350px";
    box.style.height = "350px";
    box.style.border = "1px solid #eee";
    box.style.display = "flex";
    box.addEventListener("contextmenu", function(event) {
      event.preventDefault();
      current_box = event.target;
      const {
        panel,
        flex_grow,
        flex_shrink,
        align_self,
        order
      } = findDOMS2();

      panel.style.display = "flex";
      panel.style.left = event.clientX + "px";
      panel.style.top = event.clientY + "px";

      flex_grow.value =  event.target.style.flexGrow || defaultRPanelConfig.flex_grow;
      flex_shrink.value = event.target.style.flexShrink || defaultRPanelConfig.flex_shrink;
      align_self.value = event.target.style.alignSelf || defaultRPanelConfig.align_self;
      order.value = event.target.style.order || defaultRPanelConfig.order;

    });

  }

  document.addEventListener("DOMContentLoaded", () => {
    document.body.insertAdjacentHTML("beforeEnd", ctrl_panel_html);
    document.body.insertAdjacentHTML("beforeEnd", item_ctrl_panel_html);
    bindEventListener1(findDOMS1());
    bindEventListener2(findDOMS2());

    document.body.insertAdjacentHTML("beforeEnd", style);
  });

}
