(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['checkboxFilterTemplate'] = template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=container.escapeExpression, alias2=depth0 != null ? depth0 : {}, alias3=helpers.helperMissing, alias4="function";

  return "    <label class=\"pst-filter-checkbox\">\n      <input class=\"pst-filter-checkbox-input\" type=\"checkbox\" data-attrid=\""
    + alias1(container.lambda(((stack1 = (depths[1] != null ? depths[1].data : depths[1])) != null ? stack1.UUID : stack1), depth0))
    + "\" data-val=\""
    + alias1(((helper = (helper = helpers.index || (depth0 != null ? depth0.index : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"index","hash":{},"data":data}) : helper)))
    + "\" value=\""
    + alias1(((helper = (helper = helpers.index || (depth0 != null ? depth0.index : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"index","hash":{},"data":data}) : helper)))
    + "\" "
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0.selected : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  "
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0.disabled : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">\n      <div class=\"pst-filter-checkbox-title "
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0.disabled : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">"
    + alias1(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"value","hash":{},"data":data}) : helper)))
    + "</div>\n    </label>\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "checked=\"checked\"";
},"4":function(container,depth0,helpers,partials,data) {
    return "disabled=\"disabled\"";
},"6":function(container,depth0,helpers,partials,data) {
    return "disabled";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "<div class=\"pst-filter-checkboxes\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.uniqueValuesWithSelection : stack1),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>\n";
},"useData":true,"useDepths":true});
templates['disabledSliderFilterTemplate'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "min";
},"3":function(container,depth0,helpers,partials,data) {
    return "max";
},"5":function(container,depth0,helpers,partials,data) {
    return "minmax";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return "\n<div class=\"disabled-pst-filter-slider "
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.minonly : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " "
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.maxonly : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " "
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.minmax : stack1),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\n  <div class=\"pst-slider-max\"></div>\n  <div class=\"disabled-pst-slider noUi-target noUi-rtl noUi-vertical noUi-background\" data-range=\"6,11\" data-attrid=\"ATTR-A-00000043\" data-tableid=\"DS-A-00000048\" data-attrtype=\"3\">\n    <div class=\"noUi-base\">\n      <div class=\"noUi-origin noUi-connect noUi-draggable\" style=\"top: 0%;\">\n        <div class=\"noUi-handle noUi-handle-upper\"></div>\n      </div>\n      <div class=\"noUi-origin noUi-background\" style=\"top: 100%;\">\n        <div class=\"noUi-handle noUi-handle-lower\"></div>\n      </div>\n    </div>\n    </div>\n  <div class=\"pst-slider-min\"></div>\n</div>\n";
},"useData":true});
templates['filterTemplate'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "  <th>\n    <div class=\"pst-cell-th\">\n      <a href=\"#\" class=\"pst-col-header\" data-attr="
    + alias4(((helper = (helper = helpers.UUID || (depth0 != null ? depth0.UUID : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"UUID","hash":{},"data":data}) : helper)))
    + ">\n        <div class=\"pst-col-header-title\">\n          "
    + alias4(((helper = (helper = helpers.Name || (depth0 != null ? depth0.Name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Name","hash":{},"data":data}) : helper)))
    + "\n        </div>\n        <div class=\"pst-col-header-subtitle\">\n          "
    + alias4(((helper = (helper = helpers.UnitOfMeasure || (depth0 != null ? depth0.UnitOfMeasure : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"UnitOfMeasure","hash":{},"data":data}) : helper)))
    + "\n        </div>\n      </a>\n    </div>\n  </th>\n";
},"3":function(container,depth0,helpers,partials,data,blockParams,depths) {
    return "  <th>\n    <div class=\"pst-cell-filter\">\n      <div class=\"pst-filter-box\">\n        "
    + container.escapeExpression((helpers.filterType || (depth0 && depth0.filterType) || helpers.helperMissing).call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.ParametricType : depth0),(depth0 != null ? depth0.UUID : depth0),(depths[1] != null ? depths[1].tableID : depths[1]),{"name":"filterType","hash":{},"data":data}))
    + "\n      </div>\n    </div>\n  </th>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : {};

  return "<tr>\n  <th class=\"pst-cell-sticky\">\n    <div class=\"pst-cell-th pst-cell-th-part-ref\">\n      <a href=\"#\" class=\"pst-col-header\">\n        <div class=\"pst-col-header-title\" data-attr=\"partNumber\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.ptVar : depth0)) != null ? stack1.ptPartNumTitle : stack1), depth0))
    + "</div>\n      </a>\n    </div>\n  </th>\n  <th>\n    <div class=\"pst-cell-th pst-cell-th-description\">\n      <a href=\"#\" class=\"pst-col-header\" data-attr=\"description\">\n        <div class=\"pst-col-header-title\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.ptVar : depth0)) != null ? stack1.ptPartNumDescription : stack1), depth0))
    + "</div>\n      </a>\n    </div>\n  </th>\n"
    + ((stack1 = helpers.each.call(alias3,(depth0 != null ? depth0.cols : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</tr>\n<tr>\n  <th class=\"pst-cell-sticky\">\n    <div class=\"pst-cell-filter\">\n        <div class=\"pst-filter-box\">\n          <div class=\"pst-filter-box-title\">&nbsp;</div>\n          <div class=\"pst-filter-box-subtitle\">&nbsp;</div>\n          <button class=\"pst-trigger-parameters\">&nbsp;</button>\n        </div>\n        <div class=\"pst-filter-buttons\">\n          <button class=\"pst-trigger-compare\">&nbsp;</button>\n          <button class=\"pst-trigger-filters\">&nbsp;</button>\n        </div>\n    </div>\n  </th>\n  <th>\n    <div class=\"pst-cell-filter\">\n      <div class=\"pst-filter-box\">\n        <div class=\"pst-filter-reset\">\n          <a href=\"#\" class=\"pst-trigger-filter-reset\">Reset All</a>\n        </div>\n      </div>\n    </div>\n  </th>\n"
    + ((stack1 = helpers.each.call(alias3,(depth0 != null ? depth0.cols : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</tr>\n";
},"useData":true,"useDepths":true});
templates['headerTemplate'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "cn-link";
},"3":function(container,depth0,helpers,partials,data) {
    var helper;

  return "data-hotspot-id=\""
    + container.escapeExpression(((helper = (helper = helpers.hotSpotID || (depth0 != null ? depth0.hotSpotID : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"hotSpotID","hash":{},"data":data}) : helper)))
    + "\"";
},"5":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "  <a href=\"mailto:?subject=Qorvo Product Table - "
    + alias4(((helper = (helper = helpers.emailSafeName || (depth0 != null ? depth0.emailSafeName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"emailSafeName","hash":{},"data":data}) : helper)))
    + "&body="
    + alias4(((helper = (helper = helpers.mailToLink || (depth0 != null ? depth0.mailToLink : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"mailToLink","hash":{},"data":data}) : helper)))
    + "\" class=\"pst-header-button\"><i class=\"icon-mail\"></i>Email</a>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;
  
  return "<div class=\"pst-header-toggle\"><i class=\"icon-plus\"></i></div>\n<h3 class=\"pst-header-title "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.showCnLink : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + " <span class=\"pst-header-amount\">("
    + alias4(((helper = (helper = helpers.count || (depth0 != null ? depth0.count : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"count","hash":{},"data":data}) : helper)))
    + ")</span></h3>\n<div class=\"pst-header-buttons\">\n  <a href=\"/QorvoPublic/Export/ProductTableExportToExcel?spec="
    + alias4(((helper = (helper = helpers.tableSpec || (depth0 != null ? depth0.tableSpec : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tableSpec","hash":{},"data":data}) : helper)))
    + "&templateID="
    + alias4(((helper = (helper = helpers.templateID || (depth0 != null ? depth0.templateID : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"templateID","hash":{},"data":data}) : helper)))
    + "&hotSpotID="
    + alias4(((helper = (helper = helpers.hotSpotID || (depth0 != null ? depth0.hotSpotID : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"hotSpotID","hash":{},"data":data}) : helper)))
    + "&blockDiagramID="
    + alias4(((helper = (helper = helpers.blockDiagramID || (depth0 != null ? depth0.blockDiagramID : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blockDiagramID","hash":{},"data":data}) : helper)))
    + "&currentID="
    + alias4(((helper = (helper = helpers.currentID || (depth0 != null ? depth0.currentID : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"currentID","hash":{},"data":data}) : helper)))
    + "\" target=\"_blank\" class=\"pst-header-button pst-export\"><i class=\"icon-type-excel\" "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.hotSpotID : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " data-table-id=\""
    + alias4(((helper = (helper = helpers.catID || (depth0 != null ? depth0.catID : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"catID","hash":{},"data":data}) : helper)))
    + "\"></i>Export to Excel</a>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.showEmail : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>\n";
},"useData":true});
templates['listTemplate'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.lambda, alias2=container.escapeExpression;

  return "      <div class='product-type-link'>\n        <a href='"
    + alias2(alias1(((stack1 = (data && data.root)) && stack1.url), depth0))
    + "&tbl="
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.ProductType : depth0)) != null ? stack1.UUID : stack1), depth0))
    + "'> "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.ProductType : depth0)) != null ? stack1.Name : stack1), depth0))
    + " </a>("
    + alias2(((helper = (helper = helpers.ProductCount || (depth0 != null ? depth0.ProductCount : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"ProductCount","hash":{},"data":data}) : helper)))
    + ")\n      </div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return "<div class='product-type-list'>\n  <div class='product-type-sub-list'>\n"
    + ((stack1 = helpers.each.call(alias1,((stack1 = (depth0 != null ? depth0.list : depth0)) != null ? stack1.first : stack1),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  </div>\n  <div class='product-type-sub-list'>\n"
    + ((stack1 = helpers.each.call(alias1,((stack1 = (depth0 != null ? depth0.list : depth0)) != null ? stack1.second : stack1),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  </div>\n</div>\n";
},"useData":true});
templates['loadingTemplate'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"columns twelve u-text-center\">\n      <p>Loading Product Tables</p>\n    </div>\n  </div>\n</div>\n";
},"useData":true});
templates['miniTemplate'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.ifCanDisplay || (depth0 && depth0.ifCanDisplay) || helpers.helperMissing).call(depth0 != null ? depth0 : {},((stack1 = ((stack1 = ((stack1 = (data && data.root)) && stack1.data)) && stack1.headers)) && stack1.Attributes),(data && data.index),"DisplayInTables",{"name":"ifCanDisplay","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "              <th>\n                <div class=\"pst-cell-th\">\n                  <a class=\"pst-col-header\" data-attr="
    + alias4(((helper = (helper = helpers.UUID || (depth0 != null ? depth0.UUID : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"UUID","hash":{},"data":data}) : helper)))
    + ">\n                    <div class=\"pst-col-header-title\">\n                      "
    + alias4(((helper = (helper = helpers.Name || (depth0 != null ? depth0.Name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Name","hash":{},"data":data}) : helper)))
    + "\n                    </div>\n                    <div class=\"pst-col-header-subtitle\">\n                      "
    + alias4(((helper = (helper = helpers.UnitOfMeasure || (depth0 != null ? depth0.UnitOfMeasure : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"UnitOfMeasure","hash":{},"data":data}) : helper)))
    + "\n                    </div>\n                  </a>\n                </div>\n              </th>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "          <tr>\n            <td class=\"pst-cell-sticky\">\n              <div class=\"pst-cell-td\" style=\"width:219px\">\n                <div class=\"pst-part-ref\">\n                  <a href=\"/products/p/"
    + alias4(((helper = (helper = helpers.PartNumber || (depth0 != null ? depth0.PartNumber : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"PartNumber","hash":{},"data":data}) : helper)))
    + "\" class=\"pst-part-ref-name\">"
    + alias4(((helper = (helper = helpers.PartNumber || (depth0 != null ? depth0.PartNumber : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"PartNumber","hash":{},"data":data}) : helper)))
    + "</a>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.DatasheetUrl : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.IsProductNew : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                </div>\n              </div>\n            </td>\n            <td>\n              <div class=\"pst-cell-description\">\n                <div class=\"pst-data\">"
    + alias4(((helper = (helper = helpers.Description || (depth0 != null ? depth0.Description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Description","hash":{},"data":data}) : helper)))
    + "</div>\n              </div>\n            </td>\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.ProductAttributeValues : depth0),{"name":"each","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "          </tr>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var helper;

  return "                    <a href=\""
    + container.escapeExpression(((helper = (helper = helpers.DatasheetUrl || (depth0 != null ? depth0.DatasheetUrl : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"DatasheetUrl","hash":{},"data":data}) : helper)))
    + "\" class=\"pst-part-ref-pdf\"><i class=\"icon-pdf\"></i></a>\n";
},"7":function(container,depth0,helpers,partials,data) {
    return "                    <div class=\"pst-new\">New</div>\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.ifCanDisplay || (depth0 && depth0.ifCanDisplay) || helpers.helperMissing).call(depth0 != null ? depth0 : {},((stack1 = ((stack1 = ((stack1 = (data && data.root)) && stack1.data)) && stack1.headers)) && stack1.Attributes),(data && data.index),"DisplayInTables",{"name":"ifCanDisplay","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"10":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                <td>\n                  <div class=\"pst-cell-td\">\n                    <div class=\"pst-data\">"
    + ((stack1 = container.lambda(depth0, depth0)) != null ? stack1 : "")
    + "</div>\n                  </div>\n                </td>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda;

  return "<div class=\"pst pst-open pst-mini\" id=\"pst_"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n  <div id=\"header_"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\"pst-header\">\n    <h3 class=\"pst-header-title\">"
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.meta : depth0)) != null ? stack1.name : stack1), depth0))
    + " <span class=\"pst-header-amount\">("
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.meta : depth0)) != null ? stack1.length : stack1), depth0))
    + ")</span></h3>\n    <div class=\"pst-header-buttons\">\n    </div>\n  </div>\n  <div id=\""
    + alias4(alias5(((stack1 = ((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.ProductType : stack1)) != null ? stack1.UUID : stack1), depth0))
    + "\" class=\"pst-box\">\n    <table class=\"pst-table\">\n      <tbody id=\"results_"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\"results pst-table-body\">\n        <tr>\n          <th class=\"pst-cell-sticky\">\n            <div class=\"pst-cell-th pst-cell-th-part-ref\">\n              <a href=\"#\" class=\"pst-col-header\">\n                <div class=\"pst-col-header-title\" data-attr=\"partNumber\">"
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.ptVar : depth0)) != null ? stack1.ptPartNumTitle : stack1), depth0))
    + "</div>\n              </a>\n            </div>\n          </th>\n          <th>\n            <div class=\"pst-cell-th pst-cell-th-description\">\n              <a href=\"#\" class=\"pst-col-header\" data-attr=\"description\">\n                <div class=\"pst-col-header-title\">"
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.ptVar : depth0)) != null ? stack1.ptPartNumDescription : stack1), depth0))
    + "</div>\n              </a>\n            </div>\n          </th>\n"
    + ((stack1 = helpers.each.call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.headers : stack1)) != null ? stack1.Attributes : stack1),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </tr>\n"
    + ((stack1 = helpers.each.call(alias1,((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.rows : stack1),{"name":"each","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "      </tbody>\n    </table>\n  </div>\n</div>\n";
},"useData":true});
templates['modalTemplate'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "          <div class=\"pst-modal-data-item\">\n              <label class=\"pst-modal-checkbox\">\n                  <input type=\"checkbox\" value=\""
    + alias4(((helper = (helper = helpers.UUID || (depth0 != null ? depth0.UUID : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"UUID","hash":{},"data":data}) : helper)))
    + "\" class=\"pst-modal-checkbox-input\" "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.Displayed : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">\n                  <div class=\"pst-modal-checkbox-title\">"
    + alias4(((helper = (helper = helpers.Name || (depth0 != null ? depth0.Name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Name","hash":{},"data":data}) : helper)))
    + " "
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.UnitOfMeasure : depth0)) != null ? stack1.length : stack1),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>\n              </label>\n          </div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "checked=\"checked\" ";
},"4":function(container,depth0,helpers,partials,data) {
    var helper;

  return "("
    + container.escapeExpression(((helper = (helper = helpers.UnitOfMeasure || (depth0 != null ? depth0.UnitOfMeasure : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"UnitOfMeasure","hash":{},"data":data}) : helper)))
    + ")";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "<div class=\"pst-modal\" id=modal"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.headers : depth0)) != null ? stack1.UUID : stack1), depth0))
    + ">\n  <div class=\"pst-modal-body\">\n      <h4 class=\"pst-modal-title\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.ptVar : depth0)) != null ? stack1.ptAddRemovePopupTitle : stack1), depth0))
    + "</h4>\n      <div class=\"pst-modal-data\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.addableCols : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "      </div>\n      <div class=\"pst-modal-buttons\">\n          <button class=\"pst-modal-apply pst-trigger-parameters-apply\">Apply</button>\n          <button class=\"pst-modal-cancel pst-trigger-modal-close\">Cancel</button>\n      </div>\n      <button class=\"pst-modal-close pst-trigger-modal-close\"><i class=\"icon-close\"></i></button>\n  </div>\n</div>\n";
},"useData":true});
templates['pstModalTemplate'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "        <div class=\"pst-modal-data-item\"><label class=\"pst-modal-checkbox\">\n            <input type=\"checkbox\" value=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" class=\"pst-modal-checkbox-input\" "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.isVisible : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">\n            <div class=\"pst-modal-checkbox-title\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + " "
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.unitofmeasure : depth0)) != null ? stack1.length : stack1),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>\n          </label></div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "checked=\"checked\"";
},"4":function(container,depth0,helpers,partials,data) {
    var helper;

  return "("
    + container.escapeExpression(((helper = (helper = helpers.unitofmeasure || (depth0 != null ? depth0.unitofmeasure : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"unitofmeasure","hash":{},"data":data}) : helper)))
    + ")";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"pst-modal\" id=modal"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.ProductType : stack1)) != null ? stack1.UUID : stack1), depth0))
    + ">\n  <div class=\"pst-modal-body\">\n    <h4 class=\"pst-modal-title\">Add/Remove Parameters</h4>\n    <div class=\"pst-modal-data\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.addableCols : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\n    <div class=\"pst-modal-buttons\">\n      <button class=\"pst-modal-apply pst-trigger-parameters-apply\">Apply</button>\n      <button class=\"pst-modal-cancel pst-trigger-modal-close\">Cancel</button>\n    </div>\n    <button class=\"pst-modal-close pst-trigger-modal-close\"><i class=\"icon-close\"></i></button>\n  </div>\n</div>\n";
},"useData":true});
templates['pstTemplate'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"pst pst-open\" id=\"pst_"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n  <div id=\"header_"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\"pst-header\">\n  </div>\n  <div class=\"pst-header-ghost\"></div>\n  <div id=\""
    + alias4(container.lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.ProductType : stack1)) != null ? stack1.UUID : stack1), depth0))
    + "\" class=\"pst-box\">\n    <table class=\"pst-table\">\n      <tbody id=\"results_"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\"results pst-table-body\">\n      </tbody>\n    </table>\n    <table class=\"pst-sticky-thead\" style=\"transform: translateY(0px);\">\n      <thead id=\"filters_"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\"filter pst-table-head\">\n      </thead>\n    </table>\n    <table id=\"sticky_col_"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\"pst-sticky-col\" style=\"transform: translateX(0px);\">\n    </table>\n    <div class=\"pst-sticky-point-x\" id=\"sticky_point_"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\"></div>\n  </div>\n  <div id=\"modal_"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\"></div>\n</div>\n";
},"useData":true});
templates['resultsTemplate'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "  <tr>\n    <td class=\"pst-cell-sticky\">\n      <div class=\"pst-cell-td\" style=\"width:219px\">\n        <div class=\"pst-part-ref "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.IsProductNew : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\n          <div class=\"pst-part-ref-checkbox\">\n            <input type=\"checkbox\" class=\"pst-compare-check\" data-checkbox-id=\""
    + alias4(((helper = (helper = helpers.PartNumber || (depth0 != null ? depth0.PartNumber : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"PartNumber","hash":{},"data":data}) : helper)))
    + "\">\n          </div>\n          <a href=\"/products/p/"
    + alias4(((helper = (helper = helpers.PartNumber || (depth0 != null ? depth0.PartNumber : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"PartNumber","hash":{},"data":data}) : helper)))
    + "\" class=\"pst-part-ref-name\">"
    + alias4(((helper = (helper = helpers.PartNumber || (depth0 != null ? depth0.PartNumber : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"PartNumber","hash":{},"data":data}) : helper)))
    + "</a>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.DatasheetUrl : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.IsProductNew : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </div> \n      </div>\n    </td>\n    <td>\n      <div class=\"pst-cell-description\">\n        <div class=\"pst-data\">"
    + alias4(((helper = (helper = helpers.Description || (depth0 != null ? depth0.Description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Description","hash":{},"data":data}) : helper)))
    + "</div>\n      </div>\n    </td>\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.ProductAttributeValuesWithVisibility : depth0),{"name":"each","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  </tr>\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "pst-part-ref-new";
},"4":function(container,depth0,helpers,partials,data) {
    var helper;

  return "            <a href=\""
    + container.escapeExpression(((helper = (helper = helpers.DatasheetUrl || (depth0 != null ? depth0.DatasheetUrl : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"DatasheetUrl","hash":{},"data":data}) : helper)))
    + "\" class=\"pst-part-ref-pdf\"><i class=\"icon-pdf\"></i></a>\n";
},"6":function(container,depth0,helpers,partials,data) {
    return "            <div class=\"pst-new\">New</div>\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.visible : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "        <td>\n          <div class=\"pst-cell-td\">\n            <div class=\"pst-data\">"
    + ((stack1 = ((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"text","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</div>\n          </div>\n        </td>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.results : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
templates['sliderFilterTemplate'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {}, alias2=container.lambda, alias3=container.escapeExpression;

  return "  <div class=\"pst-filter-slider "
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.minonly : stack1),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " "
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.maxonly : stack1),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " "
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.minmax : stack1),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\n    <div class=\"pst-slider-max\"></div>\n    <div class=\"pst-slider\" data-range=\""
    + alias3(alias2(((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.rangeValues : stack1), depth0))
    + "\" data-start=\""
    + alias3(alias2(((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.start : stack1), depth0))
    + "\" data-attrid=\""
    + alias3(alias2(((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.attrID : stack1), depth0))
    + "\" data-tableid=\""
    + alias3(alias2(((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.tableID : stack1), depth0))
    + "\" data-attrtype=\""
    + alias3(alias2(((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.parametricType : stack1), depth0))
    + "\"></div>\n    <div class=\"pst-slider-min\" ></div>\n  </div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "min";
},"4":function(container,depth0,helpers,partials,data) {
    return "max";
},"6":function(container,depth0,helpers,partials,data) {
    return "minmax";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.UniqueValues : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
templates['stickyColRow'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "  <tr>\n    <td class=\"pst-cell-sticky\">\n      <div class=\"pst-cell-td\" style=\"width:219px\">\n        <div class=\"pst-part-ref "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.IsProductNew : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\n          <div class=\"pst-part-ref-checkbox\">\n            <input type=\"checkbox\" class=\"pst-compare-check\" data-checkbox-id=\""
    + alias4(((helper = (helper = helpers.PartNumber || (depth0 != null ? depth0.PartNumber : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"PartNumber","hash":{},"data":data}) : helper)))
    + "\">\n          </div>\n          <a href=\"/products/p/"
    + alias4(((helper = (helper = helpers.PartNumber || (depth0 != null ? depth0.PartNumber : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"PartNumber","hash":{},"data":data}) : helper)))
    + "\" class=\"pst-part-ref-name\">"
    + alias4(((helper = (helper = helpers.PartNumber || (depth0 != null ? depth0.PartNumber : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"PartNumber","hash":{},"data":data}) : helper)))
    + "</a>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.DatasheetUrl : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.IsProductNew : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </div>\n      </div>\n    </td>\n  </tr>\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "pst-part-ref-new";
},"4":function(container,depth0,helpers,partials,data) {
    var helper;

  return "            <a href=\""
    + container.escapeExpression(((helper = (helper = helpers.DatasheetUrl || (depth0 != null ? depth0.DatasheetUrl : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"DatasheetUrl","hash":{},"data":data}) : helper)))
    + "\" class=\"pst-part-ref-pdf\"><i class=\"icon-pdf\"></i></a>\n";
},"6":function(container,depth0,helpers,partials,data) {
    return "            <div class=\"pst-new\">New</div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.rows : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
templates['stickyPoint'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                  <div class=\"pst-modal-data-item\">\n                    <label class=\"pst-modal-checkbox\">\n                      <input type=\"checkbox\" value=\""
    + alias4(((helper = (helper = helpers.SanitizedName || (depth0 != null ? depth0.SanitizedName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"SanitizedName","hash":{},"data":data}) : helper)))
    + "\" class=\"pst-modal-checkbox-input\" "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.Displayed : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">\n                      <div class=\"pst-modal-checkbox-title\">"
    + alias4(((helper = (helper = helpers.Name || (depth0 != null ? depth0.Name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Name","hash":{},"data":data}) : helper)))
    + " "
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.UnitOfMeasure : depth0)) != null ? stack1.length : stack1),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>\n                    </label>\n                  </div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "checked=\"checked\" ";
},"4":function(container,depth0,helpers,partials,data) {
    var helper;

  return "("
    + container.escapeExpression(((helper = (helper = helpers.UnitOfMeasure || (depth0 != null ? depth0.UnitOfMeasure : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"UnitOfMeasure","hash":{},"data":data}) : helper)))
    + ")";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : {}, alias4=helpers.helperMissing, alias5="function";

  return "<table class=\"pst-sticky-point\" style=\"transform: translateY(0px);\">\n  <tr>\n    <th class=\"pst-cell-sticky\" style=\"width: 220px; height: 40px;\">\n      <div class=\"pst-cell-th pst-cell-th-part-ref\">\n        <a href=\"#\" class=\"pst-col-header\" style=\"width: 220px; height: 40px;\">\n          <div class=\"pst-col-header-title\" data-attr=\"partNumber\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.ptVar : depth0)) != null ? stack1.ptPartNumTitle : stack1), depth0))
    + "</div>\n        </a>\n      </div>\n    </th>\n  </tr>\n  <tr>\n    <th class=\"pst-cell-sticky\">\n      <div class=\"pst-cell-filter\">\n        <div class=\"pst-filter-box\">\n          <div class=\"pst-filter-box-title\">"
    + alias2(((helper = (helper = helpers.numResults || (depth0 != null ? depth0.numResults : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"numResults","hash":{},"data":data}) : helper)))
    + " "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.ptVar : depth0)) != null ? stack1.ptMatchProdTitle : stack1), depth0))
    + "</div>\n          <div class=\"pst-filter-box-subtitle\">("
    + alias2(((helper = (helper = helpers.numTotalResults || (depth0 != null ? depth0.numTotalResults : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"numTotalResults","hash":{},"data":data}) : helper)))
    + " total)</div>\n          <button class=\"pst-trigger-parameters\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.ptVar : depth0)) != null ? stack1.ptAddRemoveTitle : stack1), depth0))
    + "</button>\n          <div class=\"pst-modal\" id=modal"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.ProductType : stack1)) != null ? stack1.UUID : stack1), depth0))
    + ">\n            <div class=\"pst-modal-body\">\n              <h4 class=\"pst-modal-title\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.ptVar : depth0)) != null ? stack1.ptAddRemoveTitle : stack1), depth0))
    + "</h4>\n              <div class=\"pst-modal-data\">\n"
    + ((stack1 = helpers.each.call(alias3,(depth0 != null ? depth0.addableCols : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "              </div>\n              <div class=\"pst-modal-buttons\">\n                <button class=\"pst-modal-apply pst-trigger-parameters-apply\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.ptVar : depth0)) != null ? stack1.ptAddParaButton : stack1), depth0))
    + "</button>\n                <button class=\"pst-modal-cancel pst-trigger-modal-close\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.ptVar : depth0)) != null ? stack1.ptCancelParaButton : stack1), depth0))
    + "</button>\n              </div>\n              <button class=\"pst-modal-close pst-trigger-modal-close\"><i class=\"icon-close\"></i></button>\n            </div>\n          </div>\n        </div>\n        <div class=\"pst-filter-buttons\">\n          <button class=\"pst-trigger-compare\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.ptVar : depth0)) != null ? stack1.ptCompareButton : stack1), depth0))
    + "</button>\n          <button class=\"pst-trigger-filters\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.ptVar : depth0)) != null ? stack1.ptParaFilterButton : stack1), depth0))
    + "</button>\n        </div>\n      </div>\n    </th>\n  </tr>\n</table>\n";
},"useData":true});
})();
'use strict';

/* jshint ignore:start */
/*
 * jQuery throttle / debounce - v1.1 - 3/7/2010
 * http://benalman.com/projects/jquery-throttle-debounce-plugin/
 *
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
(function(b,c){var $=b.jQuery||b.Cowboy||(b.Cowboy={}),a;$.throttle=a=function(e,f,j,i){var h,d=0;if(typeof f!=="boolean"){i=j;j=f;f=c}function g(){var o=this,m=+new Date()-d,n=arguments;function l(){d=+new Date();j.apply(o,n)}function k(){h=c}if(i&&!h){l()}h&&clearTimeout(h);if(i===c&&m>e){l()}else{if(f!==true){h=setTimeout(i?k:l,i===c?e-m:e)}}}if($.guid){g.guid=j.guid=j.guid||$.guid++}return g};$.debounce=function(d,e,f){return f===c?a(d,e,false):a(d,f,e!==false)}})(this);
/* jshint ignore:end */

// Breakpoints
var _BPLARGE = 901,
  _BPMEDIUM = 900,
  _BPSMALL = 767;

/**
 * Protect window.console method calls, e.g. console is not defined on IE
 * unless dev tools are open, and IE doesn't define console.debug
 *
 * Chrome 41.0.2272.118: debug,error,info,log,warn,dir,dirxml,table,trace,assert,count,markTimeline,profile,profileEnd,time,timeEnd,timeStamp,timeline,timelineEnd,group,groupCollapsed,groupEnd,clear
 * Firefox 37.0.1: log,info,warn,error,exception,debug,table,trace,dir,group,groupCollapsed,groupEnd,time,timeEnd,profile,profileEnd,assert,count
 * Internet Explorer 11: select,log,info,warn,error,debug,assert,time,timeEnd,timeStamp,group,groupCollapsed,groupEnd,trace,clear,dir,dirxml,count,countReset,cd
 * Safari 6.2.4: debug,error,log,info,warn,clear,dir,dirxml,table,trace,assert,count,profile,profileEnd,time,timeEnd,timeStamp,group,groupCollapsed,groupEnd
 * Opera 28.0.1750.48: debug,error,info,log,warn,dir,dirxml,table,trace,assert,count,markTimeline,profile,profileEnd,time,timeEnd,timeStamp,timeline,timelineEnd,group,groupCollapsed,groupEnd,clear
 */
(function() {
  // Union of Chrome, Firefox, IE, Opera, and Safari console methods
  var methods = ['assert', 'assert', 'cd', 'clear', 'count', 'countReset',
    'debug', 'dir', 'dirxml', 'dirxml', 'dirxml', 'error', 'error', 'exception',
    'group', 'group', 'groupCollapsed', 'groupCollapsed', 'groupEnd', 'info',
    'info', 'log', 'log', 'markTimeline', 'profile', 'profileEnd', 'profileEnd',
    'select', 'table', 'table', 'time', 'time', 'timeEnd', 'timeEnd', 'timeEnd',
    'timeEnd', 'timeEnd', 'timeStamp', 'timeline', 'timelineEnd', 'trace',
    'trace', 'trace', 'trace', 'trace', 'warn'];
  var length = methods.length;
  var console = (window.console = window.console || {});
  var method;
  var noop = function() {};
  while (length--) {
    method = methods[length];
    // define undefined methods as noops to prevent errors
    if (!console[method]) {
      console[method] = noop;
    }

  }
})();


//(function() {})();

$(document).ready(function() {
  $(document).contentnav();
  $(document).leftSideNav();
  checkHistory();
});

//External Link
/* jshint ignore:start */
(function() {
  $('a').each(function() {
     var a = new RegExp('/' + window.location.host + '/');
     var href = $(this).attr('href');
     if (href != undefined && href.indexOf('mailto:') > -1) {
       // if the link contains a mailto prefix...
       // do nothing;
     }
     else if (href != undefined && href.indexOf('http://ir.qorvo') > -1) {
       // do nothing;
     }
     else if (href != undefined && href.indexOf('javascript:void(0)') > -1) {
       // if Linkedin Share button  
       // do nothing;
     }
     else if (href != undefined && href.indexOf('https://qorvousinct1') > -1) {
         // do nothing;
     }
     else if (href != undefined && href.indexOf('https://careers.') > -1) {
         // do nothing;
     }
     else if(!a.test(this.href)) {
         $(this).click(function(event) {
             event.preventDefault();
             event.stopPropagation();
             window.open(this.href, '_blank');             
         });
     }
  });
})(jQuery);
/* jshint ignore:end */


(function($) {
  $.fn.altToggle = function(c) {
    var $e = $(this);
    if ($e.hasClass(c)) {
      $e.removeClass(c);
    } else {
      $e.addClass(c);
    }
  };
}(jQuery));

(function() {
  var matchHeight = function() {
    $('.containter-fluid > .row > .column, .containter-fluid > .row > .columns, .container > .row > .column, .container > .row > .columns').matchHeight({
      'property': 'height',
      'byRow': true
    });
    $.fn.matchHeight._update();

    $('.no-eq').each(function() {
      $(this).find('.columns,.column').each(function() {
        $(this).matchHeight({
          remove: true
        });
        $(this).css('min-height', '0');
      });
    });
  };

  if (!$('html').hasClass('flexbox')) {
    $(document).ready(matchHeight);
    $(document).resize(function() {
      //$.fn.matchHeight._update();
    });
  }
})();


//
// Function isElementInViewport
// Purpose: Determine if element is in viewport using clientHeight/Width coords
//
function isElementInViewport(a) {
  /* jshint ignore:start */
  'function' == typeof jQuery && a instanceof jQuery && (a = a[0]);
  /* jshint ignore:end */
  if (typeof a === 'undefined') {
    return;
  }
  var b = a.getBoundingClientRect();
  return b.top >= 0 && b.left >= 0 && b.bottom <= (window.innerHeight || document.documentElement.clientHeight) && b.right <= (window.innerWidth || document.documentElement.clientWidth);
}

/* jshint ignore:start */
// NEED THIS HERE...
$(document).ready(function() {
  if (History && History.options) {
    History.options.disableSuid = true;
  }
});
/* jshint ignore:end */

function checkHistory(){
  // ie9 ve ie7 return true but never fire, lets remove ie less then 10
  if(("onhashchange" in window)){ // event supported?
    window.onhashchange = function(){
      var tabs = $('.tabs .carousel-container');
      if($(tabs).length > 0){

        $(tabs).find('ul li').each(function(){
          $(this).find('a').removeClass('active');
        });

        var url = window.location.hash.substring(1);
        var target = window.location.hash;
        var newTab, newPosition, currentContent, newContent;        
        
        if(url.length === 0){
          target = $(tabs).find('ul li').eq(0).find('a').attr('href');
          url = target.replace('#','');
        }

        newTab = $(tabs).find('ul li a.cn-link[href="'+target+'"]');
        newPosition = $(newTab).parent('li').index();
        currentContent = $('.tabbed-content-container');
        newContent = $(currentContent).find('div').filter('[id="'+url+'"]');

        $(currentContent).find('div.active').hide();
        $(newTab).addClass('active');
        $(newContent).addClass('active').show();
      
        $('.tabs .carousel-container .slick-slider').slick('slickGoTo',newPosition);
        setItemActive(target);
      }
    }
  }
}

function setItemActive(target){
  var buttonItem = $('.cn-dyn-inner li').find('button').filter('[data-href-tab="'+ target +'"]');   
  if($(buttonItem).length > 0){
    // Check if browser is ie8-9
    var oldIE;
    if ($('html').is('#lt-ie10')) {
      oldIE = true;
    }

    if(oldIE){
      // If IE8/9, change icon color color
      $('.cn-dyn-inner li').each(function(){
        $(this).find('.icon-dot').css('color','#999999');
      });
      //Active item
      $(buttonItem).find('icon-dot').
      $('.cn-dyn-inner li').find('button').filter('[data-href-tab="'+ target +'"]').find('.icon-dot').css('color','#1aa3de');  
    }else{
      //Chage color of all items
      $('.cn-dyn-inner li').each(function(){
          $(this).find('.icon-dot').css('color','#000000');
      });
      $('.cn-dyn-inner li').find('button').filter('[data-href-tab="'+ target +'"]').find('.icon-dot').css('color','#1aa3de');   
    }
  } 
}
/*!
 * Isotope PACKAGED v2.2.2
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * http://isotope.metafizzy.co
 * Copyright 2015 Metafizzy
 */

!function(a){function b(){}function c(a){function c(b){b.prototype.option||(b.prototype.option=function(b){a.isPlainObject(b)&&(this.options=a.extend(!0,this.options,b))})}function e(b,c){a.fn[b]=function(e){if("string"==typeof e){for(var g=d.call(arguments,1),h=0,i=this.length;i>h;h++){var j=this[h],k=a.data(j,b);if(k)if(a.isFunction(k[e])&&"_"!==e.charAt(0)){var l=k[e].apply(k,g);if(void 0!==l)return l}else f("no such method '"+e+"' for "+b+" instance");else f("cannot call methods on "+b+" prior to initialization; attempted to call '"+e+"'")}return this}return this.each(function(){var d=a.data(this,b);d?(d.option(e),d._init()):(d=new c(this,e),a.data(this,b,d))})}}if(a){var f="undefined"==typeof console?b:function(a){console.error(a)};return a.bridget=function(a,b){c(b),e(a,b)},a.bridget}}var d=Array.prototype.slice;"function"==typeof define&&define.amd?define("jquery-bridget/jquery.bridget",["jquery"],c):c("object"==typeof exports?require("jquery"):a.jQuery)}(window),function(a){function b(b){var c=a.event;return c.target=c.target||c.srcElement||b,c}var c=document.documentElement,d=function(){};c.addEventListener?d=function(a,b,c){a.addEventListener(b,c,!1)}:c.attachEvent&&(d=function(a,c,d){a[c+d]=d.handleEvent?function(){var c=b(a);d.handleEvent.call(d,c)}:function(){var c=b(a);d.call(a,c)},a.attachEvent("on"+c,a[c+d])});var e=function(){};c.removeEventListener?e=function(a,b,c){a.removeEventListener(b,c,!1)}:c.detachEvent&&(e=function(a,b,c){a.detachEvent("on"+b,a[b+c]);try{delete a[b+c]}catch(d){a[b+c]=void 0}});var f={bind:d,unbind:e};"function"==typeof define&&define.amd?define("eventie/eventie",f):"object"==typeof exports?module.exports=f:a.eventie=f}(window),function(){"use strict";function a(){}function b(a,b){for(var c=a.length;c--;)if(a[c].listener===b)return c;return-1}function c(a){return function(){return this[a].apply(this,arguments)}}var d=a.prototype,e=this,f=e.EventEmitter;d.getListeners=function(a){var b,c,d=this._getEvents();if(a instanceof RegExp){b={};for(c in d)d.hasOwnProperty(c)&&a.test(c)&&(b[c]=d[c])}else b=d[a]||(d[a]=[]);return b},d.flattenListeners=function(a){var b,c=[];for(b=0;b<a.length;b+=1)c.push(a[b].listener);return c},d.getListenersAsObject=function(a){var b,c=this.getListeners(a);return c instanceof Array&&(b={},b[a]=c),b||c},d.addListener=function(a,c){var d,e=this.getListenersAsObject(a),f="object"==typeof c;for(d in e)e.hasOwnProperty(d)&&-1===b(e[d],c)&&e[d].push(f?c:{listener:c,once:!1});return this},d.on=c("addListener"),d.addOnceListener=function(a,b){return this.addListener(a,{listener:b,once:!0})},d.once=c("addOnceListener"),d.defineEvent=function(a){return this.getListeners(a),this},d.defineEvents=function(a){for(var b=0;b<a.length;b+=1)this.defineEvent(a[b]);return this},d.removeListener=function(a,c){var d,e,f=this.getListenersAsObject(a);for(e in f)f.hasOwnProperty(e)&&(d=b(f[e],c),-1!==d&&f[e].splice(d,1));return this},d.off=c("removeListener"),d.addListeners=function(a,b){return this.manipulateListeners(!1,a,b)},d.removeListeners=function(a,b){return this.manipulateListeners(!0,a,b)},d.manipulateListeners=function(a,b,c){var d,e,f=a?this.removeListener:this.addListener,g=a?this.removeListeners:this.addListeners;if("object"!=typeof b||b instanceof RegExp)for(d=c.length;d--;)f.call(this,b,c[d]);else for(d in b)b.hasOwnProperty(d)&&(e=b[d])&&("function"==typeof e?f.call(this,d,e):g.call(this,d,e));return this},d.removeEvent=function(a){var b,c=typeof a,d=this._getEvents();if("string"===c)delete d[a];else if(a instanceof RegExp)for(b in d)d.hasOwnProperty(b)&&a.test(b)&&delete d[b];else delete this._events;return this},d.removeAllListeners=c("removeEvent"),d.emitEvent=function(a,b){var c,d,e,f,g=this.getListenersAsObject(a);for(e in g)if(g.hasOwnProperty(e))for(d=g[e].length;d--;)c=g[e][d],c.once===!0&&this.removeListener(a,c.listener),f=c.listener.apply(this,b||[]),f===this._getOnceReturnValue()&&this.removeListener(a,c.listener);return this},d.trigger=c("emitEvent"),d.emit=function(a){var b=Array.prototype.slice.call(arguments,1);return this.emitEvent(a,b)},d.setOnceReturnValue=function(a){return this._onceReturnValue=a,this},d._getOnceReturnValue=function(){return this.hasOwnProperty("_onceReturnValue")?this._onceReturnValue:!0},d._getEvents=function(){return this._events||(this._events={})},a.noConflict=function(){return e.EventEmitter=f,a},"function"==typeof define&&define.amd?define("eventEmitter/EventEmitter",[],function(){return a}):"object"==typeof module&&module.exports?module.exports=a:e.EventEmitter=a}.call(this),function(a){function b(a){if(a){if("string"==typeof d[a])return a;a=a.charAt(0).toUpperCase()+a.slice(1);for(var b,e=0,f=c.length;f>e;e++)if(b=c[e]+a,"string"==typeof d[b])return b}}var c="Webkit Moz ms Ms O".split(" "),d=document.documentElement.style;"function"==typeof define&&define.amd?define("get-style-property/get-style-property",[],function(){return b}):"object"==typeof exports?module.exports=b:a.getStyleProperty=b}(window),function(a,b){function c(a){var b=parseFloat(a),c=-1===a.indexOf("%")&&!isNaN(b);return c&&b}function d(){}function e(){for(var a={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},b=0,c=h.length;c>b;b++){var d=h[b];a[d]=0}return a}function f(b){function d(){if(!m){m=!0;var d=a.getComputedStyle;if(j=function(){var a=d?function(a){return d(a,null)}:function(a){return a.currentStyle};return function(b){var c=a(b);return c||g("Style returned "+c+". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"),c}}(),k=b("boxSizing")){var e=document.createElement("div");e.style.width="200px",e.style.padding="1px 2px 3px 4px",e.style.borderStyle="solid",e.style.borderWidth="1px 2px 3px 4px",e.style[k]="border-box";var f=document.body||document.documentElement;f.appendChild(e);var h=j(e);l=200===c(h.width),f.removeChild(e)}}}function f(a){if(d(),"string"==typeof a&&(a=document.querySelector(a)),a&&"object"==typeof a&&a.nodeType){var b=j(a);if("none"===b.display)return e();var f={};f.width=a.offsetWidth,f.height=a.offsetHeight;for(var g=f.isBorderBox=!(!k||!b[k]||"border-box"!==b[k]),m=0,n=h.length;n>m;m++){var o=h[m],p=b[o];p=i(a,p);var q=parseFloat(p);f[o]=isNaN(q)?0:q}var r=f.paddingLeft+f.paddingRight,s=f.paddingTop+f.paddingBottom,t=f.marginLeft+f.marginRight,u=f.marginTop+f.marginBottom,v=f.borderLeftWidth+f.borderRightWidth,w=f.borderTopWidth+f.borderBottomWidth,x=g&&l,y=c(b.width);y!==!1&&(f.width=y+(x?0:r+v));var z=c(b.height);return z!==!1&&(f.height=z+(x?0:s+w)),f.innerWidth=f.width-(r+v),f.innerHeight=f.height-(s+w),f.outerWidth=f.width+t,f.outerHeight=f.height+u,f}}function i(b,c){if(a.getComputedStyle||-1===c.indexOf("%"))return c;var d=b.style,e=d.left,f=b.runtimeStyle,g=f&&f.left;return g&&(f.left=b.currentStyle.left),d.left=c,c=d.pixelLeft,d.left=e,g&&(f.left=g),c}var j,k,l,m=!1;return f}var g="undefined"==typeof console?d:function(a){console.error(a)},h=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"];"function"==typeof define&&define.amd?define("get-size/get-size",["get-style-property/get-style-property"],f):"object"==typeof exports?module.exports=f(require("desandro-get-style-property")):a.getSize=f(a.getStyleProperty)}(window),function(a){function b(a){"function"==typeof a&&(b.isReady?a():g.push(a))}function c(a){var c="readystatechange"===a.type&&"complete"!==f.readyState;b.isReady||c||d()}function d(){b.isReady=!0;for(var a=0,c=g.length;c>a;a++){var d=g[a];d()}}function e(e){return"complete"===f.readyState?d():(e.bind(f,"DOMContentLoaded",c),e.bind(f,"readystatechange",c),e.bind(a,"load",c)),b}var f=a.document,g=[];b.isReady=!1,"function"==typeof define&&define.amd?define("doc-ready/doc-ready",["eventie/eventie"],e):"object"==typeof exports?module.exports=e(require("eventie")):a.docReady=e(a.eventie)}(window),function(a){"use strict";function b(a,b){return a[g](b)}function c(a){if(!a.parentNode){var b=document.createDocumentFragment();b.appendChild(a)}}function d(a,b){c(a);for(var d=a.parentNode.querySelectorAll(b),e=0,f=d.length;f>e;e++)if(d[e]===a)return!0;return!1}function e(a,d){return c(a),b(a,d)}var f,g=function(){if(a.matches)return"matches";if(a.matchesSelector)return"matchesSelector";for(var b=["webkit","moz","ms","o"],c=0,d=b.length;d>c;c++){var e=b[c],f=e+"MatchesSelector";if(a[f])return f}}();if(g){var h=document.createElement("div"),i=b(h,"div");f=i?b:e}else f=d;"function"==typeof define&&define.amd?define("matches-selector/matches-selector",[],function(){return f}):"object"==typeof exports?module.exports=f:window.matchesSelector=f}(Element.prototype),function(a,b){"use strict";"function"==typeof define&&define.amd?define("fizzy-ui-utils/utils",["doc-ready/doc-ready","matches-selector/matches-selector"],function(c,d){return b(a,c,d)}):"object"==typeof exports?module.exports=b(a,require("doc-ready"),require("desandro-matches-selector")):a.fizzyUIUtils=b(a,a.docReady,a.matchesSelector)}(window,function(a,b,c){var d={};d.extend=function(a,b){for(var c in b)a[c]=b[c];return a},d.modulo=function(a,b){return(a%b+b)%b};var e=Object.prototype.toString;d.isArray=function(a){return"[object Array]"==e.call(a)},d.makeArray=function(a){var b=[];if(d.isArray(a))b=a;else if(a&&"number"==typeof a.length)for(var c=0,e=a.length;e>c;c++)b.push(a[c]);else b.push(a);return b},d.indexOf=Array.prototype.indexOf?function(a,b){return a.indexOf(b)}:function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},d.removeFrom=function(a,b){var c=d.indexOf(a,b);-1!=c&&a.splice(c,1)},d.isElement="function"==typeof HTMLElement||"object"==typeof HTMLElement?function(a){return a instanceof HTMLElement}:function(a){return a&&"object"==typeof a&&1==a.nodeType&&"string"==typeof a.nodeName},d.setText=function(){function a(a,c){b=b||(void 0!==document.documentElement.textContent?"textContent":"innerText"),a[b]=c}var b;return a}(),d.getParent=function(a,b){for(;a!=document.body;)if(a=a.parentNode,c(a,b))return a},d.getQueryElement=function(a){return"string"==typeof a?document.querySelector(a):a},d.handleEvent=function(a){var b="on"+a.type;this[b]&&this[b](a)},d.filterFindElements=function(a,b){a=d.makeArray(a);for(var e=[],f=0,g=a.length;g>f;f++){var h=a[f];if(d.isElement(h))if(b){c(h,b)&&e.push(h);for(var i=h.querySelectorAll(b),j=0,k=i.length;k>j;j++)e.push(i[j])}else e.push(h)}return e},d.debounceMethod=function(a,b,c){var d=a.prototype[b],e=b+"Timeout";a.prototype[b]=function(){var a=this[e];a&&clearTimeout(a);var b=arguments,f=this;this[e]=setTimeout(function(){d.apply(f,b),delete f[e]},c||100)}},d.toDashed=function(a){return a.replace(/(.)([A-Z])/g,function(a,b,c){return b+"-"+c}).toLowerCase()};var f=a.console;return d.htmlInit=function(c,e){b(function(){for(var b=d.toDashed(e),g=document.querySelectorAll(".js-"+b),h="data-"+b+"-options",i=0,j=g.length;j>i;i++){var k,l=g[i],m=l.getAttribute(h);try{k=m&&JSON.parse(m)}catch(n){f&&f.error("Error parsing "+h+" on "+l.nodeName.toLowerCase()+(l.id?"#"+l.id:"")+": "+n);continue}var o=new c(l,k),p=a.jQuery;p&&p.data(l,e,o)}})},d}),function(a,b){"use strict";"function"==typeof define&&define.amd?define("outlayer/item",["eventEmitter/EventEmitter","get-size/get-size","get-style-property/get-style-property","fizzy-ui-utils/utils"],function(c,d,e,f){return b(a,c,d,e,f)}):"object"==typeof exports?module.exports=b(a,require("wolfy87-eventemitter"),require("get-size"),require("desandro-get-style-property"),require("fizzy-ui-utils")):(a.Outlayer={},a.Outlayer.Item=b(a,a.EventEmitter,a.getSize,a.getStyleProperty,a.fizzyUIUtils))}(window,function(a,b,c,d,e){"use strict";function f(a){for(var b in a)return!1;return b=null,!0}function g(a,b){a&&(this.element=a,this.layout=b,this.position={x:0,y:0},this._create())}function h(a){return a.replace(/([A-Z])/g,function(a){return"-"+a.toLowerCase()})}var i=a.getComputedStyle,j=i?function(a){return i(a,null)}:function(a){return a.currentStyle},k=d("transition"),l=d("transform"),m=k&&l,n=!!d("perspective"),o={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"otransitionend",transition:"transitionend"}[k],p=["transform","transition","transitionDuration","transitionProperty"],q=function(){for(var a={},b=0,c=p.length;c>b;b++){var e=p[b],f=d(e);f&&f!==e&&(a[e]=f)}return a}();e.extend(g.prototype,b.prototype),g.prototype._create=function(){this._transn={ingProperties:{},clean:{},onEnd:{}},this.css({position:"absolute"})},g.prototype.handleEvent=function(a){var b="on"+a.type;this[b]&&this[b](a)},g.prototype.getSize=function(){this.size=c(this.element)},g.prototype.css=function(a){var b=this.element.style;for(var c in a){var d=q[c]||c;b[d]=a[c]}},g.prototype.getPosition=function(){var a=j(this.element),b=this.layout.options,c=b.isOriginLeft,d=b.isOriginTop,e=a[c?"left":"right"],f=a[d?"top":"bottom"],g=this.layout.size,h=-1!=e.indexOf("%")?parseFloat(e)/100*g.width:parseInt(e,10),i=-1!=f.indexOf("%")?parseFloat(f)/100*g.height:parseInt(f,10);h=isNaN(h)?0:h,i=isNaN(i)?0:i,h-=c?g.paddingLeft:g.paddingRight,i-=d?g.paddingTop:g.paddingBottom,this.position.x=h,this.position.y=i},g.prototype.layoutPosition=function(){var a=this.layout.size,b=this.layout.options,c={},d=b.isOriginLeft?"paddingLeft":"paddingRight",e=b.isOriginLeft?"left":"right",f=b.isOriginLeft?"right":"left",g=this.position.x+a[d];c[e]=this.getXValue(g),c[f]="";var h=b.isOriginTop?"paddingTop":"paddingBottom",i=b.isOriginTop?"top":"bottom",j=b.isOriginTop?"bottom":"top",k=this.position.y+a[h];c[i]=this.getYValue(k),c[j]="",this.css(c),this.emitEvent("layout",[this])},g.prototype.getXValue=function(a){var b=this.layout.options;return b.percentPosition&&!b.isHorizontal?a/this.layout.size.width*100+"%":a+"px"},g.prototype.getYValue=function(a){var b=this.layout.options;return b.percentPosition&&b.isHorizontal?a/this.layout.size.height*100+"%":a+"px"},g.prototype._transitionTo=function(a,b){this.getPosition();var c=this.position.x,d=this.position.y,e=parseInt(a,10),f=parseInt(b,10),g=e===this.position.x&&f===this.position.y;if(this.setPosition(a,b),g&&!this.isTransitioning)return void this.layoutPosition();var h=a-c,i=b-d,j={};j.transform=this.getTranslate(h,i),this.transition({to:j,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})},g.prototype.getTranslate=function(a,b){var c=this.layout.options;return a=c.isOriginLeft?a:-a,b=c.isOriginTop?b:-b,n?"translate3d("+a+"px, "+b+"px, 0)":"translate("+a+"px, "+b+"px)"},g.prototype.goTo=function(a,b){this.setPosition(a,b),this.layoutPosition()},g.prototype.moveTo=m?g.prototype._transitionTo:g.prototype.goTo,g.prototype.setPosition=function(a,b){this.position.x=parseInt(a,10),this.position.y=parseInt(b,10)},g.prototype._nonTransition=function(a){this.css(a.to),a.isCleaning&&this._removeStyles(a.to);for(var b in a.onTransitionEnd)a.onTransitionEnd[b].call(this)},g.prototype._transition=function(a){if(!parseFloat(this.layout.options.transitionDuration))return void this._nonTransition(a);var b=this._transn;for(var c in a.onTransitionEnd)b.onEnd[c]=a.onTransitionEnd[c];for(c in a.to)b.ingProperties[c]=!0,a.isCleaning&&(b.clean[c]=!0);if(a.from){this.css(a.from);var d=this.element.offsetHeight;d=null}this.enableTransition(a.to),this.css(a.to),this.isTransitioning=!0};var r="opacity,"+h(q.transform||"transform");g.prototype.enableTransition=function(){this.isTransitioning||(this.css({transitionProperty:r,transitionDuration:this.layout.options.transitionDuration}),this.element.addEventListener(o,this,!1))},g.prototype.transition=g.prototype[k?"_transition":"_nonTransition"],g.prototype.onwebkitTransitionEnd=function(a){this.ontransitionend(a)},g.prototype.onotransitionend=function(a){this.ontransitionend(a)};var s={"-webkit-transform":"transform","-moz-transform":"transform","-o-transform":"transform"};g.prototype.ontransitionend=function(a){if(a.target===this.element){var b=this._transn,c=s[a.propertyName]||a.propertyName;if(delete b.ingProperties[c],f(b.ingProperties)&&this.disableTransition(),c in b.clean&&(this.element.style[a.propertyName]="",delete b.clean[c]),c in b.onEnd){var d=b.onEnd[c];d.call(this),delete b.onEnd[c]}this.emitEvent("transitionEnd",[this])}},g.prototype.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(o,this,!1),this.isTransitioning=!1},g.prototype._removeStyles=function(a){var b={};for(var c in a)b[c]="";this.css(b)};var t={transitionProperty:"",transitionDuration:""};return g.prototype.removeTransitionStyles=function(){this.css(t)},g.prototype.removeElem=function(){this.element.parentNode.removeChild(this.element),this.css({display:""}),this.emitEvent("remove",[this])},g.prototype.remove=function(){if(!k||!parseFloat(this.layout.options.transitionDuration))return void this.removeElem();var a=this;this.once("transitionEnd",function(){a.removeElem()}),this.hide()},g.prototype.reveal=function(){delete this.isHidden,this.css({display:""});var a=this.layout.options,b={},c=this.getHideRevealTransitionEndProperty("visibleStyle");b[c]=this.onRevealTransitionEnd,this.transition({from:a.hiddenStyle,to:a.visibleStyle,isCleaning:!0,onTransitionEnd:b})},g.prototype.onRevealTransitionEnd=function(){this.isHidden||this.emitEvent("reveal")},g.prototype.getHideRevealTransitionEndProperty=function(a){var b=this.layout.options[a];if(b.opacity)return"opacity";for(var c in b)return c},g.prototype.hide=function(){this.isHidden=!0,this.css({display:""});var a=this.layout.options,b={},c=this.getHideRevealTransitionEndProperty("hiddenStyle");b[c]=this.onHideTransitionEnd,this.transition({from:a.visibleStyle,to:a.hiddenStyle,isCleaning:!0,onTransitionEnd:b})},g.prototype.onHideTransitionEnd=function(){this.isHidden&&(this.css({display:"none"}),this.emitEvent("hide"))},g.prototype.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})},g}),function(a,b){"use strict";"function"==typeof define&&define.amd?define("outlayer/outlayer",["eventie/eventie","eventEmitter/EventEmitter","get-size/get-size","fizzy-ui-utils/utils","./item"],function(c,d,e,f,g){return b(a,c,d,e,f,g)}):"object"==typeof exports?module.exports=b(a,require("eventie"),require("wolfy87-eventemitter"),require("get-size"),require("fizzy-ui-utils"),require("./item")):a.Outlayer=b(a,a.eventie,a.EventEmitter,a.getSize,a.fizzyUIUtils,a.Outlayer.Item)}(window,function(a,b,c,d,e,f){"use strict";function g(a,b){var c=e.getQueryElement(a);if(!c)return void(h&&h.error("Bad element for "+this.constructor.namespace+": "+(c||a)));this.element=c,i&&(this.$element=i(this.element)),this.options=e.extend({},this.constructor.defaults),this.option(b);var d=++k;this.element.outlayerGUID=d,l[d]=this,this._create(),this.options.isInitLayout&&this.layout()}var h=a.console,i=a.jQuery,j=function(){},k=0,l={};return g.namespace="outlayer",g.Item=f,g.defaults={containerStyle:{position:"relative"},isInitLayout:!0,isOriginLeft:!0,isOriginTop:!0,isResizeBound:!0,isResizingContainer:!0,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}},e.extend(g.prototype,c.prototype),g.prototype.option=function(a){e.extend(this.options,a)},g.prototype._create=function(){this.reloadItems(),this.stamps=[],this.stamp(this.options.stamp),e.extend(this.element.style,this.options.containerStyle),this.options.isResizeBound&&this.bindResize()},g.prototype.reloadItems=function(){this.items=this._itemize(this.element.children)},g.prototype._itemize=function(a){for(var b=this._filterFindItemElements(a),c=this.constructor.Item,d=[],e=0,f=b.length;f>e;e++){var g=b[e],h=new c(g,this);d.push(h)}return d},g.prototype._filterFindItemElements=function(a){return e.filterFindElements(a,this.options.itemSelector)},g.prototype.getItemElements=function(){for(var a=[],b=0,c=this.items.length;c>b;b++)a.push(this.items[b].element);return a},g.prototype.layout=function(){this._resetLayout(),this._manageStamps();var a=void 0!==this.options.isLayoutInstant?this.options.isLayoutInstant:!this._isLayoutInited;this.layoutItems(this.items,a),this._isLayoutInited=!0},g.prototype._init=g.prototype.layout,g.prototype._resetLayout=function(){this.getSize()},g.prototype.getSize=function(){this.size=d(this.element)},g.prototype._getMeasurement=function(a,b){var c,f=this.options[a];f?("string"==typeof f?c=this.element.querySelector(f):e.isElement(f)&&(c=f),this[a]=c?d(c)[b]:f):this[a]=0},g.prototype.layoutItems=function(a,b){a=this._getItemsForLayout(a),this._layoutItems(a,b),this._postLayout()},g.prototype._getItemsForLayout=function(a){for(var b=[],c=0,d=a.length;d>c;c++){var e=a[c];e.isIgnored||b.push(e)}return b},g.prototype._layoutItems=function(a,b){if(this._emitCompleteOnItems("layout",a),a&&a.length){for(var c=[],d=0,e=a.length;e>d;d++){var f=a[d],g=this._getItemLayoutPosition(f);g.item=f,g.isInstant=b||f.isLayoutInstant,c.push(g)}this._processLayoutQueue(c)}},g.prototype._getItemLayoutPosition=function(){return{x:0,y:0}},g.prototype._processLayoutQueue=function(a){for(var b=0,c=a.length;c>b;b++){var d=a[b];this._positionItem(d.item,d.x,d.y,d.isInstant)}},g.prototype._positionItem=function(a,b,c,d){d?a.goTo(b,c):a.moveTo(b,c)},g.prototype._postLayout=function(){this.resizeContainer()},g.prototype.resizeContainer=function(){if(this.options.isResizingContainer){var a=this._getContainerSize();a&&(this._setContainerMeasure(a.width,!0),this._setContainerMeasure(a.height,!1))}},g.prototype._getContainerSize=j,g.prototype._setContainerMeasure=function(a,b){if(void 0!==a){var c=this.size;c.isBorderBox&&(a+=b?c.paddingLeft+c.paddingRight+c.borderLeftWidth+c.borderRightWidth:c.paddingBottom+c.paddingTop+c.borderTopWidth+c.borderBottomWidth),a=Math.max(a,0),this.element.style[b?"width":"height"]=a+"px"}},g.prototype._emitCompleteOnItems=function(a,b){function c(){e.dispatchEvent(a+"Complete",null,[b])}function d(){g++,g===f&&c()}var e=this,f=b.length;if(!b||!f)return void c();for(var g=0,h=0,i=b.length;i>h;h++){var j=b[h];j.once(a,d)}},g.prototype.dispatchEvent=function(a,b,c){var d=b?[b].concat(c):c;if(this.emitEvent(a,d),i)if(this.$element=this.$element||i(this.element),b){var e=i.Event(b);e.type=a,this.$element.trigger(e,c)}else this.$element.trigger(a,c)},g.prototype.ignore=function(a){var b=this.getItem(a);b&&(b.isIgnored=!0)},g.prototype.unignore=function(a){var b=this.getItem(a);b&&delete b.isIgnored},g.prototype.stamp=function(a){if(a=this._find(a)){this.stamps=this.stamps.concat(a);for(var b=0,c=a.length;c>b;b++){var d=a[b];this.ignore(d)}}},g.prototype.unstamp=function(a){if(a=this._find(a))for(var b=0,c=a.length;c>b;b++){var d=a[b];e.removeFrom(this.stamps,d),this.unignore(d)}},g.prototype._find=function(a){return a?("string"==typeof a&&(a=this.element.querySelectorAll(a)),a=e.makeArray(a)):void 0},g.prototype._manageStamps=function(){if(this.stamps&&this.stamps.length){this._getBoundingRect();for(var a=0,b=this.stamps.length;b>a;a++){var c=this.stamps[a];this._manageStamp(c)}}},g.prototype._getBoundingRect=function(){var a=this.element.getBoundingClientRect(),b=this.size;this._boundingRect={left:a.left+b.paddingLeft+b.borderLeftWidth,top:a.top+b.paddingTop+b.borderTopWidth,right:a.right-(b.paddingRight+b.borderRightWidth),bottom:a.bottom-(b.paddingBottom+b.borderBottomWidth)}},g.prototype._manageStamp=j,g.prototype._getElementOffset=function(a){var b=a.getBoundingClientRect(),c=this._boundingRect,e=d(a),f={left:b.left-c.left-e.marginLeft,top:b.top-c.top-e.marginTop,right:c.right-b.right-e.marginRight,bottom:c.bottom-b.bottom-e.marginBottom};return f},g.prototype.handleEvent=function(a){var b="on"+a.type;this[b]&&this[b](a)},g.prototype.bindResize=function(){this.isResizeBound||(b.bind(a,"resize",this),this.isResizeBound=!0)},g.prototype.unbindResize=function(){this.isResizeBound&&b.unbind(a,"resize",this),this.isResizeBound=!1},g.prototype.onresize=function(){function a(){b.resize(),delete b.resizeTimeout}this.resizeTimeout&&clearTimeout(this.resizeTimeout);var b=this;this.resizeTimeout=setTimeout(a,100)},g.prototype.resize=function(){this.isResizeBound&&this.needsResizeLayout()&&this.layout()},g.prototype.needsResizeLayout=function(){var a=d(this.element),b=this.size&&a;return b&&a.innerWidth!==this.size.innerWidth},g.prototype.addItems=function(a){var b=this._itemize(a);return b.length&&(this.items=this.items.concat(b)),b},g.prototype.appended=function(a){var b=this.addItems(a);b.length&&(this.layoutItems(b,!0),this.reveal(b))},g.prototype.prepended=function(a){var b=this._itemize(a);if(b.length){var c=this.items.slice(0);this.items=b.concat(c),this._resetLayout(),this._manageStamps(),this.layoutItems(b,!0),this.reveal(b),this.layoutItems(c)}},g.prototype.reveal=function(a){this._emitCompleteOnItems("reveal",a);for(var b=a&&a.length,c=0;b&&b>c;c++){var d=a[c];d.reveal()}},g.prototype.hide=function(a){this._emitCompleteOnItems("hide",a);for(var b=a&&a.length,c=0;b&&b>c;c++){var d=a[c];d.hide()}},g.prototype.revealItemElements=function(a){var b=this.getItems(a);this.reveal(b)},g.prototype.hideItemElements=function(a){var b=this.getItems(a);this.hide(b)},g.prototype.getItem=function(a){for(var b=0,c=this.items.length;c>b;b++){var d=this.items[b];if(d.element===a)return d}},g.prototype.getItems=function(a){a=e.makeArray(a);for(var b=[],c=0,d=a.length;d>c;c++){var f=a[c],g=this.getItem(f);g&&b.push(g)}return b},g.prototype.remove=function(a){var b=this.getItems(a);if(this._emitCompleteOnItems("remove",b),b&&b.length)for(var c=0,d=b.length;d>c;c++){var f=b[c];f.remove(),e.removeFrom(this.items,f)}},g.prototype.destroy=function(){var a=this.element.style;a.height="",a.position="",a.width="";for(var b=0,c=this.items.length;c>b;b++){var d=this.items[b];d.destroy()}this.unbindResize();var e=this.element.outlayerGUID;delete l[e],delete this.element.outlayerGUID,i&&i.removeData(this.element,this.constructor.namespace)},g.data=function(a){a=e.getQueryElement(a);var b=a&&a.outlayerGUID;return b&&l[b]},g.create=function(a,b){function c(){g.apply(this,arguments)}return Object.create?c.prototype=Object.create(g.prototype):e.extend(c.prototype,g.prototype),c.prototype.constructor=c,c.defaults=e.extend({},g.defaults),e.extend(c.defaults,b),c.prototype.settings={},c.namespace=a,c.data=g.data,c.Item=function(){f.apply(this,arguments)},c.Item.prototype=new f,e.htmlInit(c,a),i&&i.bridget&&i.bridget(a,c),c},g.Item=f,g}),function(a,b){"use strict";"function"==typeof define&&define.amd?define("isotope/js/item",["outlayer/outlayer"],b):"object"==typeof exports?module.exports=b(require("outlayer")):(a.Isotope=a.Isotope||{},a.Isotope.Item=b(a.Outlayer))}(window,function(a){"use strict";function b(){a.Item.apply(this,arguments)}b.prototype=new a.Item,b.prototype._create=function(){this.id=this.layout.itemGUID++,a.Item.prototype._create.call(this),this.sortData={}},b.prototype.updateSortData=function(){if(!this.isIgnored){this.sortData.id=this.id,this.sortData["original-order"]=this.id,this.sortData.random=Math.random();var a=this.layout.options.getSortData,b=this.layout._sorters;for(var c in a){var d=b[c];this.sortData[c]=d(this.element,this)}}};var c=b.prototype.destroy;return b.prototype.destroy=function(){c.apply(this,arguments),this.css({display:""})},b}),function(a,b){"use strict";"function"==typeof define&&define.amd?define("isotope/js/layout-mode",["get-size/get-size","outlayer/outlayer"],b):"object"==typeof exports?module.exports=b(require("get-size"),require("outlayer")):(a.Isotope=a.Isotope||{},a.Isotope.LayoutMode=b(a.getSize,a.Outlayer))}(window,function(a,b){"use strict";function c(a){this.isotope=a,a&&(this.options=a.options[this.namespace],this.element=a.element,this.items=a.filteredItems,this.size=a.size)}return function(){function a(a){return function(){return b.prototype[a].apply(this.isotope,arguments)}}for(var d=["_resetLayout","_getItemLayoutPosition","_manageStamp","_getContainerSize","_getElementOffset","needsResizeLayout"],e=0,f=d.length;f>e;e++){var g=d[e];c.prototype[g]=a(g)}}(),c.prototype.needsVerticalResizeLayout=function(){var b=a(this.isotope.element),c=this.isotope.size&&b;return c&&b.innerHeight!=this.isotope.size.innerHeight},c.prototype._getMeasurement=function(){this.isotope._getMeasurement.apply(this,arguments)},c.prototype.getColumnWidth=function(){this.getSegmentSize("column","Width")},c.prototype.getRowHeight=function(){this.getSegmentSize("row","Height")},c.prototype.getSegmentSize=function(a,b){var c=a+b,d="outer"+b;if(this._getMeasurement(c,d),!this[c]){var e=this.getFirstItemSize();this[c]=e&&e[d]||this.isotope.size["inner"+b]}},c.prototype.getFirstItemSize=function(){var b=this.isotope.filteredItems[0];return b&&b.element&&a(b.element)},c.prototype.layout=function(){this.isotope.layout.apply(this.isotope,arguments)},c.prototype.getSize=function(){this.isotope.getSize(),this.size=this.isotope.size},c.modes={},c.create=function(a,b){function d(){c.apply(this,arguments)}return d.prototype=new c,b&&(d.options=b),d.prototype.namespace=a,c.modes[a]=d,d},c}),function(a,b){"use strict";"function"==typeof define&&define.amd?define("masonry/masonry",["outlayer/outlayer","get-size/get-size","fizzy-ui-utils/utils"],b):"object"==typeof exports?module.exports=b(require("outlayer"),require("get-size"),require("fizzy-ui-utils")):a.Masonry=b(a.Outlayer,a.getSize,a.fizzyUIUtils)}(window,function(a,b,c){var d=a.create("masonry");return d.prototype._resetLayout=function(){this.getSize(),this._getMeasurement("columnWidth","outerWidth"),this._getMeasurement("gutter","outerWidth"),this.measureColumns();var a=this.cols;for(this.colYs=[];a--;)this.colYs.push(0);this.maxY=0},d.prototype.measureColumns=function(){if(this.getContainerWidth(),!this.columnWidth){var a=this.items[0],c=a&&a.element;this.columnWidth=c&&b(c).outerWidth||this.containerWidth}var d=this.columnWidth+=this.gutter,e=this.containerWidth+this.gutter,f=e/d,g=d-e%d,h=g&&1>g?"round":"floor";f=Math[h](f),this.cols=Math.max(f,1)},d.prototype.getContainerWidth=function(){var a=this.options.isFitWidth?this.element.parentNode:this.element,c=b(a);this.containerWidth=c&&c.innerWidth},d.prototype._getItemLayoutPosition=function(a){a.getSize();var b=a.size.outerWidth%this.columnWidth,d=b&&1>b?"round":"ceil",e=Math[d](a.size.outerWidth/this.columnWidth);e=Math.min(e,this.cols);for(var f=this._getColGroup(e),g=Math.min.apply(Math,f),h=c.indexOf(f,g),i={x:this.columnWidth*h,y:g},j=g+a.size.outerHeight,k=this.cols+1-f.length,l=0;k>l;l++)this.colYs[h+l]=j;return i},d.prototype._getColGroup=function(a){if(2>a)return this.colYs;for(var b=[],c=this.cols+1-a,d=0;c>d;d++){var e=this.colYs.slice(d,d+a);b[d]=Math.max.apply(Math,e)}return b},d.prototype._manageStamp=function(a){var c=b(a),d=this._getElementOffset(a),e=this.options.isOriginLeft?d.left:d.right,f=e+c.outerWidth,g=Math.floor(e/this.columnWidth);g=Math.max(0,g);var h=Math.floor(f/this.columnWidth);h-=f%this.columnWidth?0:1,h=Math.min(this.cols-1,h);for(var i=(this.options.isOriginTop?d.top:d.bottom)+c.outerHeight,j=g;h>=j;j++)this.colYs[j]=Math.max(i,this.colYs[j])},d.prototype._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);var a={height:this.maxY};return this.options.isFitWidth&&(a.width=this._getContainerFitWidth()),a},d.prototype._getContainerFitWidth=function(){for(var a=0,b=this.cols;--b&&0===this.colYs[b];)a++;return(this.cols-a)*this.columnWidth-this.gutter},d.prototype.needsResizeLayout=function(){var a=this.containerWidth;return this.getContainerWidth(),a!==this.containerWidth},d}),function(a,b){"use strict";"function"==typeof define&&define.amd?define("isotope/js/layout-modes/masonry",["../layout-mode","masonry/masonry"],b):"object"==typeof exports?module.exports=b(require("../layout-mode"),require("masonry-layout")):b(a.Isotope.LayoutMode,a.Masonry)}(window,function(a,b){"use strict";function c(a,b){for(var c in b)a[c]=b[c];return a}var d=a.create("masonry"),e=d.prototype._getElementOffset,f=d.prototype.layout,g=d.prototype._getMeasurement;
c(d.prototype,b.prototype),d.prototype._getElementOffset=e,d.prototype.layout=f,d.prototype._getMeasurement=g;var h=d.prototype.measureColumns;d.prototype.measureColumns=function(){this.items=this.isotope.filteredItems,h.call(this)};var i=d.prototype._manageStamp;return d.prototype._manageStamp=function(){this.options.isOriginLeft=this.isotope.options.isOriginLeft,this.options.isOriginTop=this.isotope.options.isOriginTop,i.apply(this,arguments)},d}),function(a,b){"use strict";"function"==typeof define&&define.amd?define("isotope/js/layout-modes/fit-rows",["../layout-mode"],b):"object"==typeof exports?module.exports=b(require("../layout-mode")):b(a.Isotope.LayoutMode)}(window,function(a){"use strict";var b=a.create("fitRows");return b.prototype._resetLayout=function(){this.x=0,this.y=0,this.maxY=0,this._getMeasurement("gutter","outerWidth")},b.prototype._getItemLayoutPosition=function(a){a.getSize();var b=a.size.outerWidth+this.gutter,c=this.isotope.size.innerWidth+this.gutter;0!==this.x&&b+this.x>c&&(this.x=0,this.y=this.maxY);var d={x:this.x,y:this.y};return this.maxY=Math.max(this.maxY,this.y+a.size.outerHeight),this.x+=b,d},b.prototype._getContainerSize=function(){return{height:this.maxY}},b}),function(a,b){"use strict";"function"==typeof define&&define.amd?define("isotope/js/layout-modes/vertical",["../layout-mode"],b):"object"==typeof exports?module.exports=b(require("../layout-mode")):b(a.Isotope.LayoutMode)}(window,function(a){"use strict";var b=a.create("vertical",{horizontalAlignment:0});return b.prototype._resetLayout=function(){this.y=0},b.prototype._getItemLayoutPosition=function(a){a.getSize();var b=(this.isotope.size.innerWidth-a.size.outerWidth)*this.options.horizontalAlignment,c=this.y;return this.y+=a.size.outerHeight,{x:b,y:c}},b.prototype._getContainerSize=function(){return{height:this.y}},b}),function(a,b){"use strict";"function"==typeof define&&define.amd?define(["outlayer/outlayer","get-size/get-size","matches-selector/matches-selector","fizzy-ui-utils/utils","isotope/js/item","isotope/js/layout-mode","isotope/js/layout-modes/masonry","isotope/js/layout-modes/fit-rows","isotope/js/layout-modes/vertical"],function(c,d,e,f,g,h){return b(a,c,d,e,f,g,h)}):"object"==typeof exports?module.exports=b(a,require("outlayer"),require("get-size"),require("desandro-matches-selector"),require("fizzy-ui-utils"),require("./item"),require("./layout-mode"),require("./layout-modes/masonry"),require("./layout-modes/fit-rows"),require("./layout-modes/vertical")):a.Isotope=b(a,a.Outlayer,a.getSize,a.matchesSelector,a.fizzyUIUtils,a.Isotope.Item,a.Isotope.LayoutMode)}(window,function(a,b,c,d,e,f,g){function h(a,b){return function(c,d){for(var e=0,f=a.length;f>e;e++){var g=a[e],h=c.sortData[g],i=d.sortData[g];if(h>i||i>h){var j=void 0!==b[g]?b[g]:b,k=j?1:-1;return(h>i?1:-1)*k}}return 0}}var i=a.jQuery,j=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^\s+|\s+$/g,"")},k=document.documentElement,l=k.textContent?function(a){return a.textContent}:function(a){return a.innerText},m=b.create("isotope",{layoutMode:"masonry",isJQueryFiltering:!0,sortAscending:!0});m.Item=f,m.LayoutMode=g,m.prototype._create=function(){this.itemGUID=0,this._sorters={},this._getSorters(),b.prototype._create.call(this),this.modes={},this.filteredItems=this.items,this.sortHistory=["original-order"];for(var a in g.modes)this._initLayoutMode(a)},m.prototype.reloadItems=function(){this.itemGUID=0,b.prototype.reloadItems.call(this)},m.prototype._itemize=function(){for(var a=b.prototype._itemize.apply(this,arguments),c=0,d=a.length;d>c;c++){var e=a[c];e.id=this.itemGUID++}return this._updateItemsSortData(a),a},m.prototype._initLayoutMode=function(a){var b=g.modes[a],c=this.options[a]||{};this.options[a]=b.options?e.extend(b.options,c):c,this.modes[a]=new b(this)},m.prototype.layout=function(){return!this._isLayoutInited&&this.options.isInitLayout?void this.arrange():void this._layout()},m.prototype._layout=function(){var a=this._getIsInstant();this._resetLayout(),this._manageStamps(),this.layoutItems(this.filteredItems,a),this._isLayoutInited=!0},m.prototype.arrange=function(a){function b(){d.reveal(c.needReveal),d.hide(c.needHide)}this.option(a),this._getIsInstant();var c=this._filter(this.items);this.filteredItems=c.matches;var d=this;this._bindArrangeComplete(),this._isInstant?this._noTransition(b):b(),this._sort(),this._layout()},m.prototype._init=m.prototype.arrange,m.prototype._getIsInstant=function(){var a=void 0!==this.options.isLayoutInstant?this.options.isLayoutInstant:!this._isLayoutInited;return this._isInstant=a,a},m.prototype._bindArrangeComplete=function(){function a(){b&&c&&d&&e.dispatchEvent("arrangeComplete",null,[e.filteredItems])}var b,c,d,e=this;this.once("layoutComplete",function(){b=!0,a()}),this.once("hideComplete",function(){c=!0,a()}),this.once("revealComplete",function(){d=!0,a()})},m.prototype._filter=function(a){var b=this.options.filter;b=b||"*";for(var c=[],d=[],e=[],f=this._getFilterTest(b),g=0,h=a.length;h>g;g++){var i=a[g];if(!i.isIgnored){var j=f(i);j&&c.push(i),j&&i.isHidden?d.push(i):j||i.isHidden||e.push(i)}}return{matches:c,needReveal:d,needHide:e}},m.prototype._getFilterTest=function(a){return i&&this.options.isJQueryFiltering?function(b){return i(b.element).is(a)}:"function"==typeof a?function(b){return a(b.element)}:function(b){return d(b.element,a)}},m.prototype.updateSortData=function(a){var b;a?(a=e.makeArray(a),b=this.getItems(a)):b=this.items,this._getSorters(),this._updateItemsSortData(b)},m.prototype._getSorters=function(){var a=this.options.getSortData;for(var b in a){var c=a[b];this._sorters[b]=n(c)}},m.prototype._updateItemsSortData=function(a){for(var b=a&&a.length,c=0;b&&b>c;c++){var d=a[c];d.updateSortData()}};var n=function(){function a(a){if("string"!=typeof a)return a;var c=j(a).split(" "),d=c[0],e=d.match(/^\[(.+)\]$/),f=e&&e[1],g=b(f,d),h=m.sortDataParsers[c[1]];return a=h?function(a){return a&&h(g(a))}:function(a){return a&&g(a)}}function b(a,b){var c;return c=a?function(b){return b.getAttribute(a)}:function(a){var c=a.querySelector(b);return c&&l(c)}}return a}();m.sortDataParsers={parseInt:function(a){return parseInt(a,10)},parseFloat:function(a){return parseFloat(a)}},m.prototype._sort=function(){var a=this.options.sortBy;if(a){var b=[].concat.apply(a,this.sortHistory),c=h(b,this.options.sortAscending);this.filteredItems.sort(c),a!=this.sortHistory[0]&&this.sortHistory.unshift(a)}},m.prototype._mode=function(){var a=this.options.layoutMode,b=this.modes[a];if(!b)throw new Error("No layout mode: "+a);return b.options=this.options[a],b},m.prototype._resetLayout=function(){b.prototype._resetLayout.call(this),this._mode()._resetLayout()},m.prototype._getItemLayoutPosition=function(a){return this._mode()._getItemLayoutPosition(a)},m.prototype._manageStamp=function(a){this._mode()._manageStamp(a)},m.prototype._getContainerSize=function(){return this._mode()._getContainerSize()},m.prototype.needsResizeLayout=function(){return this._mode().needsResizeLayout()},m.prototype.appended=function(a){var b=this.addItems(a);if(b.length){var c=this._filterRevealAdded(b);this.filteredItems=this.filteredItems.concat(c)}},m.prototype.prepended=function(a){var b=this._itemize(a);if(b.length){this._resetLayout(),this._manageStamps();var c=this._filterRevealAdded(b);this.layoutItems(this.filteredItems),this.filteredItems=c.concat(this.filteredItems),this.items=b.concat(this.items)}},m.prototype._filterRevealAdded=function(a){var b=this._filter(a);return this.hide(b.needHide),this.reveal(b.matches),this.layoutItems(b.matches,!0),b.matches},m.prototype.insert=function(a){var b=this.addItems(a);if(b.length){var c,d,e=b.length;for(c=0;e>c;c++)d=b[c],this.element.appendChild(d.element);var f=this._filter(b).matches;for(c=0;e>c;c++)b[c].isLayoutInstant=!0;for(this.arrange(),c=0;e>c;c++)delete b[c].isLayoutInstant;this.reveal(f)}};var o=m.prototype.remove;return m.prototype.remove=function(a){a=e.makeArray(a);var b=this.getItems(a);o.call(this,a);var c=b&&b.length;if(c)for(var d=0;c>d;d++){var f=b[d];e.removeFrom(this.filteredItems,f)}},m.prototype.shuffle=function(){for(var a=0,b=this.items.length;b>a;a++){var c=this.items[a];c.sortData.random=Math.random()}this.options.sortBy="random",this._sort(),this._layout()},m.prototype._noTransition=function(a){var b=this.options.transitionDuration;this.options.transitionDuration=0;var c=a.call(this);return this.options.transitionDuration=b,c},m.prototype.getFilteredItemElements=function(){for(var a=[],b=0,c=this.filteredItems.length;c>b;b++)a.push(this.filteredItems[b].element);return a},m});
/*!
 * Masonry PACKAGED v3.3.2
 * Cascading grid layout library
 * http://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */

!function(a){function b(){}function c(a){function c(b){b.prototype.option||(b.prototype.option=function(b){a.isPlainObject(b)&&(this.options=a.extend(!0,this.options,b))})}function e(b,c){a.fn[b]=function(e){if("string"==typeof e){for(var g=d.call(arguments,1),h=0,i=this.length;i>h;h++){var j=this[h],k=a.data(j,b);if(k)if(a.isFunction(k[e])&&"_"!==e.charAt(0)){var l=k[e].apply(k,g);if(void 0!==l)return l}else f("no such method '"+e+"' for "+b+" instance");else f("cannot call methods on "+b+" prior to initialization; attempted to call '"+e+"'")}return this}return this.each(function(){var d=a.data(this,b);d?(d.option(e),d._init()):(d=new c(this,e),a.data(this,b,d))})}}if(a){var f="undefined"==typeof console?b:function(a){console.error(a)};return a.bridget=function(a,b){c(b),e(a,b)},a.bridget}}var d=Array.prototype.slice;"function"==typeof define&&define.amd?define("jquery-bridget/jquery.bridget",["jquery"],c):c("object"==typeof exports?require("jquery"):a.jQuery)}(window),function(a){function b(b){var c=a.event;return c.target=c.target||c.srcElement||b,c}var c=document.documentElement,d=function(){};c.addEventListener?d=function(a,b,c){a.addEventListener(b,c,!1)}:c.attachEvent&&(d=function(a,c,d){a[c+d]=d.handleEvent?function(){var c=b(a);d.handleEvent.call(d,c)}:function(){var c=b(a);d.call(a,c)},a.attachEvent("on"+c,a[c+d])});var e=function(){};c.removeEventListener?e=function(a,b,c){a.removeEventListener(b,c,!1)}:c.detachEvent&&(e=function(a,b,c){a.detachEvent("on"+b,a[b+c]);try{delete a[b+c]}catch(d){a[b+c]=void 0}});var f={bind:d,unbind:e};"function"==typeof define&&define.amd?define("eventie/eventie",f):"object"==typeof exports?module.exports=f:a.eventie=f}(window),function(){function a(){}function b(a,b){for(var c=a.length;c--;)if(a[c].listener===b)return c;return-1}function c(a){return function(){return this[a].apply(this,arguments)}}var d=a.prototype,e=this,f=e.EventEmitter;d.getListeners=function(a){var b,c,d=this._getEvents();if(a instanceof RegExp){b={};for(c in d)d.hasOwnProperty(c)&&a.test(c)&&(b[c]=d[c])}else b=d[a]||(d[a]=[]);return b},d.flattenListeners=function(a){var b,c=[];for(b=0;b<a.length;b+=1)c.push(a[b].listener);return c},d.getListenersAsObject=function(a){var b,c=this.getListeners(a);return c instanceof Array&&(b={},b[a]=c),b||c},d.addListener=function(a,c){var d,e=this.getListenersAsObject(a),f="object"==typeof c;for(d in e)e.hasOwnProperty(d)&&-1===b(e[d],c)&&e[d].push(f?c:{listener:c,once:!1});return this},d.on=c("addListener"),d.addOnceListener=function(a,b){return this.addListener(a,{listener:b,once:!0})},d.once=c("addOnceListener"),d.defineEvent=function(a){return this.getListeners(a),this},d.defineEvents=function(a){for(var b=0;b<a.length;b+=1)this.defineEvent(a[b]);return this},d.removeListener=function(a,c){var d,e,f=this.getListenersAsObject(a);for(e in f)f.hasOwnProperty(e)&&(d=b(f[e],c),-1!==d&&f[e].splice(d,1));return this},d.off=c("removeListener"),d.addListeners=function(a,b){return this.manipulateListeners(!1,a,b)},d.removeListeners=function(a,b){return this.manipulateListeners(!0,a,b)},d.manipulateListeners=function(a,b,c){var d,e,f=a?this.removeListener:this.addListener,g=a?this.removeListeners:this.addListeners;if("object"!=typeof b||b instanceof RegExp)for(d=c.length;d--;)f.call(this,b,c[d]);else for(d in b)b.hasOwnProperty(d)&&(e=b[d])&&("function"==typeof e?f.call(this,d,e):g.call(this,d,e));return this},d.removeEvent=function(a){var b,c=typeof a,d=this._getEvents();if("string"===c)delete d[a];else if(a instanceof RegExp)for(b in d)d.hasOwnProperty(b)&&a.test(b)&&delete d[b];else delete this._events;return this},d.removeAllListeners=c("removeEvent"),d.emitEvent=function(a,b){var c,d,e,f,g=this.getListenersAsObject(a);for(e in g)if(g.hasOwnProperty(e))for(d=g[e].length;d--;)c=g[e][d],c.once===!0&&this.removeListener(a,c.listener),f=c.listener.apply(this,b||[]),f===this._getOnceReturnValue()&&this.removeListener(a,c.listener);return this},d.trigger=c("emitEvent"),d.emit=function(a){var b=Array.prototype.slice.call(arguments,1);return this.emitEvent(a,b)},d.setOnceReturnValue=function(a){return this._onceReturnValue=a,this},d._getOnceReturnValue=function(){return this.hasOwnProperty("_onceReturnValue")?this._onceReturnValue:!0},d._getEvents=function(){return this._events||(this._events={})},a.noConflict=function(){return e.EventEmitter=f,a},"function"==typeof define&&define.amd?define("eventEmitter/EventEmitter",[],function(){return a}):"object"==typeof module&&module.exports?module.exports=a:e.EventEmitter=a}.call(this),function(a){function b(a){if(a){if("string"==typeof d[a])return a;a=a.charAt(0).toUpperCase()+a.slice(1);for(var b,e=0,f=c.length;f>e;e++)if(b=c[e]+a,"string"==typeof d[b])return b}}var c="Webkit Moz ms Ms O".split(" "),d=document.documentElement.style;"function"==typeof define&&define.amd?define("get-style-property/get-style-property",[],function(){return b}):"object"==typeof exports?module.exports=b:a.getStyleProperty=b}(window),function(a){function b(a){var b=parseFloat(a),c=-1===a.indexOf("%")&&!isNaN(b);return c&&b}function c(){}function d(){for(var a={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},b=0,c=g.length;c>b;b++){var d=g[b];a[d]=0}return a}function e(c){function e(){if(!m){m=!0;var d=a.getComputedStyle;if(j=function(){var a=d?function(a){return d(a,null)}:function(a){return a.currentStyle};return function(b){var c=a(b);return c||f("Style returned "+c+". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"),c}}(),k=c("boxSizing")){var e=document.createElement("div");e.style.width="200px",e.style.padding="1px 2px 3px 4px",e.style.borderStyle="solid",e.style.borderWidth="1px 2px 3px 4px",e.style[k]="border-box";var g=document.body||document.documentElement;g.appendChild(e);var h=j(e);l=200===b(h.width),g.removeChild(e)}}}function h(a){if(e(),"string"==typeof a&&(a=document.querySelector(a)),a&&"object"==typeof a&&a.nodeType){var c=j(a);if("none"===c.display)return d();var f={};f.width=a.offsetWidth,f.height=a.offsetHeight;for(var h=f.isBorderBox=!(!k||!c[k]||"border-box"!==c[k]),m=0,n=g.length;n>m;m++){var o=g[m],p=c[o];p=i(a,p);var q=parseFloat(p);f[o]=isNaN(q)?0:q}var r=f.paddingLeft+f.paddingRight,s=f.paddingTop+f.paddingBottom,t=f.marginLeft+f.marginRight,u=f.marginTop+f.marginBottom,v=f.borderLeftWidth+f.borderRightWidth,w=f.borderTopWidth+f.borderBottomWidth,x=h&&l,y=b(c.width);y!==!1&&(f.width=y+(x?0:r+v));var z=b(c.height);return z!==!1&&(f.height=z+(x?0:s+w)),f.innerWidth=f.width-(r+v),f.innerHeight=f.height-(s+w),f.outerWidth=f.width+t,f.outerHeight=f.height+u,f}}function i(b,c){if(a.getComputedStyle||-1===c.indexOf("%"))return c;var d=b.style,e=d.left,f=b.runtimeStyle,g=f&&f.left;return g&&(f.left=b.currentStyle.left),d.left=c,c=d.pixelLeft,d.left=e,g&&(f.left=g),c}var j,k,l,m=!1;return h}var f="undefined"==typeof console?c:function(a){console.error(a)},g=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"];"function"==typeof define&&define.amd?define("get-size/get-size",["get-style-property/get-style-property"],e):"object"==typeof exports?module.exports=e(require("desandro-get-style-property")):a.getSize=e(a.getStyleProperty)}(window),function(a){function b(a){"function"==typeof a&&(b.isReady?a():g.push(a))}function c(a){var c="readystatechange"===a.type&&"complete"!==f.readyState;b.isReady||c||d()}function d(){b.isReady=!0;for(var a=0,c=g.length;c>a;a++){var d=g[a];d()}}function e(e){return"complete"===f.readyState?d():(e.bind(f,"DOMContentLoaded",c),e.bind(f,"readystatechange",c),e.bind(a,"load",c)),b}var f=a.document,g=[];b.isReady=!1,"function"==typeof define&&define.amd?define("doc-ready/doc-ready",["eventie/eventie"],e):"object"==typeof exports?module.exports=e(require("eventie")):a.docReady=e(a.eventie)}(window),function(a){function b(a,b){return a[g](b)}function c(a){if(!a.parentNode){var b=document.createDocumentFragment();b.appendChild(a)}}function d(a,b){c(a);for(var d=a.parentNode.querySelectorAll(b),e=0,f=d.length;f>e;e++)if(d[e]===a)return!0;return!1}function e(a,d){return c(a),b(a,d)}var f,g=function(){if(a.matches)return"matches";if(a.matchesSelector)return"matchesSelector";for(var b=["webkit","moz","ms","o"],c=0,d=b.length;d>c;c++){var e=b[c],f=e+"MatchesSelector";if(a[f])return f}}();if(g){var h=document.createElement("div"),i=b(h,"div");f=i?b:e}else f=d;"function"==typeof define&&define.amd?define("matches-selector/matches-selector",[],function(){return f}):"object"==typeof exports?module.exports=f:window.matchesSelector=f}(Element.prototype),function(a,b){"function"==typeof define&&define.amd?define("fizzy-ui-utils/utils",["doc-ready/doc-ready","matches-selector/matches-selector"],function(c,d){return b(a,c,d)}):"object"==typeof exports?module.exports=b(a,require("doc-ready"),require("desandro-matches-selector")):a.fizzyUIUtils=b(a,a.docReady,a.matchesSelector)}(window,function(a,b,c){var d={};d.extend=function(a,b){for(var c in b)a[c]=b[c];return a},d.modulo=function(a,b){return(a%b+b)%b};var e=Object.prototype.toString;d.isArray=function(a){return"[object Array]"==e.call(a)},d.makeArray=function(a){var b=[];if(d.isArray(a))b=a;else if(a&&"number"==typeof a.length)for(var c=0,e=a.length;e>c;c++)b.push(a[c]);else b.push(a);return b},d.indexOf=Array.prototype.indexOf?function(a,b){return a.indexOf(b)}:function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},d.removeFrom=function(a,b){var c=d.indexOf(a,b);-1!=c&&a.splice(c,1)},d.isElement="function"==typeof HTMLElement||"object"==typeof HTMLElement?function(a){return a instanceof HTMLElement}:function(a){return a&&"object"==typeof a&&1==a.nodeType&&"string"==typeof a.nodeName},d.setText=function(){function a(a,c){b=b||(void 0!==document.documentElement.textContent?"textContent":"innerText"),a[b]=c}var b;return a}(),d.getParent=function(a,b){for(;a!=document.body;)if(a=a.parentNode,c(a,b))return a},d.getQueryElement=function(a){return"string"==typeof a?document.querySelector(a):a},d.handleEvent=function(a){var b="on"+a.type;this[b]&&this[b](a)},d.filterFindElements=function(a,b){a=d.makeArray(a);for(var e=[],f=0,g=a.length;g>f;f++){var h=a[f];if(d.isElement(h))if(b){c(h,b)&&e.push(h);for(var i=h.querySelectorAll(b),j=0,k=i.length;k>j;j++)e.push(i[j])}else e.push(h)}return e},d.debounceMethod=function(a,b,c){var d=a.prototype[b],e=b+"Timeout";a.prototype[b]=function(){var a=this[e];a&&clearTimeout(a);var b=arguments,f=this;this[e]=setTimeout(function(){d.apply(f,b),delete f[e]},c||100)}},d.toDashed=function(a){return a.replace(/(.)([A-Z])/g,function(a,b,c){return b+"-"+c}).toLowerCase()};var f=a.console;return d.htmlInit=function(c,e){b(function(){for(var b=d.toDashed(e),g=document.querySelectorAll(".js-"+b),h="data-"+b+"-options",i=0,j=g.length;j>i;i++){var k,l=g[i],m=l.getAttribute(h);try{k=m&&JSON.parse(m)}catch(n){f&&f.error("Error parsing "+h+" on "+l.nodeName.toLowerCase()+(l.id?"#"+l.id:"")+": "+n);continue}var o=new c(l,k),p=a.jQuery;p&&p.data(l,e,o)}})},d}),function(a,b){"function"==typeof define&&define.amd?define("outlayer/item",["eventEmitter/EventEmitter","get-size/get-size","get-style-property/get-style-property","fizzy-ui-utils/utils"],function(c,d,e,f){return b(a,c,d,e,f)}):"object"==typeof exports?module.exports=b(a,require("wolfy87-eventemitter"),require("get-size"),require("desandro-get-style-property"),require("fizzy-ui-utils")):(a.Outlayer={},a.Outlayer.Item=b(a,a.EventEmitter,a.getSize,a.getStyleProperty,a.fizzyUIUtils))}(window,function(a,b,c,d,e){function f(a){for(var b in a)return!1;return b=null,!0}function g(a,b){a&&(this.element=a,this.layout=b,this.position={x:0,y:0},this._create())}function h(a){return a.replace(/([A-Z])/g,function(a){return"-"+a.toLowerCase()})}var i=a.getComputedStyle,j=i?function(a){return i(a,null)}:function(a){return a.currentStyle},k=d("transition"),l=d("transform"),m=k&&l,n=!!d("perspective"),o={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"otransitionend",transition:"transitionend"}[k],p=["transform","transition","transitionDuration","transitionProperty"],q=function(){for(var a={},b=0,c=p.length;c>b;b++){var e=p[b],f=d(e);f&&f!==e&&(a[e]=f)}return a}();e.extend(g.prototype,b.prototype),g.prototype._create=function(){this._transn={ingProperties:{},clean:{},onEnd:{}},this.css({position:"absolute"})},g.prototype.handleEvent=function(a){var b="on"+a.type;this[b]&&this[b](a)},g.prototype.getSize=function(){this.size=c(this.element)},g.prototype.css=function(a){var b=this.element.style;for(var c in a){var d=q[c]||c;b[d]=a[c]}},g.prototype.getPosition=function(){var a=j(this.element),b=this.layout.options,c=b.isOriginLeft,d=b.isOriginTop,e=a[c?"left":"right"],f=a[d?"top":"bottom"],g=this.layout.size,h=-1!=e.indexOf("%")?parseFloat(e)/100*g.width:parseInt(e,10),i=-1!=f.indexOf("%")?parseFloat(f)/100*g.height:parseInt(f,10);h=isNaN(h)?0:h,i=isNaN(i)?0:i,h-=c?g.paddingLeft:g.paddingRight,i-=d?g.paddingTop:g.paddingBottom,this.position.x=h,this.position.y=i},g.prototype.layoutPosition=function(){var a=this.layout.size,b=this.layout.options,c={},d=b.isOriginLeft?"paddingLeft":"paddingRight",e=b.isOriginLeft?"left":"right",f=b.isOriginLeft?"right":"left",g=this.position.x+a[d];c[e]=this.getXValue(g),c[f]="";var h=b.isOriginTop?"paddingTop":"paddingBottom",i=b.isOriginTop?"top":"bottom",j=b.isOriginTop?"bottom":"top",k=this.position.y+a[h];c[i]=this.getYValue(k),c[j]="",this.css(c),this.emitEvent("layout",[this])},g.prototype.getXValue=function(a){var b=this.layout.options;return b.percentPosition&&!b.isHorizontal?a/this.layout.size.width*100+"%":a+"px"},g.prototype.getYValue=function(a){var b=this.layout.options;return b.percentPosition&&b.isHorizontal?a/this.layout.size.height*100+"%":a+"px"},g.prototype._transitionTo=function(a,b){this.getPosition();var c=this.position.x,d=this.position.y,e=parseInt(a,10),f=parseInt(b,10),g=e===this.position.x&&f===this.position.y;if(this.setPosition(a,b),g&&!this.isTransitioning)return void this.layoutPosition();var h=a-c,i=b-d,j={};j.transform=this.getTranslate(h,i),this.transition({to:j,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})},g.prototype.getTranslate=function(a,b){var c=this.layout.options;return a=c.isOriginLeft?a:-a,b=c.isOriginTop?b:-b,n?"translate3d("+a+"px, "+b+"px, 0)":"translate("+a+"px, "+b+"px)"},g.prototype.goTo=function(a,b){this.setPosition(a,b),this.layoutPosition()},g.prototype.moveTo=m?g.prototype._transitionTo:g.prototype.goTo,g.prototype.setPosition=function(a,b){this.position.x=parseInt(a,10),this.position.y=parseInt(b,10)},g.prototype._nonTransition=function(a){this.css(a.to),a.isCleaning&&this._removeStyles(a.to);for(var b in a.onTransitionEnd)a.onTransitionEnd[b].call(this)},g.prototype._transition=function(a){if(!parseFloat(this.layout.options.transitionDuration))return void this._nonTransition(a);var b=this._transn;for(var c in a.onTransitionEnd)b.onEnd[c]=a.onTransitionEnd[c];for(c in a.to)b.ingProperties[c]=!0,a.isCleaning&&(b.clean[c]=!0);if(a.from){this.css(a.from);var d=this.element.offsetHeight;d=null}this.enableTransition(a.to),this.css(a.to),this.isTransitioning=!0};var r="opacity,"+h(q.transform||"transform");g.prototype.enableTransition=function(){this.isTransitioning||(this.css({transitionProperty:r,transitionDuration:this.layout.options.transitionDuration}),this.element.addEventListener(o,this,!1))},g.prototype.transition=g.prototype[k?"_transition":"_nonTransition"],g.prototype.onwebkitTransitionEnd=function(a){this.ontransitionend(a)},g.prototype.onotransitionend=function(a){this.ontransitionend(a)};var s={"-webkit-transform":"transform","-moz-transform":"transform","-o-transform":"transform"};g.prototype.ontransitionend=function(a){if(a.target===this.element){var b=this._transn,c=s[a.propertyName]||a.propertyName;if(delete b.ingProperties[c],f(b.ingProperties)&&this.disableTransition(),c in b.clean&&(this.element.style[a.propertyName]="",delete b.clean[c]),c in b.onEnd){var d=b.onEnd[c];d.call(this),delete b.onEnd[c]}this.emitEvent("transitionEnd",[this])}},g.prototype.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(o,this,!1),this.isTransitioning=!1},g.prototype._removeStyles=function(a){var b={};for(var c in a)b[c]="";this.css(b)};var t={transitionProperty:"",transitionDuration:""};return g.prototype.removeTransitionStyles=function(){this.css(t)},g.prototype.removeElem=function(){this.element.parentNode.removeChild(this.element),this.css({display:""}),this.emitEvent("remove",[this])},g.prototype.remove=function(){if(!k||!parseFloat(this.layout.options.transitionDuration))return void this.removeElem();var a=this;this.once("transitionEnd",function(){a.removeElem()}),this.hide()},g.prototype.reveal=function(){delete this.isHidden,this.css({display:""});var a=this.layout.options,b={},c=this.getHideRevealTransitionEndProperty("visibleStyle");b[c]=this.onRevealTransitionEnd,this.transition({from:a.hiddenStyle,to:a.visibleStyle,isCleaning:!0,onTransitionEnd:b})},g.prototype.onRevealTransitionEnd=function(){this.isHidden||this.emitEvent("reveal")},g.prototype.getHideRevealTransitionEndProperty=function(a){var b=this.layout.options[a];if(b.opacity)return"opacity";for(var c in b)return c},g.prototype.hide=function(){this.isHidden=!0,this.css({display:""});var a=this.layout.options,b={},c=this.getHideRevealTransitionEndProperty("hiddenStyle");b[c]=this.onHideTransitionEnd,this.transition({from:a.visibleStyle,to:a.hiddenStyle,isCleaning:!0,onTransitionEnd:b})},g.prototype.onHideTransitionEnd=function(){this.isHidden&&(this.css({display:"none"}),this.emitEvent("hide"))},g.prototype.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})},g}),function(a,b){"function"==typeof define&&define.amd?define("outlayer/outlayer",["eventie/eventie","eventEmitter/EventEmitter","get-size/get-size","fizzy-ui-utils/utils","./item"],function(c,d,e,f,g){return b(a,c,d,e,f,g)}):"object"==typeof exports?module.exports=b(a,require("eventie"),require("wolfy87-eventemitter"),require("get-size"),require("fizzy-ui-utils"),require("./item")):a.Outlayer=b(a,a.eventie,a.EventEmitter,a.getSize,a.fizzyUIUtils,a.Outlayer.Item)}(window,function(a,b,c,d,e,f){function g(a,b){var c=e.getQueryElement(a);if(!c)return void(h&&h.error("Bad element for "+this.constructor.namespace+": "+(c||a)));this.element=c,i&&(this.$element=i(this.element)),this.options=e.extend({},this.constructor.defaults),this.option(b);var d=++k;this.element.outlayerGUID=d,l[d]=this,this._create(),this.options.isInitLayout&&this.layout()}var h=a.console,i=a.jQuery,j=function(){},k=0,l={};return g.namespace="outlayer",g.Item=f,g.defaults={containerStyle:{position:"relative"},isInitLayout:!0,isOriginLeft:!0,isOriginTop:!0,isResizeBound:!0,isResizingContainer:!0,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}},e.extend(g.prototype,c.prototype),g.prototype.option=function(a){e.extend(this.options,a)},g.prototype._create=function(){this.reloadItems(),this.stamps=[],this.stamp(this.options.stamp),e.extend(this.element.style,this.options.containerStyle),this.options.isResizeBound&&this.bindResize()},g.prototype.reloadItems=function(){this.items=this._itemize(this.element.children)},g.prototype._itemize=function(a){for(var b=this._filterFindItemElements(a),c=this.constructor.Item,d=[],e=0,f=b.length;f>e;e++){var g=b[e],h=new c(g,this);d.push(h)}return d},g.prototype._filterFindItemElements=function(a){return e.filterFindElements(a,this.options.itemSelector)},g.prototype.getItemElements=function(){for(var a=[],b=0,c=this.items.length;c>b;b++)a.push(this.items[b].element);return a},g.prototype.layout=function(){this._resetLayout(),this._manageStamps();var a=void 0!==this.options.isLayoutInstant?this.options.isLayoutInstant:!this._isLayoutInited;this.layoutItems(this.items,a),this._isLayoutInited=!0},g.prototype._init=g.prototype.layout,g.prototype._resetLayout=function(){this.getSize()},g.prototype.getSize=function(){this.size=d(this.element)},g.prototype._getMeasurement=function(a,b){var c,f=this.options[a];f?("string"==typeof f?c=this.element.querySelector(f):e.isElement(f)&&(c=f),this[a]=c?d(c)[b]:f):this[a]=0},g.prototype.layoutItems=function(a,b){a=this._getItemsForLayout(a),this._layoutItems(a,b),this._postLayout()},g.prototype._getItemsForLayout=function(a){for(var b=[],c=0,d=a.length;d>c;c++){var e=a[c];e.isIgnored||b.push(e)}return b},g.prototype._layoutItems=function(a,b){if(this._emitCompleteOnItems("layout",a),a&&a.length){for(var c=[],d=0,e=a.length;e>d;d++){var f=a[d],g=this._getItemLayoutPosition(f);g.item=f,g.isInstant=b||f.isLayoutInstant,c.push(g)}this._processLayoutQueue(c)}},g.prototype._getItemLayoutPosition=function(){return{x:0,y:0}},g.prototype._processLayoutQueue=function(a){for(var b=0,c=a.length;c>b;b++){var d=a[b];this._positionItem(d.item,d.x,d.y,d.isInstant)}},g.prototype._positionItem=function(a,b,c,d){d?a.goTo(b,c):a.moveTo(b,c)},g.prototype._postLayout=function(){this.resizeContainer()},g.prototype.resizeContainer=function(){if(this.options.isResizingContainer){var a=this._getContainerSize();a&&(this._setContainerMeasure(a.width,!0),this._setContainerMeasure(a.height,!1))}},g.prototype._getContainerSize=j,g.prototype._setContainerMeasure=function(a,b){if(void 0!==a){var c=this.size;c.isBorderBox&&(a+=b?c.paddingLeft+c.paddingRight+c.borderLeftWidth+c.borderRightWidth:c.paddingBottom+c.paddingTop+c.borderTopWidth+c.borderBottomWidth),a=Math.max(a,0),this.element.style[b?"width":"height"]=a+"px"}},g.prototype._emitCompleteOnItems=function(a,b){function c(){e.dispatchEvent(a+"Complete",null,[b])}function d(){g++,g===f&&c()}var e=this,f=b.length;if(!b||!f)return void c();for(var g=0,h=0,i=b.length;i>h;h++){var j=b[h];j.once(a,d)}},g.prototype.dispatchEvent=function(a,b,c){var d=b?[b].concat(c):c;if(this.emitEvent(a,d),i)if(this.$element=this.$element||i(this.element),b){var e=i.Event(b);e.type=a,this.$element.trigger(e,c)}else this.$element.trigger(a,c)},g.prototype.ignore=function(a){var b=this.getItem(a);b&&(b.isIgnored=!0)},g.prototype.unignore=function(a){var b=this.getItem(a);b&&delete b.isIgnored},g.prototype.stamp=function(a){if(a=this._find(a)){this.stamps=this.stamps.concat(a);for(var b=0,c=a.length;c>b;b++){var d=a[b];this.ignore(d)}}},g.prototype.unstamp=function(a){if(a=this._find(a))for(var b=0,c=a.length;c>b;b++){var d=a[b];e.removeFrom(this.stamps,d),this.unignore(d)}},g.prototype._find=function(a){return a?("string"==typeof a&&(a=this.element.querySelectorAll(a)),a=e.makeArray(a)):void 0},g.prototype._manageStamps=function(){if(this.stamps&&this.stamps.length){this._getBoundingRect();for(var a=0,b=this.stamps.length;b>a;a++){var c=this.stamps[a];this._manageStamp(c)}}},g.prototype._getBoundingRect=function(){var a=this.element.getBoundingClientRect(),b=this.size;this._boundingRect={left:a.left+b.paddingLeft+b.borderLeftWidth,top:a.top+b.paddingTop+b.borderTopWidth,right:a.right-(b.paddingRight+b.borderRightWidth),bottom:a.bottom-(b.paddingBottom+b.borderBottomWidth)}},g.prototype._manageStamp=j,g.prototype._getElementOffset=function(a){var b=a.getBoundingClientRect(),c=this._boundingRect,e=d(a),f={left:b.left-c.left-e.marginLeft,top:b.top-c.top-e.marginTop,right:c.right-b.right-e.marginRight,bottom:c.bottom-b.bottom-e.marginBottom};return f},g.prototype.handleEvent=function(a){var b="on"+a.type;this[b]&&this[b](a)},g.prototype.bindResize=function(){this.isResizeBound||(b.bind(a,"resize",this),this.isResizeBound=!0)},g.prototype.unbindResize=function(){this.isResizeBound&&b.unbind(a,"resize",this),this.isResizeBound=!1},g.prototype.onresize=function(){function a(){b.resize(),delete b.resizeTimeout}this.resizeTimeout&&clearTimeout(this.resizeTimeout);var b=this;this.resizeTimeout=setTimeout(a,100)},g.prototype.resize=function(){this.isResizeBound&&this.needsResizeLayout()&&this.layout()},g.prototype.needsResizeLayout=function(){var a=d(this.element),b=this.size&&a;return b&&a.innerWidth!==this.size.innerWidth},g.prototype.addItems=function(a){var b=this._itemize(a);return b.length&&(this.items=this.items.concat(b)),b},g.prototype.appended=function(a){var b=this.addItems(a);b.length&&(this.layoutItems(b,!0),this.reveal(b))},g.prototype.prepended=function(a){var b=this._itemize(a);if(b.length){var c=this.items.slice(0);this.items=b.concat(c),this._resetLayout(),this._manageStamps(),this.layoutItems(b,!0),this.reveal(b),this.layoutItems(c)}},g.prototype.reveal=function(a){this._emitCompleteOnItems("reveal",a);for(var b=a&&a.length,c=0;b&&b>c;c++){var d=a[c];d.reveal()}},g.prototype.hide=function(a){this._emitCompleteOnItems("hide",a);for(var b=a&&a.length,c=0;b&&b>c;c++){var d=a[c];d.hide()}},g.prototype.revealItemElements=function(a){var b=this.getItems(a);this.reveal(b)},g.prototype.hideItemElements=function(a){var b=this.getItems(a);this.hide(b)},g.prototype.getItem=function(a){for(var b=0,c=this.items.length;c>b;b++){var d=this.items[b];if(d.element===a)return d}},g.prototype.getItems=function(a){a=e.makeArray(a);for(var b=[],c=0,d=a.length;d>c;c++){var f=a[c],g=this.getItem(f);g&&b.push(g)}return b},g.prototype.remove=function(a){var b=this.getItems(a);if(this._emitCompleteOnItems("remove",b),b&&b.length)for(var c=0,d=b.length;d>c;c++){var f=b[c];f.remove(),e.removeFrom(this.items,f)}},g.prototype.destroy=function(){var a=this.element.style;a.height="",a.position="",a.width="";for(var b=0,c=this.items.length;c>b;b++){var d=this.items[b];d.destroy()}this.unbindResize();var e=this.element.outlayerGUID;delete l[e],delete this.element.outlayerGUID,i&&i.removeData(this.element,this.constructor.namespace)},g.data=function(a){a=e.getQueryElement(a);var b=a&&a.outlayerGUID;return b&&l[b]},g.create=function(a,b){function c(){g.apply(this,arguments)}return Object.create?c.prototype=Object.create(g.prototype):e.extend(c.prototype,g.prototype),c.prototype.constructor=c,c.defaults=e.extend({},g.defaults),e.extend(c.defaults,b),c.prototype.settings={},c.namespace=a,c.data=g.data,c.Item=function(){f.apply(this,arguments)},c.Item.prototype=new f,e.htmlInit(c,a),i&&i.bridget&&i.bridget(a,c),c},g.Item=f,g}),function(a,b){"function"==typeof define&&define.amd?define(["outlayer/outlayer","get-size/get-size","fizzy-ui-utils/utils"],b):"object"==typeof exports?module.exports=b(require("outlayer"),require("get-size"),require("fizzy-ui-utils")):a.Masonry=b(a.Outlayer,a.getSize,a.fizzyUIUtils)}(window,function(a,b,c){var d=a.create("masonry");return d.prototype._resetLayout=function(){this.getSize(),this._getMeasurement("columnWidth","outerWidth"),this._getMeasurement("gutter","outerWidth"),this.measureColumns();var a=this.cols;for(this.colYs=[];a--;)this.colYs.push(0);this.maxY=0},d.prototype.measureColumns=function(){if(this.getContainerWidth(),!this.columnWidth){var a=this.items[0],c=a&&a.element;this.columnWidth=c&&b(c).outerWidth||this.containerWidth}var d=this.columnWidth+=this.gutter,e=this.containerWidth+this.gutter,f=e/d,g=d-e%d,h=g&&1>g?"round":"floor";f=Math[h](f),this.cols=Math.max(f,1)},d.prototype.getContainerWidth=function(){var a=this.options.isFitWidth?this.element.parentNode:this.element,c=b(a);this.containerWidth=c&&c.innerWidth},d.prototype._getItemLayoutPosition=function(a){a.getSize();var b=a.size.outerWidth%this.columnWidth,d=b&&1>b?"round":"ceil",e=Math[d](a.size.outerWidth/this.columnWidth);e=Math.min(e,this.cols);for(var f=this._getColGroup(e),g=Math.min.apply(Math,f),h=c.indexOf(f,g),i={x:this.columnWidth*h,y:g},j=g+a.size.outerHeight,k=this.cols+1-f.length,l=0;k>l;l++)this.colYs[h+l]=j;return i},d.prototype._getColGroup=function(a){if(2>a)return this.colYs;for(var b=[],c=this.cols+1-a,d=0;c>d;d++){var e=this.colYs.slice(d,d+a);b[d]=Math.max.apply(Math,e)}return b},d.prototype._manageStamp=function(a){var c=b(a),d=this._getElementOffset(a),e=this.options.isOriginLeft?d.left:d.right,f=e+c.outerWidth,g=Math.floor(e/this.columnWidth);g=Math.max(0,g);var h=Math.floor(f/this.columnWidth);h-=f%this.columnWidth?0:1,h=Math.min(this.cols-1,h);for(var i=(this.options.isOriginTop?d.top:d.bottom)+c.outerHeight,j=g;h>=j;j++)this.colYs[j]=Math.max(i,this.colYs[j])},d.prototype._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);var a={height:this.maxY};return this.options.isFitWidth&&(a.width=this._getContainerFitWidth()),a},d.prototype._getContainerFitWidth=function(){for(var a=0,b=this.cols;--b&&0===this.colYs[b];)a++;return(this.cols-a)*this.columnWidth-this.gutter},d.prototype.needsResizeLayout=function(){var a=this.containerWidth;return this.getContainerWidth(),a!==this.containerWidth},d});
(function() {
  'use strict';

  var $grid = $('.masonry-layout');
  var $filtersSelects = $('.filter').find('select');
  var $clearAll = $('.clear-all');
  var $filteredResultsCount = $('.results-found-count');
  var $noResults = $('.no-results');
  var qsRegex;
  var selAry = [];
  var selresult;
  var filterValue;

  function debounce(fn, threshold) {
    var timeout;
    return function debounced() {
      if (timeout) {
        clearTimeout(timeout);
      }

      function delayed() {
        fn();
        timeout = null;
      }
      setTimeout(delayed, threshold || 100);
    };
  }

  $clearAll.on('click', function(e) {
    e.preventDefault();
    
    $noResults.hide();

    $filtersSelects.each(function() {
      $(this).find('option:eq(0)').prop('selected', true);
    });

    if ( $('.keyword-search').length > 0 ) {
      $('.keyword-search').val('');
    }

    location.hash = '';

    selAry = [];
    qsRegex = '';

    $setFilters.isotope();

    // change url
    mUrlUpdate();
    //

    $filtersSelects.trigger('change');

  });

  var $setFilters = $grid.isotope({
    getSortData: {
      title: '.story-title',
      published: function(itemElem) {
        var date = $(itemElem).attr('data-published');
        return parseInt(date, 10);
      }
    },
    filter: function() {
      var boxAttr = $(this).attr('data-tags').split(' ');
      var selectResults = function() {

        if (selAry.toString().length === 0) {
          selresult = true;
          return selresult;
        }

        var mTrue = [];
        for (var i1 = 0, l1 = selAry.length; i1 < l1; i1++) {
          for (var i0 = 0, l0 = boxAttr.length; i0 < l0; i0++) {

            if (boxAttr[i0] === selAry[i1]) {
              mTrue.push(true);
            }
          }
          if (mTrue.length === 0) {
            break;
          }
        }
        selresult = false;
        if (mTrue.length === selAry.length) {
          selresult = true;
          return selresult;
        } else {
          return selresult;
        }
      };

      var searchResults = qsRegex ? $(this).text().match(qsRegex) : true;

      selectResults();

      return selresult && searchResults;
    }
  });


  var initIsotope = function() {
    $grid.imagesLoaded(function() {
      $setFilters.isotope({
        getSortData: {
          title: '.story-title',
          published: function(itemElem) {
            var date = $(itemElem).attr('data-published');
            return parseInt(date, 10);
          }
        }
      });
    });

  };


  var initFilters = function() {
    // init url
    mInitUrl();
    //
    
    // store filter for each group
    var filters = {};

    var $quicksearch = $('.keyword-search').keyup(debounce(function() {
      qsRegex = new RegExp($quicksearch.val(), 'gi');
      $setFilters.isotope();
      // change url
      mUrlUpdate();
      //
    }, 400));

    $filtersSelects.on('change', function() {

      $noResults.hide();

      // get group key
      var filterGroup = $(this).attr('class');

      // set filter for group
      filters[filterGroup] = $(this).val();

      // combine filters
      filterValue = concatValues(filters).replace(/^[^\s]*\s/g, '');
      // set filter for Isotope

      selAry = filterValue.split(' ');

      $setFilters.isotope();

      // change url
      mUrlUpdate();
      // 

      if (!$grid.data('isotope').filteredItems.length) {
        $noResults.show();
      }

    });

    // trigger change to init for first load
    $filtersSelects.trigger('change');
    //

    // flatten object by concatting values
    function concatValues(obj) {
      var value = '';
      for (var prop in obj) {
        if (obj[prop] !== '') {
          value += ' ' + obj[prop];
        }
      }
      return value;
    }

    $grid.on('arrangeComplete',
      function(event, filteredItems) {
        $('.count').html(filteredItems.length+' ');
      }
    );

  };

  var initSorting = function() {
    $('.sort-controls').on('click', 'button', function() {

      $('.sort-controls').find('.active').removeClass('active');
      $(this).addClass('active');

      var sortByValue = $(this).attr('data-sort-by');
      var sortDirection = !$(this).hasClass('desc');


      $setFilters.isotope({
        sortBy: sortByValue,
        sortAscending: sortDirection
      });
    });
  };




  // url functionality
  function mGetFilterVals() {
    var mYearVal = 
          $('select.year').length ?
          $('select.year').val() || 'all' :
          false,
        mCompanyVal =
          $('select.company').length ?
          $('select.company').val() || 'all' :
          false,
        mTypeVal = 
          $('select.type').length ?
          $('select.type').val() || 'all' :
          false,
        mIndustryVal = 
          $('select.industry').length ?
          $('select.industry').val() || 'all' :
          false,
        mTopicVal = 
          $('select.topic').length ?
          $('select.topic').val() || 'all' :
          false,
        mTechnologyVal = 
          $('select.technology').length ?
          $('select.technology').val() || 'all' :
          false,
        mKeywordsVal = 
          $('input.keyword-search').length ?
          $('input.keyword-search').val() || '' :
          false,
        mValState = {};
    
    if (mYearVal !== false) {
      mValState.year = mYearVal;
    }

    if (mCompanyVal !== false) {
      mValState.company = mCompanyVal;
    }
    
    if (mTypeVal !== false) {
      mValState.type = mTypeVal;
    }

    if (mIndustryVal !== false) {
      mValState.industry = mIndustryVal;
    }

    if (mTopicVal !== false) {
      mValState.topic = mTopicVal;
    }

    if (mTechnologyVal !== false) {
      mValState.technology = mTechnologyVal;
    }

    if (mKeywordsVal !== false) {
      mValState.keywords = mKeywordsVal;
    }

    var mUrlTitle = null,
        mUrlHashEmptyCheck = $.isEmptyObject(mValState) ? false : true,
        mUrlHash = mUrlHashEmptyCheck ? '?' + $.param(mValState) : '';

    return {
      state: mValState,
      title: mUrlTitle,
      hash: mUrlHash
    };

  };

  function mUrlUpdate() {
    var mVals = mGetFilterVals();
    History.replaceState(mVals.state, mVals.title, mVals.hash);
  };

  function mGetUrlVals() {
    var mUrlVals = window.location.search.substring(1),
        mUrlValsCheck = mUrlVals.length ? true : false;

    if (mUrlValsCheck) {
      mSetFilterVals(mUrlVals);
    } else {
      mUrlUpdate();
    }

  };

  function mSetFilterVals(mUrlVals) {
    var mFilterVals = mMakeFilterValsObj(mUrlVals),
        mYearFilter = $('select.year'),
        mCompanyFilter = $('select.company'),
        mTypeFilter = $('select.type'),
        mIndustryFilter = $('select.industry'),
        mTopicFilter = $('select.topic'),
        mTechnologyFilter = $('select.technology'),
        mKeywordsFilter = $('input.keyword-search');

    if (mFilterVals.year && mYearFilter.length) {
      mYearFilter.val(mFilterVals.year);
    }

    if (mFilterVals.company && mCompanyFilter.length) {
      mCompanyFilter.val(mFilterVals.company);
    }

    if (mFilterVals.type && mTypeFilter.length) {
      mTypeFilter.val(mFilterVals.type);
    }

    if (mFilterVals.industry && mIndustryFilter.length) {
      mIndustryFilter.val(mFilterVals.industry);
    }

    if (mFilterVals.topic && mTopicFilter.length) {
      mTopicFilter.val(mFilterVals.topic);
    }

    if (mFilterVals.technology && mTechnologyFilter.length) {
      mTechnologyFilter.val(mFilterVals.technology);
    }

    if (mFilterVals.keywords && mKeywordsFilter.length) {
      mKeywordsFilter.val(mFilterVals.keywords);
    }

  };

  function mMakeFilterValsObj(mUrlVals) {
    var mUrlValsArr = mUrlVals.split('&'),
        mUrlValsObj = {};
    mUrlValsArr.map(function(mUrlValFull) {
      var mUrlVal = mUrlValFull.split('=');
      return (
        mUrlValsObj[mUrlVal[0]] = mUrlVal[1]
      );
    })
    return mUrlValsObj;
  };

  function mInitUrl() {
    mGetUrlVals();
  };


  $(document).ready(function() {
    if ($('.masonry-layout').length) {
      initFilters();
      initSorting();
      initIsotope();
    }
  });
})();

Handlebars.registerHelper('filterType', function(type, attrID, tableID) {
  this.attrID = attrID;
  this.parametricType = type;
  this.checkbox = type === 2 ? true : false;
  this.minmax = type === 3 ? true : false;
  this.minonly = type === 4 ? true : false;
  this.maxonly = type === 5 ? true : false;

  // Not happy about this fix
  var view = $('#pst_' + tableID).closest('.parametric-container,.hotspot-parametric-container,.search-parametric-container').data('pstView');
  var model = view.model;
  var data = model.get('dataTables')[tableID];
  var filters = view.router.parametricParams[tableID].filters;

  switch (true) {
    case type === 2: //CHECKBOX
      return new Handlebars.SafeString(Handlebars.templates.checkboxFilterTemplate({
        data: this
      }));
    case type > 2: //SLIDER MIN & MAX
      this.tableID = tableID;
      if (Object.keys(filters).indexOf(attrID) > -1) {
        this.start = filters[attrID];
      } else {
        if (type === 3) {
          if (this.UniqueValues.length == 1) {
            if (this.UniqueValues[0].indexOf('to') != -1) {
              //var maxminValues = this.UniqueValues[0].split('to');              
              //this.UniqueValues[0] = maxminValues[0].trim();
              this.UniqueValues.push(this.UniqueValues[0]);
              //this.UniqueValues.push(maxminValues[1].trim());
              this.start = [0, this.UniqueValues.length - 1];
            }else{
              this.UniqueValues.push(this.UniqueValues[0]);
              //this.UniqueValues[0] = '0';
              this.start = [0, this.UniqueValues.length - 1];
            }
          }else{
            this.start = [0, this.UniqueValues.length - 1];
          }
        } else if (type === 4) {
          if(this.UniqueValues.length == 1){            
            this.UniqueValues.push(this.UniqueValues[0]);
            this.UniqueValues[0] = '0';
            this.start = [0];
          }else{
            this.start = [0];
          }
        } else if (type === 5) {
          if (this.UniqueValues.length == 1) {
            this.UniqueValues.push(this.UniqueValues[0]);
            this.UniqueValues[0] = '0';
            this.start = [this.UniqueValues.length - 1];
          }
        } else {
          this.start = [this.UniqueValues.length - 1];
        }
      }

      this.rangeValues = this.UniqueValues.map(function(val, ind) {
        return ind;
      });

      if (this.UniqueValues.length < 2) {
        return new Handlebars.SafeString(Handlebars.templates.disabledSliderFilterTemplate({
          data:this
        }));
      } else {
        return new Handlebars.SafeString(Handlebars.templates.sliderFilterTemplate({
          data: this
        }));
      }
    default:
  }

});

window.filterView = Backbone.View.extend({
  events: {
    'click .pst-col-header': 'sort',
    'click .pst-trigger-filters': 'togglefilters',
    'change .pst-filter-checkbox-input': 'filter',
    'click .pst-trigger-parameters': 'showModal',
    'click .pst-trigger-parameters-apply': 'applyParameters',
    'click .pst-modal-close': 'closeModal',
    'click .pst-modal-cancel': 'closeModal',
    'click .pst-trigger-filter-reset': 'reset'
  },
  initialize: function(options) {
    this.parentContainerClass = options.parentContainerClass;
    this.sortDesc = true;
    this.model = options.model;
    this.bus = options.bus;
    this.router = options.router;
    this.id = options.id;
    this.listenTo(options.model, 'render_' + this.id, _.bind(this.render, this));
    this.listenTo(options.model, 'render', _.bind(this.render, this));
    this.listenTo(options.model, 'parametricUrl', _.bind(this.parametricUrl, this));
    this.listenTo(options.bus, 'sliderUpdate_' + this.id, _.bind(this.sliderUpdate, this));
    this.listenTo(options.bus, 'sortByName_' + this.id, _.bind(this.sort, this));
  },
  reset: function(el) {
    el.preventDefault();
    var parametricParams = this.model.get('parametricParams');
    parametricParams[this.id].filters = {};
    parametricParams[this.id].sort = {};
    parametricParams[this.id].visibleIndexes = [];
    parametricParams[this.id].visibles = [];

    this.model.set('parametricParams', parametricParams, {
      silent: true
    });
    this.parametricUrl();
  },
  togglefilters: function(el) {
    if (el) {
      el.preventDefault();
    }
    $(this.parentContainerClass + ' #pst_' + this.id + '.pst').toggleClass('pst-filters-open');
  },
  sort: function(el) {
    el.preventDefault();
    this.sortDesc = !this.sortDesc;
    $el = $(el.currentTarget);
    var value = $el.data('attr');
    var order = this.sortDesc ? 'desc' : 'asc';
    var pp = this.model.get('parametricParams');
    var sort = {};
    sort[value] = order;
    pp[this.id].sort = sort;
    this.model.set('parametricParams', pp, {
      silent: true
    });
    this.parametricUrl();
  },
  filter: function(el) {
    el.preventDefault();
    $el = $(el.target);

    var tableID = this.id;
    var attrid = $el.data('attrid');
    var values = [];
    $('input[data-attrid="' + attrid + '"]').each(function(i, el) {
      if (el.checked) {
        values.push(el.value);
      }
    });

    var data = this.model.toJSON();
    var parametricParams = data.parametricParams;
    var currentTableParams = parametricParams[tableID];

    if (values.length === 0) {
      delete currentTableParams.filters[attrid];
    } else {
      currentTableParams.filters[attrid] = values;
    }

    this.model.set(data, {
      silent: true
    });
    this.parametricUrl();
  },
  parametricUrl: function() {
    // Should spit out a string that looks like this:
    // tableID:visible;filterName:filtervalue,filterName:filtervalue|sortByName:sortByValue/tableID:...
    var data = this.model.toJSON();
    var parametricParams = data.parametricParams;

    var parametricUrl = Object.keys(parametricParams).map(function(tableID) {
      var paramTable = parametricParams[tableID];
      var filters = paramTable.filters;
      var visibles = paramTable.visibles;
      var sort = paramTable.sort || {};

      // Get visibles names from indexes provided
      var visiblesStr = '';
      if (!paramTable.usingDefaultVisibles) {
        visiblesStr = visibles.join(',');
      }

      var filtersStr = Object.keys(filters).map(function(filter) {
        return filters[filter].map(function(filterValue) {
          return filter + ':' + filterValue;
        });
      }).join(',');

      var sortStr = Object.keys(sort).map(function(sortBy) {
        return sortBy + ':' + sort[sortBy];
      }).join(',');

      var urlString = tableID + ';' + visiblesStr + ';' + filtersStr + ';' + sortStr + '/';
      if (urlString === tableID + ';;;/') {
        urlString = '';
      }
      return urlString;
    }).join('');

    this.navigate(parametricUrl);
  },
  navigate: function(parametricUrl) {
    if (this.router.disableDeepLink) {
      window.routerParams = parametricUrl;
      this.router.search();
    } else {
      if (parametricUrl === '') {
        parametricUrl = 'reset';
      }

      this.router.navigate('/' + parametricUrl, {
        trigger: true
      });
    }
  },
  closeModal: function() {
    this.$el.find('.pst-modal').hide();
  },
  showModal: function() {
    this.$el.find('.pst-modal').show();
  },
  sliderUpdate: function(values, attr, type) {
    values = values.map(function(val){
      return parseInt(val, 10);
    });
    var data = this.model.toJSON();
    var attrIndex = data.dataTables[this.id].attributeToIndexMap[attr];
    var attribute = data.dataTables[this.id].headers.Attributes[attrIndex];
    var pp = data.parametricParams[this.id];
    if (type === 4 || type === 5) { // minonly or maxonly sliders
      if (type === 4 && (values[0] === 0)) {
        delete pp.filters[attr];
      } else if (type === 5 && (values[0] === attribute.UniqueValues.length - 1)) {
        delete pp.filters[attr];
      } else {
        pp.filters[attr] = [values[0]];
      }
    } else {
      if ((values[0] !== 0) || (values[1] !== attribute.UniqueValues.length - 1)) {
        pp.filters[attr] = [values[0], values[1]];
      } else {
        delete pp.filters[attr];
      }
    }
    data.parametricParams[this.id] = pp;
    this.model.set(data, {
      silent: true
    });
    this.parametricUrl();
  },
  applyParameters: function(el) {
    var pp = this.model.get('parametricParams');
    var selectedParameters = [];
    $(el.target).closest('.pst-modal-body').find('.pst-modal-checkbox-input').each(function(index, el) {
      if (el.checked) {
        selectedParameters.push(el.value);
      }
    });
    pp[this.id].visibles = selectedParameters;
    this.model.set('parametricParams', pp, {
      silent: true
    });
    this.closeModal();
    this.parametricUrl();
  },

  // Templates attached to the view so they're only compiled once
  filterTemplate: Handlebars.templates.filterTemplate,
  filterRows: function(rows, filterIndex, parametricType, selectedFilterIndexes) {
    return rows.reduce(function(result, product) {
      var productFilterIndex = product.ProductAttributeIndexes[filterIndex];
      // this product doesn't have a value for the given filter
      if (productFilterIndex === -1) {
        return result;
      }
      switch (parametricType) {
        case 2:
          if (selectedFilterIndexes.indexOf(productFilterIndex) > -1) {
            result.push(product);
          }
          break;
        case 3:
          if (selectedFilterIndexes.length < 2) {
            if (selectedFilterIndexes.indexOf(productFilterIndex) > -1) {
              result.push(product);
            }
          } else {
            //multi value
            if (selectedFilterIndexes[0] <= productFilterIndex && parseFloat(productFilterIndex) <= parseFloat(selectedFilterIndexes[1])) {
              result.push(product);
            }
          }
          break;
        case 4:
          if (selectedFilterIndexes[0] <= productFilterIndex) {
            result.push(product);
          }
          break;
        case 5:
          if (selectedFilterIndexes[0] >= productFilterIndex) {
            result.push(product);
          }
          break;
      }
      return result;
    }, []);
  },
  uniqueIndexesForAttribute: function(rows, index) {
    return Object.keys(rows.reduce(function(result, row) {
      if (row.ProductAttributeIndexes[index] === -1) {
        return result;
      }
      result[row.ProductAttributeIndexes[index]] = true;
      return result;
    }, {}));
  },
  render: function() {
    var self = this;
    var data = this.model.toJSON();
    var header = data.dataTables[this.id].headers;
    var rows = data.dataTables[this.id].rows;
    var attributeToIndexMap = data.dataTables[this.id].attributeToIndexMap;
    var indexToAttributeMap = data.dataTables[this.id].indexToAttributeMap;
    var currentTableParams = data.parametricParams[this.id];
    var currentFilters = currentTableParams.filters;
    var currentFitlersArray = Object.keys(currentFilters);

    var filterRows = JSON.parse(JSON.stringify(rows));

    currentFitlersArray.map(function(filter) {
      index = attributeToIndexMap[filter];
      header.Attributes[index].uniqueValues = self.uniqueIndexesForAttribute(filterRows, index);

      var parametricType = header.Attributes[index].ParametricType;
      filterRows = self.filterRows(filterRows, index, parametricType, currentFilters[filter]);
      header.Attributes[index].availableRows = filterRows;
    });

    Object.keys(header.Attributes).map(function(index) {
      var filter = data.dataTables[self.id].indexToAttributeMap[index];
      if (currentFitlersArray.indexOf(filter) === -1) {
        header.Attributes[index].availableRows = JSON.parse(JSON.stringify(filterRows));
        header.Attributes[index].uniqueValues = self.uniqueIndexesForAttribute(filterRows, index);
      }
    });

    data.cols = data.cols || {};
    data.cols[this.id] = currentTableParams.visibles.map(function(visible) {
      var visIndex = data.dataTables[self.id].attributeToIndexMap[visible];
      var attribute = header.Attributes[visIndex];
      var selectedValues = data.parametricParams[self.id].filters[attribute.UUID];
      rows = rows.reduce(function(resultSet, product) {
        product.matchesAttribute = product.matchesAttribute || [];
        product.matchesAttribute[visIndex] = false;
        var productFilterIndex = product.ProductAttributeIndexes[visIndex];
        var parametricType = header.Attributes[visIndex].ParametricType;
        var currentFiltersForAttr = currentFilters[visible];

        if (productFilterIndex === -1 || !currentFiltersForAttr) {
          product.matchesAttribute[visIndex] = true;
          if (visIndex > 1) {
            product.matchesAttribute[visIndex] = product.matchesAttribute[visIndex] && product.matchesAttribute[visIndex - 1];
          }
          resultSet.push(product);
          return resultSet;
        }

        if (visIndex > 0) {
          product.matchesAttribute[visIndex] == product.matchesAttribute[visIndex] && product.matchesAttribute[visIndex - 1];
        }
        resultSet.push(product);
        return resultSet;
      }, []);

      attribute.uniqueValuesWithSelection = attribute.UniqueValues.map(function(value, index) {
        index = parseInt(index, 10);
        values = attribute;
        var retVal = {
          value: attribute.UniqueValues[index],
          index: index,
          selected: false,
          disabled: true
        };

        if (selectedValues !== undefined && selectedValues.indexOf(index) > -1) {
          retVal.selected = true;
        }

        retVal.disabled = !attribute.uniqueValues.reduce(function(val, availableIndex){
          return val || index === parseInt(availableIndex, 10);
        }, false);


        return retVal;
      });
      return attribute;
    });

    var data = {
      tableID: this.id,
      selectedFilters: data.parametricParams[this.id].filters,
      cols: data.cols[this.id],
      numTotalResults: rows.length,
      numResults: rows.filter(function(row) {
        return row.matchingFilter;
      }).length,
      ptVar: window.ptVar
    };

    this.$el.html(this.filterTemplate(data));
    this.$el.find('.pst-slider')
      .each(function(index, el) {
        var $this = $(this);
        var range = $this.data('range');
        var start = $this.data('start');
        var tableID = $this.data('tableid');
        var attr = $this.data('attrid');
        var type = $this.data('attrtype');
        // Check if already built first
        if (!$this.hasClass(self.pstSliderBuiltClass)) {
          // Create Sliders
          self.pstSliderCreate(index, el, range, start, tableID, attr, type);
          // Add flag since this is now built
          $this.addClass(this.pstSliderBuiltClass);
        }
      });
  },
  pstSliderCreate: function(index, el, range, start, tableID, attr, type) {
    var self = this;

    function getSliderRange() {
      if (range.length) {
        return range.split(',').map(function(val) {
          return parseInt(val, 10);
        });
      } else {
        return range;
      }
    }
    var sliderRange = getSliderRange();
    var rangeAsObject = sliderRange.reduce(function(retVal, number, index, arr) {
      if (index === 0) {
        retVal['min'] = number;
      } else if (index === arr.length - 1) {
        retVal['max'] = number;
      } else {
        var percent = Math.floor((index / (arr.length - 1)) * 100);
        retVal[percent + '%'] = number;
      }
      return retVal;
    }, {});
    var sliderStart = function() {
      if (typeof(start) === 'number') {
        return start;
      }
      starts = start.split(',').map(function(num) {
        return parseInt(num, 10);
      });
      return starts;
    };
    var minMax = sliderStart(tableID, attr, type);
    var connect = Array.isArray(minMax) ? true : false;
    var behaviour = 'drag';
    if (connect === true) {
      if (type === 4) {
        connect = 'upper';
      } else if (type === 5) {
        connect = 'lower';
      }
    } else {
      //behaviour = undefined;
      behaviour = 'none';
    }
    noUiSlider.create(el, {
      behaviour: behaviour,
      orientation: 'vertical',
      direction: 'rtl',
      connect: connect,
      start: minMax,
      step: 1,
      snap: true,
      range: rangeAsObject,
    });
    el.noUiSlider.on('update', function(values, handle) {
      self.pstSliderUpdate(index, values, handle, sliderRange, el, self, tableID, attr, type);
    });
    el.noUiSlider.on('change', function(values, handle) {
      self.bus.trigger('sliderUpdate_' + tableID, values, attr, type);
    });
  },

  pstSliderUpdate: function(index, values, handle, sliderRange, el, view, tableID, attrID, type) {
    var sameValue = values[0] === values[1];
    var numIndex = Math.round(values[handle]);
    var map = view.model.get('dataTables')[tableID].attributeToIndexMap;
    var attributes = view.model.get('dataTables')[tableID].headers.Attributes[map[attrID]];
    var value = attributes.UniqueValues[numIndex];
    if (type === 4 || type === 5) {
      if (attributes.UniqueValues.length === 2) {
        if(attributes.UniqueValues[0].trim() === '0' || attributes.UniqueValues[1].trim() === '0') {
          $(el)
            .parents('.pst-filter-slider')
            .find('.pst-slider-min')
            .html(attributes.UniqueValues[attributes.UniqueValues.length - 1]);

          $(el)
            .parents('.pst-filter-slider')
            .find('.pst-slider-max')
            .html(attributes.UniqueValues[attributes.UniqueValues.length - 1]);

          $(el)
            .parents('.pst-filter-slider')
            .find('.pst-slider')
            .addClass('pst-filter-oneSingleValue');

          el.setAttribute('disabled', true);
          return;          
        }
      }
    }

    if (type === 4) {
      $(el)
        .parents('.pst-filter-slider')
        .find('.pst-slider-min')
        .html(value);

      $(el)
        .parents('.pst-filter-slider')
        .find('.pst-slider-max')
        .html(attributes.UniqueValues[attributes.UniqueValues.length - 1]);
      return;
    }

    if (type === 5){
      $(el)
        .parents('.pst-filter-slider')
        .find('.pst-slider-max')
        .html(value);

      $(el)
        .parents('.pst-filter-slider')
        .find('.pst-slider-min')
        .html(attributes.UniqueValues[0]);
      return;
    }

    if (handle === 0 || sameValue) {
      $(el)
        .parents('.pst-filter-slider')
        .find('.pst-slider-min')
        .html(value);
    } else
    if (handle === 1 || sameValue) {
      $(el)
        .parents('.pst-filter-slider')
        .find('.pst-slider-max')
        .html(value);
    }

    if (type === 3) {
      if (attributes.UniqueValues.length === 2) {
        if(attributes.UniqueValues[0].trim() === attributes.UniqueValues[1].trim() ) {
          $(el)
          .parents('.pst-filter-slider')
          .find('.pst-slider')
          .addClass('pst-filter-oneSingleValue');

          el.setAttribute('disabled', true);
        }
      }
    }

  }
});

window.headerView = Backbone.View.extend({

  events: {
    'click .pst-header-toggle': 'toggleHeader'
  },
  initialize: function(options) {
    this.xLocation = window.scrollX;
    this.yLocation = window.scrollY;
    this.parentContainerClass = options.parentContainerClass;
    this.parent
    this.sortDesc = true;
    this.model = options.model;
    this.bus = options.bus;
    this.disableLinks = options.disableLinks || false;
    this.disableDeepLinks = options.disableDeepLinks || false;
    this.id = options.id;
    this.listenTo(options.model, 'render_' + this.id, _.bind(this.render, this));
    this.listenTo(options.model, 'render', _.bind(this.render, this));
    this.listenTo(options.bus, 'scroll', _.bind(this.pstScrollHandler, this));
    this.listenTo(options.bus, 'resize', _.bind(this.render, this));
    this.listenTo(options.bus, 'close', _.bind(function(close) {
      if (close) {
        this.pstToggleClosed(this.pst);
      } else {
        this.pstToggleOpen(this.pst);
      }
    }, this));

    this.$D = $(document);
    this.$W = $(window);
    this.$html = $('html');
    this.$priNav = $('.pri-nav');
    this.pstClass = 'pst';
    this.pstSelector = '.' + this.pstClass;
    this.pstOpenClass = 'pst-open';
    this.pstOpenSelector = '.' + this.pstOpenClass;
    this.pstBuiltClass = 'pst-built';
    this.pstBuiltSelector = '.' + this.pstBuiltClass;
    this.pstScrollingXClass = 'pst-scrolling-x';
    this.pstScrollingYClass = 'pst-scrolling-y';
    this.pstBoxClass = 'pst-box';
    this.pstBoxSelector = '.' + this.pstBoxClass;
    this.pstHeaderClass = 'pst-header';
    this.pstHeaderSelector = '.' + this.pstHeaderClass;
    this.pstHeaderGhostClass = 'pst-header-ghost';
    this.pstHeaderGhostSelector = '.' + this.pstHeaderGhostClass;
    this.pstTableClass = 'pst-table';
    this.pstTableSelector = '.' + this.pstTableClass;
    this.pstTableHeadClass = 'pst-table-head';
    this.pstTableHeadSelector = '.' + this.pstTableHeadClass;
    this.pstCellStickyClass = 'pst-cell-sticky';
    this.pstCellStickySelector = '.' + this.pstCellStickyClass;
    this.pstColHeaderClass = 'pst-col-header';
    this.pstColHeaderSelector = '.' + this.pstColHeaderClass;
    this.pstPartRefClass = 'pst-part-ref';
    this.pstPartRefSelector = '.' + this.pstPartRefClass;
    this.pstTableHeadStickyClass = 'pst-sticky-thead';
    this.pstTableHeadStickySelector = '.' + this.pstTableHeadStickyClass;
    this.pstTableColStickyClass = 'pst-sticky-col';
    this.pstTableColStickySelector = '.' + this.pstTableColStickyClass;
    this.pstTablePointStickyClass = 'pst-sticky-point';
    this.pstTablePointStickySelector = '.' + this.pstTablePointStickyClass;
    this.pstTablePointXStickyClass = 'pst-sticky-point-x';
    this.pstTablePointXStickySelector = '.' + this.pstTablePointXStickyClass;
    this.pstFilterBoxClass = 'pst-filter-box';
    this.pstFilterBoxSelector = '.' + this.pstFilterBoxClass;
    this.pstFiltersTriggerClass = 'pst-trigger-filters';
    this.pstFiltersTriggerSelector = '.' + this.pstFiltersTriggerClass;
    this.pstFiltersOpenClass = 'pst-filters-open';
    this.pstFilterSliderClass = 'pst-filter-slider';
    this.pstFilterSliderSelector = '.' + this.pstFilterSliderClass;
    this.pstSliderClass = 'pst-slider';
    this.pstSliderSelector = '.' + this.pstSliderClass;
    this.pstSliderBuiltClass = 'pst-slider-built';
    this.pstSliderMinClass = 'pst-slider-min';
    this.pstSliderMinSelector = '.' + this.pstSliderMinClass;
    this.pstSliderMaxClass = 'pst-slider-max';
    this.pstSliderMaxSelector = '.' + this.pstSliderMaxClass;
    this.pstStickyXPosition = 0;
    this.pstStickyYPosition = 0;
  },
  getTableSpec: function(tableID){
    var data = this.model.toJSON();
    var parametricParams = data.parametricParams;
    var paramTable = parametricParams[tableID];
    var filters = paramTable.filters;
    var visibles = paramTable.visibles;
    var sort = paramTable.sort || {};

    // Get visibles names from indexes provided
    var visiblesStr = '';
    if (!paramTable.usingDefaultVisibles) {
      visiblesStr = visibles.join(',');
    }

    var filtersStr = Object.keys(filters).map(function(filter) {
      return filters[filter].map(function(filterValue) {
        return filter + ':' + filterValue;
      });
    }).join(',');

    var sortStr = Object.keys(sort).map(function(sortBy) {
      return sortBy + ':' + sort[sortBy];
    }).join(',');

    var urlString = tableID + ';' + visiblesStr + ';' + filtersStr + ';' + sortStr;
    return urlString;
  },
  render: function() {
    var self = this;
    var data = this.model.toJSON().dataTables[this.id];
    var tableSpec = this.getTableSpec(this.id);

    var urlPage = window.location.toString().replace(/#/g, "%23");
    var mailLink = '';
    if(urlPage.indexOf('%23') != -1){
      var paramsURL =  window.location.toString().replace(/#/g, "%23").split('%23');
      if(paramsURL.length > 1){
        if(paramsURL[1].indexOf(tableSpec.replace(/;/g, "")) != -1){
          mailLink = urlPage;
        }else{
          mailLink = paramsURL[0] + '#'+ tableSpec + '/';
        }
      }
    }else{
      mailLink = window.location.toString().replace(/#/g, "%23") + '#'+ tableSpec + '/';
    }
    // Hide Email link for Application Category Detail Pages and Associated Product Tables for Block Diagrams
    var boolShowEmail = ((urlPage.indexOf('/applications/') != -1 || urlPage.indexOf('/block-diagram-print/') != -1) && !this.disableDeepLinks) ? false : !this.disableDeepLinks;
    
    // Render html
    var data = {
      name: data.headers.Name,
      emailSafeName: data.headers.Name.replace(/&/g, '%26'),
      count: data.rows.length,
      disableLinks: this.disableLinks,
      ptVar: window.ptVar,
      mailToLink: mailLink.replace(/#/g, "%23"),
      //showEmail: !this.disableDeepLinks,
      showEmail: boolShowEmail,
      catID: this.id,
      hotSpotID: this.model.toJSON().hotSpotId,
      tableSpec: tableSpec,
      templateID: window.templateID,
      currentID: window.current,
      blockDiagramID: this.model.toJSON().blockDiagramId,
      showCnLink: this.$el.closest('.tabbed-content-container').length < 1
    };

    var html = Handlebars.templates.headerTemplate(data);
    this.$el.html(html);

    this.pstInit();
    $(self.parentContainerClass + ' #pst_' + this.id + ' .pst-trigger-filters').click(function() {
      self.bus.trigger('filter_' + self.id + '_toggle');
    });

    this.pst = $($(self.parentContainerClass + ' #pst_' + this.id).eq(0));
    this.pstOffset = this.pst.offset().left;
    this.pstHeader = this.pst.find(this.pstHeaderSelector);
    this.pstTable = this.pst.find(this.pstTableSelector);
    this.pstTableHeadSticky = this.pst.find(this.pstTableHeadStickySelector);
    this.pstTableColSticky = this.pst.find(this.pstTableColStickySelector);
    this.pstTablePointSticky = this.pst.find(this.pstTablePointStickySelector);
    this.pstTablePointXSticky = this.pst.find(this.pstTablePointXStickySelector);
    this.pstHeaderGhost = this.pst.find(this.pstHeaderGhostSelector);
  },
  toggleHeader: function(e) {
    e.preventDefault();
    var $e = $(e.target);
    // passes through the pst-header element that was
    // clicked as a parameter to toggle function
    this.pstToggle($e);
    this.$W.trigger('resize');
  },
  pstInit: function() {
    var self = this;
    // initial build on page load for any .pst
    // with open class
    var $pstOpen = $(self.parentContainerClass + ' #pst_' + this.id + '.pst-open');

    $pstOpen.each(function() {
      self.pstBuilder($(this));
    });
    // attach click event to elements in document
    this.pstFiltersTriggerClickHandler();
  },
  // attaches scroll events
  pstBuilder: function(pst) {
    var pst = pst;

    // mark this pst as built
    pst.addClass(this.pstBuiltClass);
  },
  pstScrollHandler: function(yscroll, xscroll) {
    if (this.pst === undefined) {
      return;
    }
    if (this.xLocation != xscroll) {
      this.xLocation = xscroll;
      this.pstScrollX(this.pst, this.$W, this.pstTableColSticky, this.pstTablePointXSticky, xscroll);
    }
    if (this.yLocation != yscroll) {
      this.yLocation = yscroll;
      this.pstScrollY(this.pst, this.pstHeader, this.pstTable, this.pstTableHeadSticky, this.pstTablePointXSticky, this.pstTableColSticky, yscroll);
    }
  },
  pstFiltersTriggerClickHandler: function() {
    this.$D.on('click', '#pst_' + this.id + this.pstFiltersTriggerSelector, function(event) {
      event.preventDefault();
      var $this = $(this);
      pstFiltersToggle($this);
    });
  },
  pstToggle: function(triggerClicked) {
    var pst = triggerClicked.parents(this.pstSelector);
    if (pst.hasClass(this.pstOpenClass)) {
      this.pstToggleClosed(pst);
    } else
    if (pst.hasClass(this.pstBuiltClass)) {
      this.pstToggleOpen(pst);
    } else {
      this.pstToggleOpen(pst);
      this.pstBuilder(pst);
    }
  }, // adds open class to parent .pst
  pstToggleClosed: function(pst) {
    pst.removeClass(this.pstOpenClass);
  },
  // adds open class to parent .pst
  pstToggleOpen: function(pst) {
    pst.addClass(this.pstOpenClass);
  },
  isElementVisible: function(el) {
    if (el === undefined) {
      return false;
    }
    el = el[0];
    if (el.getBoundingClientRect === undefined) {
      return false;
    }
    var rect = el.getBoundingClientRect(),
      vWidth = window.innerWidth || document.documentElement.clientWidth,
      vHeight = window.innerHeight || document.documentElement.clientHeight;

    // Return false if it's not in the viewport
    if (rect.right < 0 ||
      rect.bottom < 0 ||
      rect.left > vWidth ||
      rect.top > vHeight) {
      return false;
    }

    return true;
  },

  // scroll handler for any x axis scrolls
  pstScrollX: function(pst, $W, pstTableColSticky, pstTablePointXSticky, pstXValue) {
    if (pst === undefined) {
      return false;
    }
    if (!pst.hasClass('pst-open')) {
      return;
    }

    if (!this.isElementVisible(pst)) {
      if (pstXValue >= pstOffset) {
        this.pstStickyXPosition = pstXValue - pstOffset;
      } else if (pstXValue >= pstOffset - 45) {
      } else {
        this.pstStickyXPosition = 0;
      }
      return;
    }
    var pstOffset = this.pstOffset,
      pstHeader = this.pstHeader;

    // Once the side of the pst hits the side of the lsn
    if (pstXValue >= pstOffset) {
      this.pstStickyXPosition = pstXValue - pstOffset;

      // pstHeader.css({
      //   'transform': 'translateY(' + this.pstStickyYPosition + 'px) translateX(' + this.pstStickyXPosition + 'px)'
      // });

      pstTableColSticky.css({
        'transform': 'translateX(' + this.pstStickyXPosition + 'px)'
      });

      pstTablePointXSticky.css({
        'transform': 'translateY(' + this.pstStickyYPosition + 'px) translateX(' + this.pstStickyXPosition + 'px)'
      });
    } else if (pstXValue >= pstOffset - 45) {

      pst.addClass(this.pstScrollingXClass);
      if (pstTableColSticky.filter(':visible').length > 0) {
        pstTableColSticky.css({
          'transform': 'translateX(' + 0 + 'px)'
        });
      }

      pstTablePointXSticky.css({
        'transform': 'translateY(' + this.pstStickyYPosition + 'px) translateX(' + 0 + 'px)'
      });

      if ($('#showLeft').length && $('.lsn').is('.sticky')) {
        $('#showLeft').css({
          'display': 'none'
        });
      }
    } else {
      $('#showLeft').css({
        'display': 'inherit'
      });

      this.pstStickyXPosition = 0;
      // pstHeader.css({
      //   'transform': 'translateY(' + this.pstStickyYPosition + 'px) translateX(0px)'
      // });

      pstTableColSticky.css({
        'transform': 'translateX(0px)'
      });

      pstTablePointXSticky.css({
        'transform': 'translateY(' + this.pstStickyYPosition + 'px) translateX(0px)'
      });

      pst.removeClass(this.pstScrollingXClass);
    }
  },

  // scroll handler for any y axis scrolls
  pstScrollY: function(pst, pstHeader, pstTable, pstTableHeadSticky, pstTablePointXSticky, pstTableColSticky, yscroll) {
    var windowScrollTop = yscroll,
      priNavHeight = this.$priNav.outerHeight(),
      pstTopPosition = pst.offset().top,
      pstHeight = pst.outerHeight(),
      pstTableTopPosition = pstTable.offset().top,
      pstHeaderHeight = pstHeader.outerHeight(),
      pstTableHeadStickyHeight = pstTableHeadSticky.outerHeight(),
      pstHeaderGhost = this.pstHeaderGhost,
      paddedOffset = pstTableHeadStickyHeight,
      pstCheckAtTop = windowScrollTop > pstTopPosition - priNavHeight,
      pstCheckAtBottom = windowScrollTop > pstTopPosition - priNavHeight - pstTableHeadStickyHeight - pstHeaderHeight + pstHeight + paddedOffset;
      this.pstStickyYPosition = parseInt(windowScrollTop + priNavHeight + pstHeaderHeight - pstTableTopPosition + paddedOffset - 1, 10);


    if (!this.isElementVisible(pst)) {
      return;
    }

    if (pstCheckAtTop && !pstCheckAtBottom) {
      pst.addClass(this.pstScrollingYClass);

      // pstHeader.css({
      //   'transform': 'translateY(' + this.pstStickyYPosition + 'px) translateX(' + this.pstStickyXPosition + 'px)'
      // });
      pstHeader.css({
        'transform': 'translateY(' + this.pstStickyYPosition + 'px)'
      });
      pstTableHeadSticky.css({
        'transform': 'translateY(' + this.pstStickyYPosition + 'px) translateX(0)'
      });
      pstTablePointXSticky.css({
        'transform': 'translateY(' + this.pstStickyYPosition + 'px) translateX(' + this.pstStickyXPosition + 'px)'
      });
      pstTableColSticky.css({
        'transform': 'translateX(' + this.pstStickyXPosition + 'px)'
      });
    } else {
      this.pstStickyYPosition = 0;

      pst.removeClass(this.pstScrollingYClass);
      // pstHeader.css({
      //   'transform': 'translateY(0) translateX(' + this.pstStickyXPosition + 'px)'
      // });
      pstHeader.css({
        'transform': 'translateY(0)'
      });
      pstTableHeadSticky.css({
        'transform': 'translateY(0) translateX(0)'
      });
      pstTablePointXSticky.css({
        'transform': 'translateY(0) translateX(' + this.pstStickyXPosition + 'px)'
      });
      pstTableColSticky.css({
        'transform': 'translateX(' + this.pstStickyXPosition + 'px)'
      });
    }
  }
});

window.modalView = Backbone.View.extend({

  events: {
    'click .pst-modal-close': 'close',
    'click .pst-modal-cancel': 'close',
    'click .pst-modal-apply': 'apply'
  },
  initialize: function(options) {
    this.sortDesc = true;
    this.model = options.model;
    this.id = options.id;
    this.listenTo(options.model, 'openModal_' + this.id, _.bind(this.open, this));
    this.listenTo(options.model, 'render_' + this.id, _.bind(this.render, this));
    this.listenTo(options.model, 'render', _.bind(this.render, this));
  },
  render: function() {
    var self = this;
    var data = this.model.toJSON();
    var currentHeader = data.dataTables[this.id].headers;
    var addableCols = currentHeader.Attributes.map(function(attr) {
      attr.Displayed = data.parametricParams[self.id].visibles.indexOf(attr.UUID) > -1;
      return attr;
    });

    // Render html
    var data = {
      rows: this.model.toJSON().dataTables[this.id].rows,
      headers: currentHeader,
      addableCols: addableCols,
      ptVar: window.ptVar
    };
    var html = Handlebars.templates.modalTemplate(data);
    this.$el.html(html);
  },
  open: function() {
    this.$el.find('.pst-modal').show();
  },
  close: function() {
    this.render();
  },
  apply: function() {
    var pp = this.model.get('parametricParams');
    var map = this.model.get('dataTables')[this.id].attributeToIndexMap;
    var selectedParameters = [];
    this.$el.find('.pst-modal-checkbox-input').each(function(index, el) {
      if (el.checked) {
        selectedParameters.push(el.value);
      }
    });
    var selectedIndexes = selectedParameters.map(function(param) {
      return map[param];
    });
    pp[this.id].visibles = selectedParameters;
    pp[this.id].visibleIndexes = selectedIndexes;
    pp[this.id].usingDefaultVisibles = false;
    this.model.set('parametricParams', pp, {
      silent: true
    });
    this.model.trigger('parametricUrl');
    this.close();
  }
});

// Page Model
window.pageModel = Backbone.Model.extend({
  url: function() {
    if (window.location.host.indexOf('127.0.0.1') > -1 || window.location.host.indexOf('rockflicker') > -1) {
      return './data/AllProductv6.json';
    }

    if (this.options.method === 'GetGroupedProducts') {
      return '/api/qorvopublic/productapi/' + this.options.method + '/?scope=' + this.options.scope + '&categoryId=' + this.options.category_id + '&resultType=' + this.options.resultType + '&includeDiscontinuedProducts=false';
    } else if (this.options.method === 'GetGroupedProductsForHotSpot') {
      return '/api/qorvopublic/productapi/' + this.options.method + '/?scope=' + this.options.scope + '&blockDiagramId=' + this.options.blockDiagramId + '&hotSpotId=' + this.options.hotSpotId + '&resultType=' + this.options.resultType;
    }
  },
  initialize: function(data, options) {
    this.options = options;
  },

  parse: function(productModel) {
    var type = Object.prototype.toString.call( productModel );

    if (type === '[object Array]' && productModel.length === 0) {
      this.trigger('noProductFound');
      return {};
    }

    if (type === '[object Object]' && productModel.mode === 2) {
      this.trigger('productList', productModel.data);
      return productModel;
    } else if (type === '[object Object]' && productModel.mode === 1) {
      productModel = productModel.data;
    }

    var retVal = {
      dataTables: {},
      hotSpotId: this.options.hotSpotId,
      blockDiagramId: this.options.blockDiagramId
    };

    // convert the array to an index object by UUID
    productModel.map(function(group) {

      var uuid = group.ProductType.UUID;
      // table header
      retVal.dataTables[uuid] = retVal.dataTables[uuid] || {};
      retVal.dataTables[uuid].headers = group.ProductType;

      // map to make finding values based on index
      retVal.dataTables[uuid].indexToAttributeMap = retVal.dataTables[uuid].indexToAttributeMap || {};
      retVal.dataTables[uuid].indexToAttributeMap = retVal.dataTables[uuid].headers.Attributes.reduce(function(retVal, attr, index) {
        retVal[index] = attr.UUID;
        return retVal;
      }, {});

      // map to make find values based on attribute name
      retVal.dataTables[uuid].attributeToIndexMap = retVal.dataTables[uuid].attributeToIndexMap || {};
      retVal.dataTables[uuid].attributeToIndexMap = retVal.dataTables[uuid].headers.Attributes.reduce(function(retVal, attr, index) {
        retVal[attr.UUID] = index;
        return retVal;
      }, {});

      // sanitize the data
      retVal.dataTables[uuid].rows = group.Products.map(function(row) {
        row.IsProductNew = row.IsNew === 1 ? true : false;
        return row;
      });

      return retVal;
    });
    // save a bit of state to kick of render
    var data = JSON.parse(JSON.stringify(retVal));
    this.trigger('bootstrap', data);
    // Set the model

    return retVal;
  },
  updateFilters: function(parametricParams) {
    this.set('parametricParams', parametricParams, {
      silent: true
    });
  },
  filterTables: function() {
    // All the data for each table
    //[{ProductType: {}, Products: {}}, {ProductType: {}, Products: {}}]
    var dataTables = this.get('dataTables');
    // Active filters
    // [{tableID: [{filterName: filterValue}, {filterName: filterValue}]}, {tableID: [{filterName: filterValue}, {filterName: filterValue}]}]
    var parametricParams = this.get('parametricParams');

    // Use filters to match table results.
    // Get index of the activated filters
    // Use index of activated filter to build an array of products that match the filter value
    Object.keys(dataTables).map(function(tableID) {
      var headers = dataTables[tableID].headers;
      var rows = dataTables[tableID].rows;
      var tableFilters = parametricParams[tableID].filters;
      var tableFiltersKeys = Object.keys(tableFilters);
      var attributeToIndexMap = dataTables[tableID].attributeToIndexMap;

      rows.forEach(function(product) {
        product.matchingFilter = true;
        product.matchingFilterCount = 0;
      });

      tableFiltersKeys.map(function(filterName) {
        var selectedFilterIndexes = tableFilters[filterName];
        var filterIndex = attributeToIndexMap[filterName];
        var parametricType = headers.Attributes[filterIndex].ParametricType;

        // Check products for matchingFilters (using all filters together)
        rows.map(function(product) {
          var productFilterIndex = product.ProductAttributeIndexes[filterIndex];
          //var attributeFilterCount = headers.Attributes[filterIndex].UniqueValues.length;
          // this product doesn't have a value for the given filter
          if (productFilterIndex === -1) {
            return;
          }
          switch (parametricType) {
            case 2:
              if (selectedFilterIndexes.indexOf(productFilterIndex) > -1) {
                product.matchingFilterCount = product.matchingFilterCount + 1;
              }
              break;
            case 3:
              if (selectedFilterIndexes.length < 2) {
                if (selectedFilterIndexes.indexOf(productFilterIndex) > -1) {
                  product.matchingFilterCount = product.matchingFilterCount + 1;
                }
              } else {
                //multi value
                if (selectedFilterIndexes[0] <= productFilterIndex && parseFloat(productFilterIndex) <= parseFloat(selectedFilterIndexes[1])) {
                  product.matchingFilterCount = product.matchingFilterCount + 1;
                }
              }
              break;
            case 4:
              if (selectedFilterIndexes[0] <= productFilterIndex) {
                product.matchingFilterCount = product.matchingFilterCount + 1;
              }
              break;
            case 5:
              if (selectedFilterIndexes[0] >= productFilterIndex) {
                product.matchingFilterCount = product.matchingFilterCount + 1;
              }
              break;
          }
        });
      });
      if (tableFiltersKeys.length > 0) {
        rows.map(function(r) {
          if (r.matchingFilterCount === tableFiltersKeys.length) {
            r.matchingFilter = true;
          } else {
            r.matchingFilter = false;
          }
        });
      }

      dataTables[tableID].rows = rows;
    });



    this.set('dataTables', dataTables, {
      silent: true
    });
  }
});

window.pstView = Backbone.View.extend({
  events: {},
  initialize: function(options) {
    this.dot = [];
    this.parentContainerClass = options.parentContainerClass;
    this.disableLinks = options.disableLinks || false;
    this.timer = undefined;
    this.model = options.model;
    this.bus = options.bus;
    this.disableDeepLink = options.disableDeepLink;
    this.isMini = options.isMini || false;
    this.router = options.router;
    this.template = Handlebars.templates.pstTemplate;
    this.miniTemplate = Handlebars.templates.miniTemplate;
    this.loadingTemplate = Handlebars.templates.loadingTemplate;
    this.listTemplate = Handlebars.templates.listTemplate;
    this.filterView = this.resultView = this.stickyColView = this.stickyPointView = this.modalView = this.headerView = this.resizeView = undefined;

    this.listenTo(this.model, 'bootstrap', _.bind(this.render, this));
    this.listenTo(this.model, 'noProductFound', _.bind(this.renderEmpty, this));
    this.listenTo(this.model, 'productList', _.bind(this.renderList, this));
    this.listenTo(this.model, 'modelError', _.bind(this.renderError, this));
    this.listenTo(this.model, 'loading', _.bind(this.renderLoading, this));
  },
  renderLoading: function() {
    this.$el.html(this.loadingTemplate({}));
  },
  renderEmpty: function(){
    this.$el.html('');
    this.$el.append('<div class=\'columns twelve u-text-center\'><span>' + window.ptVar.ptOkWithNoProductsMessage + '</span></div>');
  },
  renderError: function(){
    this.$el.html('');
    this.$el.append('<div class=\'columns twelve u-text-center\'><span>' + window.ptVar.ptNotFoundStatusMessage + '</span></div>');
  },
  renderList: function(data){
    var key = this.getParameterByName('key');
    var url = '/search?mode=2&key=&des='+ key +'&exact=&any=&none=&pageNumber=1&pageSize=10';

    list = data.reduce(function(result, product, index, orig){
      if (orig.length / 2 > index ) {
        result.first.push(product);
      } else {
        result.second.push(product);
      }
      return result;
    }, {first: [], second: []});
    this.$el.html(this.listTemplate({list: list, url: url}));
  },
  render: function(data) {
    this.$el.html('');
    var self = this;
    Object.keys(data.dataTables).map(function(id) {
      var vm = {};
      vm.name = data.dataTables[id].headers.Name;
      vm.length = data.dataTables[id].rows.length;

      if (self.isMini) {
        self.$el.append(self.miniTemplate({
          meta: vm,
          data: data.dataTables[id],
          id: id,
          ptVar: window.ptVar
        }));
        return;
      }

      self.$el.append(self.template({
        data: vm,
        id: id
      }));
      //renderFiltersAndResults(id);
      self.filterView = new window.filterView({
        parentContainerClass: self.parentContainerClass,
        model: self.model,
        bus: self.bus,
        el: self.parentContainerClass + ' #filters_' + id,
        id: id,
        router: self.router
      });
      self.resultView = new window.resultView({
        parentContainerClass: self.parentContainerClass,
        model: self.model,
        bus: self.bus,
        el: self.parentContainerClass + ' #results_' + id,
        id: id
      });
      self.stickyColView = new window.stickyColView({
        parentContainerClass: self.parentContainerClass,
        model: self.model,
        bus: self.bus,
        el: self.parentContainerClass + ' #sticky_col_' + id,
        id: id
      });
      self.stickyPointView = new window.stickyPointView({
        parentContainerClass: self.parentContainerClass,
        model: self.model,
        bus: self.bus,
        el: self.parentContainerClass + ' #sticky_point_' + id,
        id: id
      });
      self.modalView = new window.modalView({
        parentContainerClass: self.parentContainerClass,
        model: self.model,
        bus: self.bus,
        el: self.parentContainerClass + ' #modal_' + id,
        id: id
      });
      self.headerView = new window.headerView({
        parentContainerClass: self.parentContainerClass,
        model: self.model,
        bus: self.bus,
        el: self.parentContainerClass + ' #header_' + id,
        id: id,
        disableLinks: self.disableLinks,
        disableDeepLink: self.disableLinks
      });
      self.resizeView = new window.resizeTrigger({
        parentContainerClass: self.parentContainerClass,
        model: self.model,
        bus: self.bus,
        id: id
      }); //this must come last always
    });
  },
  getParameterByName: function(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return '';
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
  }
});

window.resizeTrigger = Backbone.View.extend({

  events: {
    'click .pst-header-toggle': 'toggleHeader'
  },
  initialize: function(options) {
    this.parentContainerClass = options.parentContainerClass;
    this.model = options.model;
    this.id = options.id;
    this.listenTo(options.model, 'render_' + this.id, _.bind(this.render, this));
    this.listenTo(options.model, 'render', _.bind(this.render, this));
    this.pst = $(self.parentContainerClass + ' #pst_' + this.id);
  },
  render: function() {
    this.resize();
  },
  resize: function() {
    var self = this;
    // Get all sticky header th
    var stickyHeaderCols = $(self.parentContainerClass + ' #filters_' + this.id).find('th');
    var stickyHeaderColsDimensions = stickyHeaderCols.map(function(index, ele) {
      return {
        index: index,
        height: ele.clientHeight,
        width: ele.clientWidth
      };
    });

    // Get all stickycol td
    var stickyColRows = $(self.parentContainerClass + ' #sticky_col_' + this.id).find('tr');
    var stickyColRowsDimensions = stickyColRows.map(function(index, ele) {
      return {
        index: index,
        height: ele.clientHeight,
        width: ele.clientWidth
      };
    });


    // get the td's from the first row of results
    // resize the result columns basd on the filter col width
    // or reize the
    var resultCols = $(self.parentContainerClass + ' #results_' + this.id + ' > tr:first > td');
    resultCols.map(function(index, ele) {
      var stickyHeaderColDimensionWidth = stickyHeaderColsDimensions[index].width;
      var width = stickyHeaderColDimensionWidth > ele.clientWidth ? stickyHeaderColDimensionWidth : ele.clientWidth;
      $(ele).children('div').css('width', width + 'px');
      $(stickyHeaderCols.eq(index)).children('div').css('width', (width) + 'px');
      stickyHeaderColsDimensions[index].width = width;
    });

    //resize the sticky col width to the sticky header
    var adjust = 0
    if(stickyColRowsDimensions.length > 0) {
      var stickyWidth = stickyColRowsDimensions[0].width > stickyHeaderColsDimensions[0].width ? stickyColRowsDimensions[0].width : stickyHeaderColsDimensions[0].width + adjust;
      if (stickyColRowsDimensions[0].width < stickyHeaderColsDimensions[0].width) {
        stickyColRows.map(function(index, ele) {
          var $ele = $(ele);
          $ele.find('.pst-cell-td').css('width', stickyWidth + 'px');
          $ele.css('width', stickyWidth + 'px');
          stickyColRowsDimensions[index].width = stickyWidth;
        });
      }
    }

    // resize results rows height to match the sticky col height
    // or resize the sticky col height to match the result row
    var resultRows = $(self.parentContainerClass + ' #results_' + this.id + ' > tr');
    var isIE11 = !!window.MSInputMethodContext && !!document.documentMode; 
    if(isIE11 || window.navigator.userAgent.indexOf('MSIE ') != -1 || window.navigator.userAgent.indexOf('/Trident') != -1){
      resultRows.map(function(index, ele) {
        var newHeight = stickyColRowsDimensions[index].height;//ele.offsetHeight; 
        var eleHeight = ele.offsetHeight;
        if(newHeight == eleHeight){
          $(ele).css('height', (eleHeight) + 'px');
          $(stickyColRows.eq(index)).css('height', eleHeight + 'px');
          stickyColRowsDimensions[index].height = eleHeight;
        }else{
          if (stickyColRowsDimensions[index].height > ele.offsetHeight) {
            $(ele).css('height', (stickyColRowsDimensions[index].height) + 'px');
          } else if (stickyColRowsDimensions[index].height < ele.offsetHeight) {
            $(stickyColRows.eq(index)).css('height', ele.offsetHeight + 'px');
            stickyColRowsDimensions[index].height = ele.offsetHeight;
          }
        }
      });
    }else{
      resultRows.map(function(index, ele) {        
        if (stickyColRowsDimensions[index].height > ele.clientHeight) {
          $(ele).css('height', (stickyColRowsDimensions[index].height) + 'px');
        } else if (stickyColRowsDimensions[index].height < ele.clientHeight) {
          $(stickyColRows.eq(index)).css('height', ele.clientHeight + 'px');
          stickyColRowsDimensions[index].height = ele.clientHeight;
        }  
      });
    }

    // resize pst-sticky-point
    var stickyPoint = $(self.parentContainerClass + ' #sticky_point_' + this.id + ' a.pst-col-header');
    var stickyPointWidth = stickyPoint[0].clientWidth;

    if (stickyPointWidth < stickyHeaderColsDimensions[0].width) {
      var adjust = 0;
      stickyPoint.css('width', stickyHeaderColsDimensions[0].width + adjust);

      var firstFilterCells = $(self.parentContainerClass + ' #filters_' + this.id + ' > tr:first > th > div');
      $(firstFilterCells[0]).css('width', stickyColRowsDimensions[0].width + adjust);

      var resultCols = $(self.parentContainerClass + ' #results_' + this.id + ' > tr:first > td');

      firstFilterCells.map(function(index, ele) {
        if (index == 0) {
          return;
        }
        $(ele).css('width', resultCols[index].clientWidth);
      });

    }

    // resize header width to match table width
    var header = $(self.parentContainerClass + ' #header_' + this.id);
    var filters = $(self.parentContainerClass + ' #filters_' + this.id)[0];
    if (filters.clientWidth != 0) {
      header.css('width', (filters.clientWidth + 1) + 'px');
    } else {
      header.css('width', '');
    }

    $(window).scroll();

    var count = $('.parametric-container .pst').length - 1;
    var last_table = $('.parametric-container .pst').eq(count);
    var last_table_id = 'pst_' + this.id;

    if ($(last_table).attr('id') == last_table_id) {
      this.scrollToTable();
    }
    
  },
  scrollToTable: function(){   
    var urlString = window.location.href;
    if (urlString.indexOf('products') != -1 || urlString.indexOf('parametric-search') != -1){
      if ($('.parametric-container').length > 0) {
        var urlPage = urlString.split('#');      
        if (urlPage.length > 1){
          if (urlPage[urlPage.length - 1] !== 'reset' && urlPage[urlPage.length - 1].length > 0){
            var params = urlPage[urlPage.length - 1].split(';');
            /*
            var tblHeaderId = '#header_' + params[0];
            var rect = $(tblHeaderId)[0].getBoundingClientRect();
            $('html, body').animate({ scrollTop: rect.top - 85 }, 'fast');
            */
            delayedProductTableScrollToId = '#pst_' + params[0];
          }
        }
      }
    }
  }
});
// Result View
window.resultView = Backbone.View.extend({
  initialize: function(options) {
    this.rendered = false;
    this.model = options.model;
    this.id = options.id;
    this.listenTo(options.model, 'render_' + this.id, _.bind(this.render, this));
    this.listenTo(options.model, 'render', _.bind(this.render, this));
  },
  template: Handlebars.templates.resultsTemplate,
  render: function() {
    var data = this.model.toJSON();
    var rows = data.dataTables[this.id].rows;
    var map = data.dataTables[this.id].indexToAttributeMap;
    var mapAlt = data.dataTables[this.id].attributeToIndexMap;
    var visibles = data.parametricParams[this.id].visibles;
    var sort = data.parametricParams[this.id].sort;
    var results = [];

    rows.forEach(function(row) {
      if (!row.matchingFilter) {
        return;
      }

      row.ProductAttributeValuesWithVisibility = row.ProductAttributeIndexes.map(function(val, index) {
        var visible = visibles.indexOf(map[index]) > -1;
        return {
          value: val,
          visible: visible,
          text: row.ProductAttributeValues[index]
        };
      });
      results.push(row);
    });

    if (Object.keys(sort).length > 0) {
      var sortField = Object.keys(sort)[0];
      var sortIndex = mapAlt[sortField];
      var sortOrder = sort[sortField];

      // sortResults
      results = results.sort(function(a, b) {
        var aValue = a.PartNumber;
        var bValue = b.PartNumber;
        if (sortIndex != undefined) {
          aValue = a.ProductAttributeIndexes[sortIndex];
          bValue = b.ProductAttributeIndexes[sortIndex];
        } else if (sortField === 'description') {
          aValue = a.Description;
          bValue = b.Description;
        } else if (sortField === 'PartNumber') {
          aValue = a.PartNumber;
          bValue = b.PartNumber;
        }
        var retVal = 0;

        if (aValue > bValue) {
          retVal = -1;
        } else if (aValue < bValue) {
          retVal = 1;
        } else if (aValue == bValue) {
          retVal = 0;
        }

        if (sortOrder === 'desc') {
          retVal = retVal * -1;
        }

        return retVal;
      });
    }

    this.$el.html(this.template({
      results: results
    }));
  }
});

window.router = Backbone.Router.extend({
  initialize: function(options) {
    this.model = options.model;
    this.bus = options.bus;
    this.isBlock = options.isBlock;

    window.viewModels = {};
    this.tableState = {};
    this.previousTableState = {};
    this.disableDeepLink = options.disableDeepLink || false;
  },
  // Routes supported by the frontend application
  routes: {
    '': 'search',
    '/reset': 'search',
    '*param': 'search'
  },
  parseRouteParams: function(params) {
    // empty params gets an empty object
    if (params === undefined || params === "reset") {
      return {};
    }
    // if params has a trailing slash trim it off
    params = params.replace(/\/$/gm, '');
    var tableParams = params.splitPlus('/');

    // for each set of table params execute the following
    return tableParams.reduce(function(retVal, table) {
      var tableValues = table.splitPlus(';');

      var tableID = tableValues[0];
      retVal[tableID] = {};

      if(tableValues.length > 1){

        // get list of visible fields
        retVal[tableID].visibles = Object.keys(
            tableValues[1]
            .splitPlus(',')
            .reduce(
              function(retVal, visible) {
                retVal[visible] = true;
                return retVal;
              }, {})
        );
         
        // get list of filters and return object with string:[] pairs
        var filters = tableValues[2].splitPlus(',');
        retVal[tableID].filters = filters.reduce(function(filters, filter) {
          var filterName = filter.splitPlus(':')[0];
          var filterValue = filter.splitPlus(':')[1];

          filters[filterName] = filters[filterName] || [];
          filters[filterName].push(parseInt(filterValue, 10));

          return filters;
        }, {});

        // get single sort param
        var sortParams = tableValues[3].splitPlus(':');
        retVal[tableID].sort = {};
        if (sortParams[1]) {
          retVal[tableID].sort[sortParams[0]] = sortParams[1];
        }
      }
      return retVal;
      
    }, {});
  },
  fillParametricParams: function(dataTable) {
    var self = this;
    Object.keys(dataTable).map(function(tableID) {
      var data = dataTable[tableID];
      var tableVisibles = data.headers.Attributes.reduce(function(retVal, attrObj) {
        if (attrObj.DisplayInTables === 1) {
          retVal.push(attrObj.UUID);
        }
        return retVal;
      }, []);

      self.parametricParams[tableID] = self.parametricParams[tableID] || {
        usingDefaultVisibles: false,
        visibles: [],
        filters: {},
        sort: {}
      };

      var availableAttributeIDs = Object.keys(data.attributeToIndexMap);
      self.parametricParams[tableID].filters = Object.keys(self.parametricParams[tableID].filters).reduce(function(result, key){
        if (availableAttributeIDs.indexOf(key) > -1) {
          result[key] = self.parametricParams[tableID].filters[key];
        }
        return result;
      }, {});

      self.parametricParams[tableID].visibles = self.parametricParams[tableID].visibles.reduce(function(result, key){
        if (availableAttributeIDs.indexOf(key) > -1) {
          result.push(key);
        }
        return result;
      }, []);

      if (self.parametricParams[tableID].visibles.length === 0) {
        self.parametricParams[tableID].visibles = tableVisibles;
        self.parametricParams[tableID].usingDefaultVisibles = true;
      }
    });
    return self.parametricParams;
  },
  search: function(params) {
    var self = this;

    if (self.model.get('dataTables') === undefined && !this.isBlock) {
      return;
    }

    // URL to look like this
    // /#/search/tableID:visible;filtername:filtervalue,filtername:filtervalue/tableID:...
    // OLD URL /DS-K-00000012:rf,if,lo,gain,output ip3,nf,output p1db,lo power,voltage,current,package,rohs,lead free,halogen free;voltage:3.5,current:150|current:desc/DS-A-00000005:frequency,power,gain,nf,pae,voltage,iq;halogen free:yes
    // NEW URL: /#search/DS-K-00000012;rf,if,lo,gain,output ip3,nf,output p1db,lo power,voltage,current,package,rohs;;/

    this.parametricParams = {};

    // Moved functionality from router to this section of code
    // We're breaking up parameters for each individual table here
    // Formated like...
    // /#/search/tableID;visiblearray;filtername:filtervalue,filtername;filtervalue/tableID:..
    if (params && !this.disableDeepLink) {
      self.previousTableState = JSON.parse(JSON.stringify(self.tableState));
      self.parametricParams = this.parseRouteParams(params);
    } else if (this.disableDeepLink && window.routerParams) {
      self.previousTableState = JSON.parse(JSON.stringify(self.tableState));
      self.parametricParams = this.parseRouteParams(window.routerParams);
    }

    if (self.model.get('dataTables') === undefined) {
      self.model.trigger('loading');
      self.model.fetch({error: function(model, data, xhr){
        if (xhr.status >= 400) {
          self.model.trigger('modelError');
        }
      }});

      this.listenToOnce(self.model, 'change', function() {
        var dataTables = self.model.get('dataTables');
        this.fillParametricParams(dataTables);
        var updatedTables = Object.keys(dataTables).reduce(function(retVal, tableID) {
          if (self.previousTableState[tableID] === undefined) {
            retVal[tableID] = true;
          } else if (!_.isEqual(self.previousTableState[tableID], self.tableState[tableID])) {
            retVal[tableID] = true;
          } else if (self.previousTableState === {} && self.tableState === {}) {
            retVal[tableID] = true;
          }
          return retVal;
        }, {});
        updatedTables = Object.keys(updatedTables);
        self.model.updateFilters(this.parametricParams);
        self.model.filterTables();
        updatedTables.map(function(tableID) {
          self.model.trigger('render_' + tableID);
        });
        if (updatedTables.length === 0) {
          self.model.trigger('render');
        }
      });
    } else {
      var dataTables = self.model.get('dataTables');
      this.fillParametricParams(dataTables);
      self.tableState = JSON.parse(JSON.stringify(self.parametricParams));
      var updatedTables = Object.keys(dataTables).reduce(function(retVal, tableID) {
        if (self.previousTableState[tableID] === undefined) {
          retVal[tableID] = true;
        } else if (!_.isEqual(self.previousTableState[tableID], self.tableState[tableID])) {
          retVal[tableID] = true;
        }
        return retVal;
      }, {});
      updatedTables = Object.keys(updatedTables);
      self.model.updateFilters(this.parametricParams);
      self.model.filterTables();
      updatedTables.map(function(tableID) {
        self.model.trigger('render_' + tableID);
      });

      if (updatedTables.length === 0) {
        self.model.trigger('render');
      }
    }
  }
});

// Filter View
window.scrollView = Backbone.View.extend({
  events: {
    'keydown': 'keyAction'
  },
  initialize: function(options) {
    var self = this;
    this.bus = options.bus;
    this.close = true;
    this.resizeTrigger;

    this.pstTableColStickyClass = 'pst-sticky-col';
    this.pstTableColStickySelector = '.' + this.pstTableColStickyClass;
    this.pstTableClass = 'pst-table';
    this.pstTableSelector = '.' + this.pstTableClass;
    this.$D = $(document);
    this.mouseEvents();

    $(window).on('resize', function(){
      clearTimeout(self.resizeTrigger);
      self.resizeTrigger = setTimeout(function(){
        self.bus.trigger('resize');
      }, 200);
    })
    var throttle = 5;
    if (navigator.appVersion.indexOf("MSIE 10") !== -1 || navigator.appVersion.indexOf("Trident/7") !== -1)
    {
        throttle = 15;
    }
    if (navigator.appVersion.indexOf("MSIE 9") !== -1)
    {
        throttle = 30;
    }
    $(window).on('scroll', $.throttle(throttle,
      function() {
        var scrollLeft = $(window).scrollLeft();
        var scrollTop = $(window).scrollTop();
        self.bus.trigger('scroll', scrollTop, scrollLeft);
      }));
    $(window).on('keyup', _.bind(this.keyAction, this));
  },
  keyAction: function(e) {
    var evtobj = window.event ? event : e;
    if (evtobj.keyCode == 75 && evtobj.ctrlKey) {
      this.bus.trigger('close', this.close);
      this.close = !this.close;
    }
  },
  mouseEvents: function() {
    // Hovering over sticky col also highlights the table row
    this.$D.on('mouseenter', '.pst ' + this.pstTableColStickySelector + ' tr', function() {
      var rowIndex = $(this).prevAll().length;
      var tableRowIndex = rowIndex + 1;
      var table = $(this).closest('.pst-box').find('.pst-table');

      table.find('tr:nth-child(' + tableRowIndex + ')').addClass('hover');
    });

    // Hovering over table row also highlights sticky col row
    this.$D.on('mouseenter', '.pst ' + this.pstTableSelector + ' tr', function() {
      var rowIndex = $(this).prevAll().length;
      var stickyRowIndex = rowIndex + 1;
      var stickyCol = $(this).closest('.pst-box').find('.pst-sticky-col');

      stickyCol.find('tr:nth-child(' + stickyRowIndex + ')').addClass('hover');
    });

    this.$D.on('mouseleave', '.pst ' + this.pstTableColStickySelector + ' tr', function() {
      var rowIndex = $(this).prevAll().length;
      var tableRowIndex = rowIndex + 1;
      var table = $(this).closest('.pst-box').find('.pst-table');

      table.find('tr:nth-child(' + tableRowIndex + ')').removeClass('hover');
    });

    this.$D.on('mouseleave', '.pst ' + this.pstTableSelector + ' tr', function() {
      var rowIndex = $(this).prevAll().length;
      var stickyRowIndex = rowIndex + 1;
      var stickyCol = $(this).closest('.pst-box').find('.pst-sticky-col');

      stickyCol.find('tr:nth-child(' + stickyRowIndex + ')').removeClass('hover');
    });
  },
  render: function() {}
});

window.stickyColView = Backbone.View.extend({

  events: {
    'click .pst-header-toggle': 'toggleHeader',
    'click .pst-compare-check': 'toggleCompare'
  },
  initialize: function(options) {
    this.parentContainerClass = options.parentContainerClass;
    this.compareCount = 0;
    this.sortDesc = true;
    this.model = options.model;
    this.id = options.id;
    this.listenTo(options.model, 'render_' + this.id, _.bind(this.render, this));
    this.listenTo(options.model, 'render', _.bind(this.render, this));
  },
  toggleCompare: function(ev) {
    //ev.preventDefault();
    if (ev.currentTarget.checked) {
      this.compareCount = this.compareCount + 1;
    } else {
      this.compareCount = this.compareCount - 1;
    }

    if (this.compareCount > 1) {
      $(this.parentContainerClass + ' #pst_' + this.id + ' .pst-trigger-compare').addClass('active');
    } else {
      $(this.parentContainerClass + ' #pst_' + this.id + ' .pst-trigger-compare').removeClass('active');
    }
  },
  render: function() {
    var data = this.model.toJSON();
    var sort = data.parametricParams[this.id].sort;
    var mapAlt = data.dataTables[this.id].attributeToIndexMap;
    // Render html
    var data = {
      rows: this.model.toJSON().dataTables[this.id].rows,
      ptVar: window.ptVar
    };
    data.rows = data.rows.filter(function(row) {
      return row.matchingFilter;
    });

    if (Object.keys(sort).length > 0) {
      var sortField = Object.keys(sort)[0];
      var sortIndex = mapAlt[sortField];
      var sortOrder = sort[sortField];

      // sortResults
      data.rows = data.rows.sort(function(a, b) {
        var aValue = a.PartNumber;
        var bValue = b.PartNumber;
        if (sortIndex != undefined) {
          aValue = a.ProductAttributeIndexes[sortIndex];
          bValue = b.ProductAttributeIndexes[sortIndex];
        } else if (sortField === 'description') {
          aValue = a.Description;
          bValue = b.Description;
        } else if (sortField === 'PartNumber') {
          aValue = a.PartNumber;
          bValue = b.PartNumber;
        }
        var retVal = 0;

        if (aValue > bValue) {
          retVal = -1;
        } else if (aValue < bValue) {
          retVal = 1;
        } else if (aValue == bValue) {
          retVal = 0;
        }

        if (sortOrder === 'desc') {
          retVal = retVal * -1;
        }

        return retVal;
      });
    }
    var html = Handlebars.templates.stickyColRow(data);
    this.$el.html(html);
  }
});

window.stickyPointView = Backbone.View.extend({

  events: {
    'click .pst-col-header': 'sortByName',
    'click .pst-trigger-compare': 'compareRows',
    'click .pst-trigger-filters': 'toggleFilters',
    'click .pst-trigger-parameters': 'toggleParameters'
  },
  initialize: function(options) {
    this.parentContainerClass = options.parentContainerClass;
    this.sortDesc = true;
    this.model = options.model;
    this.bus = options.bus;
    this.id = options.id;
    this.listenTo(options.model, 'render_' + this.id, _.bind(this.render, this));
    this.listenTo(options.model, 'render', _.bind(this.render, this));
  },
  sortByName: function(ev) {
    ev.preventDefault();
    this.bus.trigger('sortByName_' + this.id, ev);
  },
  toggleFilters: function() {
    $(this.parentContainerClass + ' #pst_' + this.id).toggleClass('pst-filters-open');
  },
  toggleParameters: function() {
    this.model.trigger('openModal_' + this.id);
  },
  compareRows: function(ev) {
    ev.preventDefault();
    var ids = [];
    $(this.parentContainerClass + ' #pst_' + this.id + ' .pst-compare-check:checked').each(function(index, el) {
      ids.push($(el).data('checkbox-id'));
    });
    if (ids.length > 0) {
      window.open('/compare-product/?partNumbers=' + ids.join(','));
    }
  },
  render: function() {
    var json = this.model.toJSON();
    // Render html
    var data = {
      rows: json.dataTables[this.id].rows,
      numTotalResults: json.dataTables[this.id].rows.length,
      ptVar: window.ptVar
    };
    data.rows = data.rows.filter(function(row) {
      return row.matchingFilter;
    });
    data.numResults = data.rows.length;
    var html = Handlebars.templates.stickyPoint(data);
    this.$el.html(html);
  }
});

String.prototype.splitPlus = function(sep) {
  var a = this.split(sep);
  if (a[0] == '' && a.length == 1) return [];
  return a;
};

Handlebars.registerHelper('ifCanDisplay', function(collection, index, attribute, options) {
  if (collection[index][attribute] === 1) {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
});

// Fixing colision with history.js and backbone.
// history.js will fire essentially a noop if the pst table is enabled on the page
var historyEvents = [].concat(
  $._data($(window)[0], 'events')['popstate'],
  $._data($(window)[0], 'events')['hashchange']
).filter(function(evnt) {
  if (evnt === undefined) {
    return false;
  }
  return true;
});

if (historyEvents.length > 0) {
  historyEvents.map(function(event) {
    event.oldHandler = event.handler;
    event.handler = function() {
      if ($('.parametric-container').length === 0) {
        event.oldHandler.apply(event, arguments);
      }
    };
  });
}

if(navigator.userAgent.match(/Trident\/7\./) || navigator.userAgent.match(/Edge\/12\./)) {
    $(window).on("mousewheel", function () {
        event.preventDefault();
        var wd = event.wheelDelta;
        var csp = window.pageYOffset;
        window.scrollTo(0, csp - wd);
    });
}

$(document).ready(function() {
  $('.parametric-container').each(function(index, ele) {
    var params = {};
    var $ele = $(ele);

    var globalEventBus = _.extend(Backbone.Events);

    params.disableDeepLink = $ele.data('deeplink-disabled');
    params.category_id = $ele.data('categoryid');
    params.category_id = params.category_id === undefined ? '' : params.category_id;
    params.method = $ele.data('method');
    params.resultType = $ele.data('result-type');
    params.blockDiagramId = $ele.data('blockdiagram-id');
    params.hostSpotId = $ele.data('hotspot-id');
    params.type = $ele.data('table-type');
    params.language = $ele.data('language');
    params.scope = $ele.data('scope');
    params.discontinued = $ele.data('discontinued');
    params.container = $ele;
    params.bus = globalEventBus;


    var pageModel = new window.pageModel(null, params);

    var router = new window.router({
      disableDeepLink: params.disableDeepLink,
      model: pageModel,
      bus: globalEventBus,
      isBlock: true
    });

    var pstView = new window.pstView({
      el: ele,
      model: pageModel,
      bus: globalEventBus,
      router: router,
      disableDeepLink: params.disableDeepLink,
      parentContainerClass: '.parametric-container',
      isMini: window.isIE8
    });

    $ele.data('pstView', pstView);

    if (typeof(window.jsPayload) !== 'undefined') {
      var pageModelData = pageModel.parse(window.jsPayload);
      pageModel.set(pageModelData, {
        silent: true
      });
    }

    Backbone.history.start({
      pushState: false
    });

    new window.scrollView({
      bus: globalEventBus,
      el: $ele
    });
  });

  $('.block-content').click(function (ele) {

    /* If mapster-override is set, take user to desired HREF instead of performing the usual Mapster block diagram functionality */
    if ($(this).hasClass('mapster-override')) {
        console.log("mapster-override is set (handler #1)");
        console.log("href is |" + $(this).attr('href') + "|");
        document.location = $(this).attr('href');
        return true;
    }

    var $ele = $(ele.currentTarget);
    var hotSpotId = $ele.attr('data-hotspot-id');

    var globalEventBus = _.extend(Backbone.Events);

    var params = {};
    params.blockDiagramId = '';
    params.hotSpotId = hotSpotId;
    params.method = 'GetGroupedProductsForHotSpot';
    params.scope = 'SingleHotSpot';
    params.resultType = 'both';

    var pageModel = new window.pageModel(null, params);
    var router = new window.router({
      disableDeepLink: true,
      model: pageModel,
      bus: globalEventBus,
      isBlock: true
    });
    var container = $(ele.currentTarget).parents('.block-diagram').find('.hotspot-parametric-container');
    var pstView = new window.pstView({
      el: container,
      model: pageModel,
      bus: globalEventBus,
      router: router,
      disableDeepLink: true,
      parentContainerClass: '.hotspot-parametric-container',
      isMini: window.isIE8
    });
    $(container).data('pstView', pstView);

    if (!Backbone.History.started) {
      Backbone.history.start();
    } else {
      router.search();
    }

    new window.scrollView({
      bus: globalEventBus,
      el: $ele
    });
  });
});

window.loadParametricTable = function(data, container, isMini) {
  isMini = isMini || true;
  if (isMini && !(window.location.toString().indexOf('mode=1') > -1)) {
    isMini = false;
  }

  var $ele = $('.search-parametric-container');
  var globalEventBus = _.extend(Backbone.Events);
  var pageModel = new window.pageModel(null, {});
  var router = new window.router({
    disableDeepLink: true,
    model: pageModel,
    bus: globalEventBus
  });
  var pstView = new window.pstView({
    el: $ele,
    model: pageModel,
    bus: globalEventBus,
    router: router,
    disableDeepLink: true,
    disableLinks: true,
    isMini: isMini || window.isIE8,
    parentContainerClass: '.search-parametric-container'
  });
  $ele.data('pstView', pstView);


  var pageModelData = pageModel.parse(data);
  pageModel.set(pageModelData, {
    silent: true
  });

  if (!Backbone.History.started) {
    Backbone.history.start();
  } else {
    router.search();
  }

  new window.scrollView({
    bus: globalEventBus,
    el: $ele
  });
};

(function() {
  'use strict';

   var biosContentHeight = function() {
    $('.bios .read-more-content').each(function() {
      if ( $(this).outerHeight() < 250 ) {
        $('.bios .read-more, .bios .read-less').hide();
      } else {
        $(this).children('p').slice(1).addClass('hidden-area');
        $('.bios .read-more').show();
      }
    });
  }

  var expandCollapse = function() {
    var $readMoreBtn = $('.bios .read-more-container .read-more'),
      $readLessBtn = $('.bios .read-more-container .read-less'),
      $expandAll = $('.bios .expand-all'),
      $collapseAll = $('.bios .collapse-all'),
      $hidden = $('.bios .read-more-container .hidden-area');

      $($expandAll).click(function() {
        $hidden.show();
        $(this).hide();
        $collapseAll.show();
        $readMoreBtn.hide();
        $readLessBtn.show();
      });

      $($collapseAll).click(function() {
        $hidden.hide();
        $(this).hide();
        $expandAll.show();
        $readMoreBtn.show();
        $readLessBtn.hide();
      });
  };

  $(document).ready(biosContentHeight);
  $(document).ready(expandCollapse); 
})(jQuery);

(function() {
  'use strict';
  // var $blockDiagramImage = $('.block-diagram-container');
  // var $blockDiagramCarousel = $('.block-diagram-carousel');  

  var $blockDiagramImage;
  var $blockDiagramCarousel;
  if (typeof resizableImageOuterContainerClass === 'undefined') {
    $blockDiagramImage = $('.block-diagram-container');
  } else {
	$blockDiagramImage = $('.' + resizableImageOuterContainerClass);
  }
  if (typeof resizableImageInnerContainerClass === 'undefined') {
    $blockDiagramCarousel = $('.block-diagram-carousel');
  } else {
	$blockDiagramCarousel = $('.' + resizableImageInnerContainerClass);
  }

  function setupHotspots() {
    var config = {
      staticState: true,
      stroke: true,
      strokeWidth: 2,
      highlight:true,
      mapKey: 'data-mapster-key',

      //initial stroke color
      strokeColor: '000000',
      //initial fill color
      fillColor:'1aa3de',
      //initial fill opacity
      fillOpacity: 0,

      render_highlight: {
        fillOpacity: 0.1,
        strokeWidth: 3,
        strokeColor:'77BC1F'
      },

      render_select: {
        // fillOpacity: 0.2,
      },
      areas: areasConfig(),
      onStateChange: function () {

      }
    };

    function areasConfig() {
      var config = [],
          areas = $('area.block-content');

      areas.each(function (index, el) {
        var key = $(el).data('mapster-key');

        if (key) {
          var areaConfig = {
            key: key,
            dash: true,
            dashStyle: key.replace(/[0-9]*/g, '')
          };
          config.push(areaConfig);
        }
      });

      return config;
    }

    var mapped = $('.blocked-diagram').mapster(config);
  }

  function resize(maxWidth,maxHeight) {
	// console.log("+++ resize()");

	var maxDesktopWidth = '';
	if (typeof maxResizableImageWidthInDesktopMode === 'undefined') {
		maxDesktopWidth = '700';
	} else {
		maxDesktopWidth = maxResizableImageWidthInDesktopMode;
	}
	// console.log("maxDesktopWidth = " + maxDesktopWidth);

    var image =   $('.block-diagram img'),
      imgWidth = image.width(),
      imgHeight = image.height(),
      newWidth=0,
      newHeight=0;

    if (imgWidth/maxWidth>imgHeight/maxHeight) {
        newWidth = maxWidth;
    } else {
        newWidth = maxWidth;
    }
    if (newWidth <= maxDesktopWidth) { // keep image from growing larger than 700 on desktop
      image.mapster('resize',newWidth,newHeight,0);
    }
  }

  function onWindowResize() {
    var resizeTime = 0;     // total duration of the resize effect, 0 is instant
    var resizeDelay = 0;

    var curWidth = $blockDiagramCarousel.width(),
      curHeight = $blockDiagramCarousel.height(),
      checking=false;
    if (checking) {
      return;
        }
    checking = true;
    window.setTimeout(function() {
      var newWidth = $blockDiagramCarousel.width(),
          newHeight = $blockDiagramCarousel.height();

      if (newWidth === curWidth &&
          newHeight === curHeight) {
          resize(newWidth,newHeight);
      }
      checking=false;
    },resizeDelay );
  }

  function hotSpotClicked() {
    $('area.block-content').on('click', function (event) {
      /* If mapster-override is set, return without performing the usual Mapster block diagram functionality */
      if ($(this).hasClass('mapster-override')) {
          console.log("mapster-override is set (handler #2)");
          return true;
      }
      event.preventDefault();
      var $tableProductResults = $(this).parent().next('.parts-table-target');
      var test = $tableProductResults.offset()
      $('html, body').animate({
        scrollTop: $tableProductResults.offset().top
      });
      $('.parts-table-target h2').css('display',"inline-block");
    });

    $('.back-to-block-diagrams').click(function (event) {
      event.preventDefault();
      if ($('.recently-visited-ribbon').is(':visible')) {
        $('html, body').animate({
          scrollTop: $blockDiagramImage.offset().top - 193
        });
      } else {
        $('html, body').animate({
          scrollTop: $blockDiagramImage.offset().top - 78
        });
      }
    });
  }

  $(document).ready(function() {
    if ($blockDiagramCarousel.length) {
      $(window).bind('resize',onWindowResize);
     
      setTimeout(function(){ // need to delay since tabs are hidden the images
       $(window).trigger('resize');
      }, 500);
    }

    setupHotspots();
    hotSpotClicked();
    
  });
})();

/* ImageMapster
   Version: 1.2.14-beta1 (6/18/2013)

Copyright 2011-2012 James Treworgy

http://www.outsharked.com/imagemapster
https://github.com/jamietre/ImageMapster

A jQuery plugin to enhance image maps.

*/

;

/// LICENSE (MIT License)
///
/// Permission is hereby granted, free of charge, to any person obtaining
/// a copy of this software and associated documentation files (the
/// "Software"), to deal in the Software without restriction, including
/// without limitation the rights to use, copy, modify, merge, publish,
/// distribute, sublicense, and/or sell copies of the Software, and to
/// permit persons to whom the Software is furnished to do so, subject to
/// the following conditions:
///
/// The above copyright notice and this permission notice shall be
/// included in all copies or substantial portions of the Software.
///
/// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
/// EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
/// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
/// NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
/// LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
/// OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
/// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
///
/// January 19, 2011

/** @license MIT License (c) copyright B Cavalier & J Hann */

/**
* when
* A lightweight CommonJS Promises/A and when() implementation
*
* when is part of the cujo.js family of libraries (http://cujojs.com/)
*
* Licensed under the MIT License at:
* http://www.opensource.org/licenses/mit-license.php
*
* @version 1.2.0
*/

/*lint-ignore-start*/

(function (define) {
    define(function () {
        var freeze, reduceArray, slice, undef;

        //
        // Public API
        //

        when.defer = defer;
        when.reject = reject;
        when.isPromise = isPromise;

        when.all = all;
        when.some = some;
        when.any = any;

        when.map = map;
        when.reduce = reduce;

        when.chain = chain;

        /** Object.freeze */
        freeze = Object.freeze || function (o) { return o; };

        /**
        * Trusted Promise constructor.  A Promise created from this constructor is
        * a trusted when.js promise.  Any other duck-typed promise is considered
        * untrusted.
        *
        * @constructor
        */
        function Promise() { }

        Promise.prototype = freeze({
            always: function (alwaysback, progback) {
                return this.then(alwaysback, alwaysback, progback);
            },

            otherwise: function (errback) {
                return this.then(undef, errback);
            }
        });

        /**
        * Create an already-resolved promise for the supplied value
        * @private
        *
        * @param value anything
        * @return {Promise}
        */
        function resolved(value) {

            var p = new Promise();

            p.then = function (callback) {
                var nextValue;
                try {
                    if (callback) nextValue = callback(value);
                    return promise(nextValue === undef ? value : nextValue);
                } catch (e) {
                    return rejected(e);
                }
            };

            return freeze(p);
        }

        /**
        * Create an already-rejected {@link Promise} with the supplied
        * rejection reason.
        * @private
        *
        * @param reason rejection reason
        * @return {Promise}
        */
        function rejected(reason) {

            var p = new Promise();

            p.then = function (callback, errback) {
                var nextValue;
                try {
                    if (errback) {
                        nextValue = errback(reason);
                        return promise(nextValue === undef ? reason : nextValue)
                    }

                    return rejected(reason);

                } catch (e) {
                    return rejected(e);
                }
            };

            return freeze(p);
        }

        /**
        * Returns a rejected promise for the supplied promiseOrValue. If
        * promiseOrValue is a value, it will be the rejection value of the
        * returned promise.  If promiseOrValue is a promise, its
        * completion value will be the rejected value of the returned promise
        *
        * @param promiseOrValue {*} the rejected value of the returned {@link Promise}
        *
        * @return {Promise} rejected {@link Promise}
        */
        function reject(promiseOrValue) {
            return when(promiseOrValue, function (value) {
                return rejected(value);
            });
        }

        /**
        * Creates a new, CommonJS compliant, Deferred with fully isolated
        * resolver and promise parts, either or both of which may be given out
        * safely to consumers.
        * The Deferred itself has the full API: resolve, reject, progress, and
        * then. The resolver has resolve, reject, and progress.  The promise
        * only has then.
        *
        * @memberOf when
        * @function
        *
        * @returns {Deferred}
        */
        function defer() {
            var deferred, promise, listeners, progressHandlers, _then, _progress, complete;

            listeners = [];
            progressHandlers = [];

            /**
            * Pre-resolution then() that adds the supplied callback, errback, and progback
            * functions to the registered listeners
            *
            * @private
            *
            * @param [callback] {Function} resolution handler
            * @param [errback] {Function} rejection handler
            * @param [progback] {Function} progress handler
            *
            * @throws {Error} if any argument is not null, undefined, or a Function
            */
            _then = function unresolvedThen(callback, errback, progback) {
                var deferred = defer();

                listeners.push(function (promise) {
                    promise.then(callback, errback)
					.then(deferred.resolve, deferred.reject, deferred.progress);
                });

                progback && progressHandlers.push(progback);

                return deferred.promise;
            };

            /**
            * Registers a handler for this {@link Deferred}'s {@link Promise}.  Even though all arguments
            * are optional, each argument that *is* supplied must be null, undefined, or a Function.
            * Any other value will cause an Error to be thrown.
            *
            * @memberOf Promise
            *
            * @param [callback] {Function} resolution handler
            * @param [errback] {Function} rejection handler
            * @param [progback] {Function} progress handler
            *
            * @throws {Error} if any argument is not null, undefined, or a Function
            */
            function then(callback, errback, progback) {
                return _then(callback, errback, progback);
            }

            /**
            * Resolves this {@link Deferred}'s {@link Promise} with val as the
            * resolution value.
            *
            * @memberOf Resolver
            *
            * @param val anything
            */
            function resolve(val) {
                complete(resolved(val));
            }

            /**
            * Rejects this {@link Deferred}'s {@link Promise} with err as the
            * reason.
            *
            * @memberOf Resolver
            *
            * @param err anything
            */
            function reject(err) {
                complete(rejected(err));
            }

            /**
            * @private
            * @param update
            */
            _progress = function (update) {
                var progress, i = 0;
                while (progress = progressHandlers[i++]) progress(update);
            };

            /**
            * Emits a progress update to all progress observers registered with
            * this {@link Deferred}'s {@link Promise}
            *
            * @memberOf Resolver
            *
            * @param update anything
            */
            function progress(update) {
                _progress(update);
            }

            /**
            * Transition from pre-resolution state to post-resolution state, notifying
            * all listeners of the resolution or rejection
            *
            * @private
            *
            * @param completed {Promise} the completed value of this deferred
            */
            complete = function (completed) {
                var listener, i = 0;

                // Replace _then with one that directly notifies with the result.
                _then = completed.then;

                // Replace complete so that this Deferred can only be completed
                // once. Also Replace _progress, so that subsequent attempts to issue
                // progress throw.
                complete = _progress = function alreadyCompleted() {
                    // TODO: Consider silently returning here so that parties who
                    // have a reference to the resolver cannot tell that the promise
                    // has been resolved using try/catch
                    throw new Error("already completed");
                };

                // Free progressHandlers array since we'll never issue progress events
                // for this promise again now that it's completed
                progressHandlers = undef;

                // Notify listeners
                // Traverse all listeners registered directly with this Deferred

                while (listener = listeners[i++]) {
                    listener(completed);
                }

                listeners = [];
            };

            /**
            * The full Deferred object, with both {@link Promise} and {@link Resolver}
            * parts
            * @class Deferred
            * @name Deferred
            */
            deferred = {};

            // Promise and Resolver parts
            // Freeze Promise and Resolver APIs

            promise = new Promise();
            promise.then = deferred.then = then;

            /**
            * The {@link Promise} for this {@link Deferred}
            * @memberOf Deferred
            * @name promise
            * @type {Promise}
            */
            deferred.promise = freeze(promise);

            /**
            * The {@link Resolver} for this {@link Deferred}
            * @memberOf Deferred
            * @name resolver
            * @class Resolver
            */
            deferred.resolver = freeze({
                resolve: (deferred.resolve = resolve),
                reject: (deferred.reject = reject),
                progress: (deferred.progress = progress)
            });

            return deferred;
        }

        /**
        * Determines if promiseOrValue is a promise or not.  Uses the feature
        * test from http://wiki.commonjs.org/wiki/Promises/A to determine if
        * promiseOrValue is a promise.
        *
        * @param promiseOrValue anything
        *
        * @returns {Boolean} true if promiseOrValue is a {@link Promise}
        */
        function isPromise(promiseOrValue) {
            return promiseOrValue && typeof promiseOrValue.then === 'function';
        }

        /**
        * Register an observer for a promise or immediate value.
        *
        * @function
        * @name when
        * @namespace
        *
        * @param promiseOrValue anything
        * @param {Function} [callback] callback to be called when promiseOrValue is
        *   successfully resolved.  If promiseOrValue is an immediate value, callback
        *   will be invoked immediately.
        * @param {Function} [errback] callback to be called when promiseOrValue is
        *   rejected.
        * @param {Function} [progressHandler] callback to be called when progress updates
        *   are issued for promiseOrValue.
        *
        * @returns {Promise} a new {@link Promise} that will complete with the return
        *   value of callback or errback or the completion value of promiseOrValue if
        *   callback and/or errback is not supplied.
        */
        function when(promiseOrValue, callback, errback, progressHandler) {
            // Get a promise for the input promiseOrValue
            // See promise()
            var trustedPromise = promise(promiseOrValue);

            // Register promise handlers
            return trustedPromise.then(callback, errback, progressHandler);
        }

        /**
        * Returns promiseOrValue if promiseOrValue is a {@link Promise}, a new Promise if
        * promiseOrValue is a foreign promise, or a new, already-resolved {@link Promise}
        * whose resolution value is promiseOrValue if promiseOrValue is an immediate value.
        *
        * Note that this function is not safe to export since it will return its
        * input when promiseOrValue is a {@link Promise}
        *
        * @private
        *
        * @param promiseOrValue anything
        *
        * @returns Guaranteed to return a trusted Promise.  If promiseOrValue is a when.js {@link Promise}
        *   returns promiseOrValue, otherwise, returns a new, already-resolved, when.js {@link Promise}
        *   whose resolution value is:
        *   * the resolution value of promiseOrValue if it's a foreign promise, or
        *   * promiseOrValue if it's a value
        */
        function promise(promiseOrValue) {
            var promise, deferred;

            if (promiseOrValue instanceof Promise) {
                // It's a when.js promise, so we trust it
                promise = promiseOrValue;

            } else {
                // It's not a when.js promise.  Check to see if it's a foreign promise
                // or a value.

                deferred = defer();
                if (isPromise(promiseOrValue)) {
                    // It's a compliant promise, but we don't know where it came from,
                    // so we don't trust its implementation entirely.  Introduce a trusted
                    // middleman when.js promise

                    // IMPORTANT: This is the only place when.js should ever call .then() on
                    // an untrusted promise.
                    promiseOrValue.then(deferred.resolve, deferred.reject, deferred.progress);
                    promise = deferred.promise;

                } else {
                    // It's a value, not a promise.  Create an already-resolved promise
                    // for it.
                    deferred.resolve(promiseOrValue);
                    promise = deferred.promise;
                }
            }

            return promise;
        }

        /**
        * Return a promise that will resolve when howMany of the supplied promisesOrValues
        * have resolved. The resolution value of the returned promise will be an array of
        * length howMany containing the resolutions values of the triggering promisesOrValues.
        *
        * @memberOf when
        *
        * @param promisesOrValues {Array} array of anything, may contain a mix
        *      of {@link Promise}s and values
        * @param howMany
        * @param [callback]
        * @param [errback]
        * @param [progressHandler]
        *
        * @returns {Promise}
        */
        function some(promisesOrValues, howMany, callback, errback, progressHandler) {

            checkCallbacks(2, arguments);

            return when(promisesOrValues, function (promisesOrValues) {

                var toResolve, results, ret, deferred, resolver, rejecter, handleProgress, len, i;

                len = promisesOrValues.length >>> 0;

                toResolve = Math.max(0, Math.min(howMany, len));
                results = [];
                deferred = defer();
                ret = when(deferred, callback, errback, progressHandler);

                // Wrapper so that resolver can be replaced
                function resolve(val) {
                    resolver(val);
                }

                // Wrapper so that rejecter can be replaced
                function reject(err) {
                    rejecter(err);
                }

                // Wrapper so that progress can be replaced
                function progress(update) {
                    handleProgress(update);
                }

                function complete() {
                    resolver = rejecter = handleProgress = noop;
                }

                // No items in the input, resolve immediately
                if (!toResolve) {
                    deferred.resolve(results);

                } else {
                    // Resolver for promises.  Captures the value and resolves
                    // the returned promise when toResolve reaches zero.
                    // Overwrites resolver var with a noop once promise has
                    // be resolved to cover case where n < promises.length
                    resolver = function (val) {
                        // This orders the values based on promise resolution order
                        // Another strategy would be to use the original position of
                        // the corresponding promise.
                        results.push(val);

                        if (! --toResolve) {
                            complete();
                            deferred.resolve(results);
                        }
                    };

                    // Rejecter for promises.  Rejects returned promise
                    // immediately, and overwrites rejecter var with a noop
                    // once promise to cover case where n < promises.length.
                    // TODO: Consider rejecting only when N (or promises.length - N?)
                    // promises have been rejected instead of only one?
                    rejecter = function (err) {
                        complete();
                        deferred.reject(err);
                    };

                    handleProgress = deferred.progress;

                    // TODO: Replace while with forEach
                    for (i = 0; i < len; ++i) {
                        if (i in promisesOrValues) {
                            when(promisesOrValues[i], resolve, reject, progress);
                        }
                    }
                }

                return ret;
            });
        }

        /**
        * Return a promise that will resolve only once all the supplied promisesOrValues
        * have resolved. The resolution value of the returned promise will be an array
        * containing the resolution values of each of the promisesOrValues.
        *
        * @memberOf when
        *
        * @param promisesOrValues {Array|Promise} array of anything, may contain a mix
        *      of {@link Promise}s and values
        * @param [callback] {Function}
        * @param [errback] {Function}
        * @param [progressHandler] {Function}
        *
        * @returns {Promise}
        */
        function all(promisesOrValues, callback, errback, progressHandler) {

            checkCallbacks(1, arguments);

            return when(promisesOrValues, function (promisesOrValues) {
                return _reduce(promisesOrValues, reduceIntoArray, []);
            }).then(callback, errback, progressHandler);
        }

        function reduceIntoArray(current, val, i) {
            current[i] = val;
            return current;
        }

        /**
        * Return a promise that will resolve when any one of the supplied promisesOrValues
        * has resolved. The resolution value of the returned promise will be the resolution
        * value of the triggering promiseOrValue.
        *
        * @memberOf when
        *
        * @param promisesOrValues {Array|Promise} array of anything, may contain a mix
        *      of {@link Promise}s and values
        * @param [callback] {Function}
        * @param [errback] {Function}
        * @param [progressHandler] {Function}
        *
        * @returns {Promise}
        */
        function any(promisesOrValues, callback, errback, progressHandler) {

            function unwrapSingleResult(val) {
                return callback ? callback(val[0]) : val[0];
            }

            return some(promisesOrValues, 1, unwrapSingleResult, errback, progressHandler);
        }

        /**
        * Traditional map function, similar to `Array.prototype.map()`, but allows
        * input to contain {@link Promise}s and/or values, and mapFunc may return
        * either a value or a {@link Promise}
        *
        * @memberOf when
        *
        * @param promise {Array|Promise} array of anything, may contain a mix
        *      of {@link Promise}s and values
        * @param mapFunc {Function} mapping function mapFunc(value) which may return
        *      either a {@link Promise} or value
        *
        * @returns {Promise} a {@link Promise} that will resolve to an array containing
        *      the mapped output values.
        */
        function map(promise, mapFunc) {
            return when(promise, function (array) {
                return _map(array, mapFunc);
            });
        }

        /**
        * Private map helper to map an array of promises
        * @private
        *
        * @param promisesOrValues {Array}
        * @param mapFunc {Function}
        * @return {Promise}
        */
        function _map(promisesOrValues, mapFunc) {

            var results, len, i;

            // Since we know the resulting length, we can preallocate the results
            // array to avoid array expansions.
            len = promisesOrValues.length >>> 0;
            results = new Array(len);

            // Since mapFunc may be async, get all invocations of it into flight
            // asap, and then use reduce() to collect all the results
            for (i = 0; i < len; i++) {
                if (i in promisesOrValues)
                    results[i] = when(promisesOrValues[i], mapFunc);
            }

            // Could use all() here, but that would result in another array
            // being allocated, i.e. map() would end up allocating 2 arrays
            // of size len instead of just 1.  Since all() uses reduce()
            // anyway, avoid the additional allocation by calling reduce
            // directly.
            return _reduce(results, reduceIntoArray, results);
        }

        /**
        * Traditional reduce function, similar to `Array.prototype.reduce()`, but
        * input may contain {@link Promise}s and/or values, and reduceFunc
        * may return either a value or a {@link Promise}, *and* initialValue may
        * be a {@link Promise} for the starting value.
        *
        * @memberOf when
        *
        * @param promise {Array|Promise} array of anything, may contain a mix
        *      of {@link Promise}s and values.  May also be a {@link Promise} for
        *      an array.
        * @param reduceFunc {Function} reduce function reduce(currentValue, nextValue, index, total),
        *      where total is the total number of items being reduced, and will be the same
        *      in each call to reduceFunc.
        * @param initialValue starting value, or a {@link Promise} for the starting value
        *
        * @returns {Promise} that will resolve to the final reduced value
        */
        function reduce(promise, reduceFunc, initialValue) {
            var args = slice.call(arguments, 1);
            return when(promise, function (array) {
                return _reduce.apply(undef, [array].concat(args));
            });
        }

        /**
        * Private reduce to reduce an array of promises
        * @private
        *
        * @param promisesOrValues {Array}
        * @param reduceFunc {Function}
        * @param initialValue {*}
        * @return {Promise}
        */
        function _reduce(promisesOrValues, reduceFunc, initialValue) {

            var total, args;

            total = promisesOrValues.length;

            // Skip promisesOrValues, since it will be used as 'this' in the call
            // to the actual reduce engine below.

            // Wrap the supplied reduceFunc with one that handles promises and then
            // delegates to the supplied.

            args = [
			function (current, val, i) {
			    return when(current, function (c) {
			        return when(val, function (value) {
			            return reduceFunc(c, value, i, total);
			        });
			    });
			}
		];

            if (arguments.length > 2) args.push(initialValue);

            return reduceArray.apply(promisesOrValues, args);
        }

        /**
        * Ensure that resolution of promiseOrValue will complete resolver with the completion
        * value of promiseOrValue, or instead with resolveValue if it is provided.
        *
        * @memberOf when
        *
        * @param promiseOrValue
        * @param resolver {Resolver}
        * @param [resolveValue] anything
        *
        * @returns {Promise}
        */
        function chain(promiseOrValue, resolver, resolveValue) {
            var useResolveValue = arguments.length > 2;

            return when(promiseOrValue,
			function (val) {
			    if (useResolveValue) val = resolveValue;
			    resolver.resolve(val);
			    return val;
			},
			function (e) {
			    resolver.reject(e);
			    return rejected(e);
			},
			resolver.progress
		);
        }

        //
        // Utility functions
        //

        /**
        * Helper that checks arrayOfCallbacks to ensure that each element is either
        * a function, or null or undefined.
        *
        * @private
        *
        * @param arrayOfCallbacks {Array} array to check
        * @throws {Error} if any element of arrayOfCallbacks is something other than
        * a Functions, null, or undefined.
        */
        function checkCallbacks(start, arrayOfCallbacks) {
            var arg, i = arrayOfCallbacks.length;
            while (i > start) {
                arg = arrayOfCallbacks[--i];
                if (arg != null && typeof arg != 'function') throw new Error('callback is not a function');
            }
        }

        /**
        * No-Op function used in method replacement
        * @private
        */
        function noop() { }

        slice = [].slice;

        // ES5 reduce implementation if native not available
        // See: http://es5.github.com/#x15.4.4.21 as there are many
        // specifics and edge cases.
        reduceArray = [].reduce ||
		function (reduceFunc /*, initialValue */) {
		    // ES5 dictates that reduce.length === 1

		    // This implementation deviates from ES5 spec in the following ways:
		    // 1. It does not check if reduceFunc is a Callable

		    var arr, args, reduced, len, i;

		    i = 0;
		    arr = Object(this);
		    len = arr.length >>> 0;
		    args = arguments;

		    // If no initialValue, use first item of array (we know length !== 0 here)
		    // and adjust i to start at second item
		    if (args.length <= 1) {
		        // Skip to the first real element in the array
		        for (; ; ) {
		            if (i in arr) {
		                reduced = arr[i++];
		                break;
		            }

		            // If we reached the end of the array without finding any real
		            // elements, it's a TypeError
		            if (++i >= len) {
		                throw new TypeError();
		            }
		        }
		    } else {
		        // If initialValue provided, use it
		        reduced = args[1];
		    }

		    // Do the actual reduce
		    for (; i < len; ++i) {
		        // Skip holes
		        if (i in arr)
		            reduced = reduceFunc(reduced, arr[i], i, arr);
		    }

		    return reduced;
		};

        return when;
    });
})(typeof define == 'function'
	? define
	: function (factory) {
	    typeof module != 'undefined'
		? (module.exports = factory())
		: (jQuery.mapster_when = factory());
	}
// Boilerplate for AMD, Node, and browser global
);
/*lint-ignore-end*/
/* ImageMapster core */

/*jslint laxbreak: true, evil: true, unparam: true */

/*global jQuery: true, Zepto: true */


(function ($) {
    // all public functions in $.mapster.impl are methods
    $.fn.mapster = function (method) {
        var m = $.mapster.impl;
        if ($.isFunction(m[method])) {
            return m[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return m.bind.apply(this, arguments);
        } else {
            $.error('Method ' + method + ' does not exist on jQuery.mapster');
        }
    };

    $.mapster = {
        version: "1.2.14-beta1",
        render_defaults: {
            isSelectable: true,
            isDeselectable: true,
            fade: false,
            fadeDuration: 150,
            fill: true,
            fillColor: '000000',
            fillColorMask: 'FFFFFF',
            fillOpacity: 0.7,
            highlight: true,
            stroke: false,
            dash: false,
            dashStyle: 'default', // Accepts an array or 'default', 'dotted', 'short', 'long', 'morse'
            strokeColor: 'ff0000',
            strokeOpacity: 1,
            strokeWidth: 1,
            includeKeys: '',
            altImage: null,
            altImageId: null, // used internally
            altImages: {}
        },
        defaults: {
            clickNavigate: false,
            wrapClass: null,
            wrapCss: null,
            onGetList: null,
            sortList: false,
            listenToList: false,
            mapKey: '',
            mapValue: '',
            singleSelect: false,
            listKey: 'value',
            listSelectedAttribute: 'selected',
            listSelectedClass: null,
            onClick: null,
            onMouseover: null,
            onMouseout: null,
            mouseoutDelay: 0,
            onStateChange: null,
            boundList: null,
            onConfigured: null,
            configTimeout: 30000,
            noHrefIsMask: true,
            scaleMap: true,
            safeLoad: false,
            areas: []
        },
        shared_defaults: {
            render_highlight: { fade: true },
            render_select: { fade: false },
            staticState: null,
            selected: null
        },
        area_defaults:
        {
            includeKeys: '',
            isMask: false
        },
        canvas_style: {
            position: 'absolute',
            left: 0,
            top: 0,
            padding: 0,
            border: 0
        },
        hasCanvas: null,
        isTouch: null,
        map_cache: [],
        hooks: {},
        addHook: function(name,callback) {
            this.hooks[name]=(this.hooks[name]||[]).push(callback);
        },
        callHooks: function(name,context) {
            $.each(this.hooks[name]||[],function(i,e) {
                e.apply(context);
            });
        },
        utils: {
            when: $.mapster_when,
            defer: $.mapster_when.defer,

            // extends the constructor, returns a new object prototype. Does not refer to the
            // original constructor so is protected if the original object is altered. This way you
            // can "extend" an object by replacing it with its subclass.
            subclass: function(BaseClass, constr) {
                var Subclass=function() {
                    var me=this,
                        args=Array.prototype.slice.call(arguments,0);
                    me.base = BaseClass.prototype;
                    me.base.init = function() {
                        BaseClass.prototype.constructor.apply(me,args);
                    };
                    constr.apply(me,args);
                };
                Subclass.prototype = new BaseClass();
                Subclass.prototype.constructor=Subclass;
                return Subclass;
            },
            asArray: function (obj) {
                return obj.constructor === Array ?
                    obj : this.split(obj);
            },
            // clean split: no padding or empty elements
            split: function (text,cb) {
                var i,el, arr = text.split(',');
                for (i = 0; i < arr.length; i++) {
                    el = $.trim(arr[i]);
                    if (el==='') {
                        arr.splice(i,1);
                    } else {
                        arr[i] = cb ? cb(el):el;
                    }
                }
                return arr;
            },
            // similar to $.extend but does not add properties (only updates), unless the
            // first argument is an empty object, then all properties will be copied
            updateProps: function (_target, _template) {
                var onlyProps,
                    target = _target || {},
                    template = $.isEmptyObject(target) ? _template : _target;

                //if (template) {
                onlyProps = [];
                $.each(template, function (prop) {
                    onlyProps.push(prop);
                });
                //}

                $.each(Array.prototype.slice.call(arguments, 1), function (i, src) {
                    $.each(src || {}, function (prop) {
                        if (!onlyProps || $.inArray(prop, onlyProps) >= 0) {
                            var p = src[prop];

                            if ($.isPlainObject(p)) {
                                // not recursive - only copies 1 level of subobjects, and always merges
                                target[prop] = $.extend(target[prop] || {}, p);
                            } else if (p && p.constructor === Array) {
                                target[prop] = p.slice(0);
                            } else if (typeof p !== 'undefined') {
                                target[prop] = src[prop];
                            }

                        }
                    });
                });
                return target;
            },
            isElement: function (o) {
                return (typeof HTMLElement === "object" ? o instanceof HTMLElement :
                        o && typeof o === "object" && o.nodeType === 1 && typeof o.nodeName === "string");
            },
            /**
             * Basic indexOf implementation for IE7-8. Though we use $.inArray, some jQuery versions will try to
             * use a prototpye on the calling object, defeating the purpose of using $.inArray in the first place.
             *
             * This will be replaced with the array prototype if it's available.
             *
             * @param  {Array} arr The array to search
             * @param {Object} target The item to search for
             * @return {Number} The index of the item, or -1 if not found
             */
            indexOf: function(arr,target){
                for(var i=0; i<arr.length; i++){
                    if(arr[i]===target){
                        return i;
                    }
                }
                return -1;
            },

            // finds element of array or object with a property "prop" having value "val"
            // if prop is not defined, then just looks for property with value "val"
            indexOfProp: function (obj, prop, val) {
                var result = obj.constructor === Array ? -1 : null;
                $.each(obj, function (i, e) {
                    if (e && (prop ? e[prop] : e) === val) {
                        result = i;
                        return false;
                    }
                });
                return result;
            },
            // returns "obj" if true or false, or "def" if not true/false
            boolOrDefault: function (obj, def) {
                return this.isBool(obj) ?
                        obj : def || false;
            },
            isBool: function (obj) {
                return typeof obj === "boolean";
            },
            isUndef: function(obj) {
                return typeof obj === "undefined";
            },
            // evaluates "obj", if function, calls it with args
            // (todo - update this to handle variable lenght/more than one arg)
            ifFunction: function (obj, that, args) {
                if ($.isFunction(obj)) {
                    obj.call(that, args);
                }
            },
            size: function(image, raw) {
                var u=$.mapster.utils;
                return {
                    width: raw ? (image.width || image.naturalWidth) : u.imgWidth(image,true) ,
                    height: raw ? (image.height || image.naturalHeight) : u.imgHeight(image,true),
                    complete: function() { return !!this.height && !!this.width;}
                };
            },


            /**
             * Set the opacity of the element. This is an IE<8 specific function for handling VML.
             * When using VML we must override the "setOpacity" utility function (monkey patch ourselves).
             * jQuery does not deal with opacity correctly for VML elements. This deals with that.
             *
             * @param {Element} el The DOM element
             * @param {double} opacity A value between 0 and 1 inclusive.
             */

            setOpacity: function (el, opacity) {
                if ($.mapster.hasCanvas()) {
                    el.style.opacity = opacity;
                } else {
                    $(el).each(function(i,e) {
                        if (typeof e.opacity !=='undefined') {
                           e.opacity=opacity;
                        } else {
                            $(e).css("opacity",opacity);
                        }
                    });
                }
            },


            // fade "el" from opacity "op" to "endOp" over a period of time "duration"

            fader: (function () {
                var elements = {},
                        lastKey = 0,
                        fade_func = function (el, op, endOp, duration) {
                            var index,
                                cbIntervals = duration/15,
                                obj, u = $.mapster.utils;

                            if (typeof el === 'number') {
                                obj = elements[el];
                                if (!obj) {
                                    return;
                                }
                            } else {
                                index = u.indexOfProp(elements, null, el);
                                if (index) {
                                    delete elements[index];
                                }
                                elements[++lastKey] = obj = el;
                                el = lastKey;
                            }

                            endOp = endOp || 1;

                            op = (op + (endOp / cbIntervals) > endOp - 0.01) ? endOp : op + (endOp / cbIntervals);

                            u.setOpacity(obj, op);
                            if (op < endOp) {
                                setTimeout(function () {
                                    fade_func(el, op, endOp, duration);
                                }, 15);
                            }
                        };
                return fade_func;
            } ())
        },
        getBoundList: function (opts, key_list) {
            if (!opts.boundList) {
                return null;
            }
            var index, key, result = $(), list = $.mapster.utils.split(key_list);
            opts.boundList.each(function (i,e) {
                for (index = 0; index < list.length; index++) {
                    key = list[index];
                    if ($(e).is('[' + opts.listKey + '="' + key + '"]')) {
                        result = result.add(e);
                    }
                }
            });
            return result;
        },
        // Causes changes to the bound list based on the user action (select or deselect)
        // area: the jQuery area object
        // returns the matching elements from the bound list for the first area passed (normally only one should be passed, but
        // a list can be passed
        setBoundListProperties: function (opts, target, selected) {
            target.each(function (i,e) {
                if (opts.listSelectedClass) {
                    if (selected) {
                        $(e).addClass(opts.listSelectedClass);
                    } else {
                        $(e).removeClass(opts.listSelectedClass);
                    }
                }
                if (opts.listSelectedAttribute) {
                    $(e).attr(opts.listSelectedAttribute, selected);
                }
            });
        },
        getMapDataIndex: function (obj) {
            var img, id;
            switch (obj.tagName && obj.tagName.toLowerCase()) {
                case 'area':
                    id = $(obj).parent().attr('name');
                    img = $("img[usemap='#" + id + "']")[0];
                    break;
                case 'img':
                    img = obj;
                    break;
            }
            return img ?
                this.utils.indexOfProp(this.map_cache, 'image', img) : -1;
        },
        getMapData: function (obj) {
            var index = this.getMapDataIndex(obj.length ? obj[0]:obj);
            if (index >= 0) {
                return index >= 0 ? this.map_cache[index] : null;
            }
        },
        /**
         * Queue a command to be run after the active async operation has finished
         * @param  {MapData}  map_data    The target MapData object
         * @param  {jQuery}   that        jQuery object on which the command was invoked
         * @param  {string}   command     the ImageMapster method name
         * @param  {object[]} args        arguments passed to the method
         * @return {bool}                 true if the command was queued, false if not (e.g. there was no need to)
         */
        queueCommand: function (map_data, that, command, args) {
            if (!map_data) {
                return false;
            }
            if (!map_data.complete || map_data.currentAction) {
                map_data.commands.push(
                {
                    that: that,
                    command: command,
                    args: args
                });
                return true;
            }
            return false;
        },
        unload: function () {
            this.impl.unload();
            this.utils = null;
            this.impl = null;
            $.fn.mapster = null;
            $.mapster = null;
            $('*').unbind();
        }
    };

    // Config for object prototypes
    // first: use only first object (for things that should not apply to lists)
    /// calls back one of two fuinctions, depending on whether an area was obtained.
    // opts: {
    //    name: 'method name',
    //    key: 'key,
    //    args: 'args'
    //
    //}
    // name: name of method (required)
    // args: arguments to re-call with
    // Iterates through all the objects passed, and determines whether it's an area or an image, and calls the appropriate
    // callback for each. If anything is returned from that callback, the process is stopped and that data return. Otherwise,
    // the object itself is returned.

    var m = $.mapster,
        u = m.utils,
        ap = Array.prototype;


    // jQuery's width() and height() are broken on IE9 in some situations. This tries everything.
    $.each(["width","height"],function(i,e) {
        var capProp = e.substr(0,1).toUpperCase() + e.substr(1);
        // when jqwidth parm is passed, it also checks the jQuery width()/height() property
        // the issue is that jQUery width() can report a valid size before the image is loaded in some browsers
        // without it, we can read zero even when image is loaded in other browsers if its not visible
        // we must still check because stuff like adblock can temporarily block it
        // what a goddamn headache
        u["img"+capProp]=function(img,jqwidth) {
                return (jqwidth ? $(img)[e]() : 0) ||
                    img[e] || img["natural"+capProp] || img["client"+capProp] || img["offset"+capProp];
        };

    });

    /**
     * The Method object encapsulates the process of testing an ImageMapster method to see if it's being
     * invoked on an image, or an area; then queues the command if the MapData is in an active state.
     *
     * @param {[jQuery]}    that        The target of the invocation
     * @param {[function]}  func_map    The callback if the target is an imagemap
     * @param {[function]}  func_area   The callback if the target is an area
     * @param {[object]}    opt         Options: { key: a map key if passed explicitly
     *                                             name: the command name, if it can be queued,
     *                                             args: arguments to the method
     *                                            }
     */

    m.Method = function (that, func_map, func_area, opts) {
        var me = this;
        me.name = opts.name;
        me.output = that;
        me.input = that;
        me.first = opts.first || false;
        me.args = opts.args ? ap.slice.call(opts.args, 0) : [];
        me.key = opts.key;
        me.func_map = func_map;
        me.func_area = func_area;
        //$.extend(me, opts);
        me.name = opts.name;
        me.allowAsync = opts.allowAsync || false;
    };
    m.Method.prototype = {
        constructor: m.Method,
        go: function () {
            var i,  data, ar, len, result, src = this.input,
                    area_list = [],
                    me = this;

            len = src.length;
            for (i = 0; i < len; i++) {
                data = $.mapster.getMapData(src[i]);
                if (data) {
                    if (!me.allowAsync && m.queueCommand(data, me.input, me.name, me.args)) {
                        if (this.first) {
                            result = '';
                        }
                        continue;
                    }

                    ar = data.getData(src[i].nodeName === 'AREA' ? src[i] : this.key);
                    if (ar) {
                        if ($.inArray(ar, area_list) < 0) {
                            area_list.push(ar);
                        }
                    } else {
                        result = this.func_map.apply(data, me.args);
                    }
                    if (this.first || typeof result !== 'undefined') {
                        break;
                    }
                }
            }
            // if there were areas, call the area function for each unique group
            $(area_list).each(function (i,e) {
                result = me.func_area.apply(e, me.args);
            });

            if (typeof result !== 'undefined') {
                return result;
            } else {
                return this.output;
            }
        }
    };

    $.mapster.impl = (function () {
        var me = {},
        addMap= function (map_data) {
            return m.map_cache.push(map_data) - 1;
        },
        removeMap = function (map_data) {
            m.map_cache.splice(map_data.index, 1);
            for (var i = m.map_cache.length - 1; i >= this.index; i--) {
                m.map_cache[i].index--;
            }
        };


        /**
         * Test whether the browser supports VML. Credit: google.
         * http://stackoverflow.com/questions/654112/how-do-you-detect-support-for-vml-or-svg-in-a-browser
         *
         * @return {bool} true if vml is supported, false if not
         */

        function hasVml() {
            var a = $('<div />').appendTo('body');
            a.html('<v:shape id="vml_flag1" adj="1" />');

            var b = a[0].firstChild;
            b.style.behavior = "url(#default#VML)";
            var has = b ? typeof b.adj === "object" : true;
            a.remove();
            return has;
        }

        /**
         * Return a reference to the IE namespaces object, if available, or an empty object otherwise
         * @return {obkect} The document.namespaces object.
         */
        function namespaces() {
            return typeof(document.namespaces)==='object' ?
                document.namespaces :
                null;
        }

        /**
         * Test for the presence of HTML5 Canvas support. This also checks to see if excanvas.js has been
         * loaded and is faking it; if so, we assume that canvas is not supported.
         *
         * @return {bool} true if HTML5 canvas support, false if not
         */

        function hasCanvas() {
            var d = namespaces();
            // when g_vml_ is present, then we can be sure excanvas is active, meaning there's not a real canvas.

             return d && d.g_vml_ ?
                false :
                $('<canvas />')[0].getContext ?
                    true :
                    false;
        }

        /**
         * Merge new area data into existing area options on a MapData object. Used for rebinding.
         *
         * @param  {[MapData]} map_data     The MapData object
         * @param  {[object[]]} areas       areas array to merge
         */

        function merge_areas(map_data, areas) {
            var ar, index,
                map_areas = map_data.options.areas;

            if (areas) {
                $.each(areas, function (i, e) {

                    // Issue #68 - ignore invalid data in areas array

                    if (!e || !e.key) {
                        return;
                    }

                    index = u.indexOfProp(map_areas, "key", e.key);

                    if (index >= 0) {
                        $.extend(map_areas[index], e);
                    }
                    else {
                        map_areas.push(e);
                    }
                    ar = map_data.getDataForKey(e.key);
                    if (ar) {
                        $.extend(ar.options, e);
                    }
                });
            }
        }
        function merge_options(map_data, options) {
            var temp_opts = u.updateProps({}, options);
            delete temp_opts.areas;

            u.updateProps(map_data.options, temp_opts);

            merge_areas(map_data, options.areas);
            // refresh the area_option template
            u.updateProps(map_data.area_options, map_data.options);
        }

        // Most methods use the "Method" object which handles figuring out whether it's an image or area called and
        // parsing key parameters. The constructor wants:
        // this, the jQuery object
        // a function that is called when an image was passed (with a this context of the MapData)
        // a function that is called when an area was passed (with a this context of the AreaData)
        // options: first = true means only the first member of a jQuery object is handled
        //          key = the key parameters passed
        //          defaultReturn: a value to return other than the jQuery object (if its not chainable)
        //          args: the arguments
        // Returns a comma-separated list of user-selected areas. "staticState" areas are not considered selected for the purposes of this method.

        me.get = function (key) {
            var md = m.getMapData(this);
            if (!(md && md.complete)) {
                throw("Can't access data until binding complete.");
            }

            return (new m.Method(this,
                function () {
                    // map_data return
                    return this.getSelected();
                },
                function () {
                    return this.isSelected();
                },
                { name: 'get',
                    args: arguments,
                    key: key,
                    first: true,
                    allowAsync: true,
                    defaultReturn: ''
                }
            )).go();
        };
        me.data = function (key) {
            return (new m.Method(this,
                null,
                function () {
                    return this;
                },
                { name: 'data',
                    args: arguments,
                    key: key
                }
            )).go();
        };


        // Set or return highlight state.
        //  $(img).mapster('highlight') -- return highlighted area key, or null if none
        //  $(area).mapster('highlight') -- highlight an area
        //  $(img).mapster('highlight','area_key') -- highlight an area
        //  $(img).mapster('highlight',false) -- remove highlight
        me.highlight = function (key) {
            return (new m.Method(this,
                function () {
                    if (key === false) {
                        this.ensureNoHighlight();
                    } else {
                        var id = this.highlightId;
                        return id >= 0 ? this.data[id].key : null;
                    }
                },
                function () {
                    this.highlight();
                },
                { name: 'highlight',
                    args: arguments,
                    key: key,
                    first: true
                }
            )).go();
        };
        // Return the primary keys for an area or group key.
        // $(area).mapster('key')
        // includes all keys (not just primary keys)
        // $(area).mapster('key',true)
        // $(img).mapster('key','group-key')

        // $(img).mapster('key','group-key', true)
        me.keys = function(key,all) {
            var keyList=[],
                md = m.getMapData(this);

            if (!(md && md.complete)) {
                throw("Can't access data until binding complete.");
            }


            function addUniqueKeys(ad) {
                var areas,keys=[];
                if (!all) {
                    keys.push(ad.key);
                } else {
                    areas=ad.areas();
                    $.each(areas,function(i,e) {
                        keys=keys.concat(e.keys);
                    });
                }
                $.each(keys,function(i,e) {
                    if ($.inArray(e,keyList)<0) {
                        keyList.push(e);
                    }
                });
            }

            if (!(md  && md.complete)) {
                return '';
            }
            if (typeof key === 'string') {
                if (all) {
                    addUniqueKeys(md.getDataForKey(key));
                } else {
                    keyList=[md.getKeysForGroup(key)];
                }
            } else {
                all = key;
                this.each(function(i,e) {
                    if (e.nodeName==='AREA') {
                        addUniqueKeys(md.getDataForArea(e));
                    }
                });
            }
            return keyList.join(',');


        };
        me.select = function () {
            me.set.call(this, true);
        };
        me.deselect = function () {
            me.set.call(this, false);
        };

        /**
         * Select or unselect areas. Areas can be identified by a single string key, a comma-separated list of keys,
         * or an array of strings.
         *
         *
         * @param {boolean} selected Determines whether areas are selected or deselected
         * @param {string|string[]} key A string, comma-separated string, or array of strings indicating
         *                              the areas to select or deselect
         * @param {object} options Rendering options to apply when selecting an area
         */

        me.set = function (selected, key, options) {
            var lastMap, map_data, opts=options,
                key_list, area_list; // array of unique areas passed

            function setSelection(ar) {
                var newState = selected;
                if (ar) {
                    switch (selected) {
                        case true:
                            ar.select(opts); break;
                        case false:
                            ar.deselect(true); break;
                        default:
                            newState = ar.toggle(opts); break;
                    }
                    return newState;
                }
            }
            function addArea(ar) {
               if (ar && $.inArray(ar, area_list) < 0) {
                    area_list.push(ar);
                    key_list+=(key_list===''?'':',')+ar.key;
                }
            }
            // Clean up after a group that applied to the same map
            function finishSetForMap(map_data) {
                $.each(area_list, function (i, el) {
                    var newState = setSelection(el);
                    if (map_data.options.boundList) {
                        m.setBoundListProperties(map_data.options, m.getBoundList(map_data.options, key_list), newState);
                    }
                });
                if (!selected) {
                    map_data.removeSelectionFinish();
                }

            }

            this.filter('img,area').each(function (i,e) {
                var keys;
                map_data = m.getMapData(e);

                if (map_data !== lastMap) {
                    if (lastMap) {
                       finishSetForMap(lastMap);
                    }

                    area_list = [];
                    key_list='';
                }

               if (map_data) {

                    keys = '';
                    if (e.nodeName.toUpperCase()==='IMG') {
                        if (!m.queueCommand(map_data, $(e), 'set', [selected, key, opts])) {
                            if (key instanceof Array) {
                                if (key.length) {
                                    keys = key.join(",");
                                }
                            }
                            else {
                                keys = key;
                            }

                            if (keys) {
                                $.each(u.split(keys), function (i,key) {
                                    addArea(map_data.getDataForKey(key.toString()));
                                    lastMap = map_data;
                                });
                            }
                        }
                    } else {
                        opts=key;
                        if (!m.queueCommand(map_data, $(e), 'set', [selected, opts])) {
                            addArea(map_data.getDataForArea(e));
                            lastMap = map_data;
                        }

                    }
                }
            });

            if (map_data) {
               finishSetForMap(map_data);
            }


            return this;
        };
        me.unbind = function (preserveState) {
            return (new m.Method(this,
                function () {
                    this.clearEvents();
                    this.clearMapData(preserveState);
                    removeMap(this);
                },
                null,
                { name: 'unbind',
                    args: arguments
                }
            )).go();
        };


        // refresh options and update selection information.
        me.rebind = function (options) {
            return (new m.Method(this,
                function () {
                    var me=this;

                    me.complete=false;
                    me.configureOptions(options);
                    me.bindImages().then(function() {
                        me.buildDataset(true);
                        me.complete=true;
                    });
                    //this.redrawSelections();
                },
                null,
                {
                    name: 'rebind',
                    args: arguments
                }
            )).go();
        };
        // get options. nothing or false to get, or "true" to get effective options (versus passed options)
        me.get_options = function (key, effective) {
            var eff = u.isBool(key) ? key : effective; // allow 2nd parm as "effective" when no key
            return (new m.Method(this,
                function () {
                    var opts = $.extend({}, this.options);
                    if (eff) {
                        opts.render_select = u.updateProps(
                            {},
                            m.render_defaults,
                            opts,
                            opts.render_select);

                        opts.render_highlight = u.updateProps(
                            {},
                            m.render_defaults,
                            opts,
                            opts.render_highlight);
                    }
                    return opts;
                },
                function () {
                    return eff ? this.effectiveOptions() : this.options;
                },
                {
                    name: 'get_options',
                    args: arguments,
                    first: true,
                    allowAsync: true,
                    key: key
                }
            )).go();
        };

        // set options - pass an object with options to set,
        me.set_options = function (options) {
            return (new m.Method(this,
                function () {
                    merge_options(this, options);
                },
                null,
                {
                    name: 'set_options',
                    args: arguments
                }
            )).go();
        };
        me.unload = function () {
            var i;
            for (i = m.map_cache.length - 1; i >= 0; i--) {
                if (m.map_cache[i]) {
                    me.unbind.call($(m.map_cache[i].image));
                }
            }
            me.graphics = null;
        };

        me.snapshot = function () {
            return (new m.Method(this,
                function () {
                    $.each(this.data, function (i, e) {
                        e.selected = false;
                    });

                    this.base_canvas = this.graphics.createVisibleCanvas(this);
                    $(this.image).before(this.base_canvas);
                },
                null,
                { name: 'snapshot' }
            )).go();
        };

        // do not queue this function

        me.state = function () {
            var md, result = null;
            $(this).each(function (i,e) {
                if (e.nodeName === 'IMG') {
                    md = m.getMapData(e);
                    if (md) {
                        result = md.state();
                    }
                    return false;
                }
            });
            return result;
        };

        me.bind = function (options) {

            return this.each(function (i,e) {
                var img, map, usemap, md;

                // save ref to this image even if we can't access it yet. commands will be queued
                img = $(e);

                md = m.getMapData(e);

                // if already bound completely, do a total rebind

                if (md) {
                    me.unbind.apply(img);
                    if (!md.complete) {
                        // will be queued
                        img.bind();
                        return true;
                    }
                    md = null;
                }

                // ensure it's a valid image
                // jQuery bug with Opera, results in full-url#usemap being returned from jQuery's attr.
                // So use raw getAttribute instead.

                usemap = this.getAttribute('usemap');
                map = usemap && $('map[name="' + usemap.substr(1) + '"]');
                if (!(img.is('img') && usemap && map.size() > 0)) {
                    return true;
                }

                // sorry - your image must have border:0, things are too unpredictable otherwise.
                img.css('border', 0);

                if (!md) {
                    md = new m.MapData(this, options);

                    md.index = addMap(md);
                    md.map = map;
                    md.bindImages().then(function() {
                        md.initialize();
                    });
                }
            });
        };

        me.init = function (useCanvas) {
            var style, shapes;

            // for testing/debugging, use of canvas can be forced by initializing
            // manually with "true" or "false". But generally we test for it.

            m.hasCanvas = function() {
                if (!u.isBool(m.hasCanvas.value)) {
                    m.hasCanvas.value = u.isBool(useCanvas) ?
                        useCanvas :
                        hasCanvas();
                }
                return m.hasCanvas.value;
            };

            m.hasVml = function() {
                if (!u.isBool(m.hasVml.value)) {
                    // initialize VML the first time we detect its presence.
                    var d = namespaces();

                    if (d && !d.v) {
                        d.add("v", "urn:schemas-microsoft-com:vml");
                        style = document.createStyleSheet();
                        shapes = ['shape', 'rect', 'oval', 'circ', 'fill', 'stroke', 'imagedata', 'group', 'textbox'];
                        $.each(shapes,
                        function (i, el) {
                            style.addRule('v\\:' + el, "behavior: url(#default#VML); antialias:true");
                        });
                    }
                    m.hasVml.value = hasVml();
                }

                return m.hasVml.value;
            };

            m.isTouch = !!document.documentElement.ontouchstart;

            u.indexOf = Array.prototype.indexOf || u.indexOf;

            $.extend(m.defaults, m.render_defaults,m.shared_defaults);
            $.extend(m.area_defaults, m.render_defaults,m.shared_defaults);

        };
        me.test = function (obj) {
            return eval(obj);
        };
        return me;
    } ());

    $.mapster.impl.init();


} (jQuery));
/* graphics.js
   Graphics object handles all rendering.
*/
(function ($) {
    var p, m=$.mapster,
        u=m.utils,
        canvasMethods,
        vmlMethods;

    /**
     * Implemenation to add each area in an AreaData object to the canvas
     * @param {Graphics} graphics The target graphics object
     * @param {AreaData} areaData The AreaData object (a collection of area elements and metadata)
     * @param {object} options Rendering options to apply when rendering this group of areas
     */
    function addShapeGroupImpl(graphics, areaData, options) {
        var me = graphics,
            md = me.map_data,
            isMask = options.isMask;

        // first get area options. Then override fade for selecting, and finally merge in the
        // "select" effect options.

        $.each(areaData.areas(), function (i,e) {
            options.isMask = isMask || (e.nohref && md.options.noHrefIsMask);
            me.addShape(e, options);
        });

        // it's faster just to manipulate the passed options isMask property and restore it, than to
        // copy the object each time

        options.isMask=isMask;

    }

     /**
     * Convert a hex value to decimal
     * @param  {string} hex A hexadecimal toString
     * @return {int} Integer represenation of the hex string
     */

    function hex_to_decimal(hex) {
        return Math.max(0, Math.min(parseInt(hex, 16), 255));
    }
    function css3color(color, opacity) {
        return 'rgba(' + hex_to_decimal(color.substr(0, 2)) + ','
                + hex_to_decimal(color.substr(2, 2)) + ','
                + hex_to_decimal(color.substr(4, 2)) + ',' + opacity + ')';
    }
    /**
     * An object associated with a particular map_data instance to manage renderin.
     * @param {MapData} map_data The MapData object bound to this instance
     */

    m.Graphics = function (map_data) {
        //$(window).unload($.mapster.unload);
        // create graphics functions for canvas and vml browsers. usage:
        // 1) init with map_data, 2) call begin with canvas to be used (these are separate b/c may not require canvas to be specified
        // 3) call add_shape_to for each shape or mask, 4) call render() to finish

        var me = this;
        me.active = false;
        me.canvas = null;
        me.width = 0;
        me.height = 0;
        me.shapes = [];
        me.masks = [];
        me.map_data = map_data;
    };

    p = m.Graphics.prototype= {
        constructor: m.Graphics,

        /**
         * Initiate a graphics request for a canvas
         * @param  {Element} canvas The canvas element that is the target of this operation
         * @param  {string} [elementName] The name to assign to the element (VML only)
         */

        begin: function(canvas, elementName) {
            var c = $(canvas);

            this.elementName = elementName;
            this.canvas = canvas;

            this.width = c.width();
            this.height = c.height();
            this.shapes = [];
            this.masks = [];
            this.active = true;

        },

        /**
         * Add an area to be rendered to this canvas.
         * @param {MapArea} mapArea The MapArea object to render
         * @param {object} options An object containing any rendering options that should override the
         *                         defaults for the area
         */

        addShape: function(mapArea, options) {
            var addto = options.isMask ? this.masks : this.shapes;
            addto.push({ mapArea: mapArea, options: options });
        },

        /**
         * Create a canvas that is sized and styled for the MapData object
         * @param  {MapData} mapData The MapData object that will receive this new canvas
         * @return {Element} A canvas element
         */

        createVisibleCanvas: function (mapData) {
            return $(this.createCanvasFor(mapData))
                .addClass('mapster_el')
                .css(m.canvas_style)[0];
        },

        /**
         * Add a group of shapes from an AreaData object to the canvas
         *
         * @param {AreaData} areaData An AreaData object (a set of area elements)
         * @param {string} mode     The rendering mode, "select" or "highlight". This determines the target
         *                          canvas and which default options to use.
         * @param {striong} options  Rendering options
         */

        addShapeGroup: function (areaData, mode,options) {
            // render includeKeys first - because they could be masks
            var me = this,
                list, name, canvas,
                map_data = this.map_data,
                opts = areaData.effectiveRenderOptions(mode);

            if (options) {
                 $.extend(opts,options);
            }

            if (mode === 'select') {
                name = "static_" + areaData.areaId.toString();
                canvas = map_data.base_canvas;
            } else {
                canvas = map_data.overlay_canvas;
            }

            me.begin(canvas, name);

            if (opts.includeKeys) {
                list = u.split(opts.includeKeys);
                $.each(list, function (i,e) {
                    var areaData = map_data.getDataForKey(e.toString());
                    addShapeGroupImpl(me,areaData, areaData.effectiveRenderOptions(mode));
                });
            }

            addShapeGroupImpl(me,areaData, opts);
            me.render();
            if (opts.fade) {

                // fading requires special handling for IE. We must access the fill elements directly. The fader also has to deal with
                // the "opacity" attribute (not css)

                u.fader(m.hasCanvas() ?
                    canvas :
                    $(canvas).find('._fill').not('.mapster_mask'),
                0,
                m.hasCanvas() ?
                    1 :
                    opts.fillOpacity,
                opts.fadeDuration);

            }

        }

        // These prototype methods are implementation dependent
    };

    function noop() {}


    // configure remaining prototype methods for ie or canvas-supporting browser

    canvasMethods = {
        renderShape: function (context, mapArea, offset) {
            var i,
                c = mapArea.coords(null,offset);

            switch (mapArea.shape) {
                case 'rect':
                    context.rect(c[0], c[1], c[2] - c[0], c[3] - c[1]);
                    break;
                case 'poly':
                    context.moveTo(c[0], c[1]);

                    for (i = 2; i < mapArea.length; i += 2) {
                        context.lineTo(c[i], c[i + 1]);
                    }
                    context.lineTo(c[0], c[1]);
                    break;
                case 'circ':
                case 'circle':
                    context.arc(c[0], c[1], c[2], 0, Math.PI * 2, false);
                    break;
            }
        },
        addAltImage: function (context, image, mapArea, options) {
            context.beginPath();

            this.renderShape(context, mapArea);
            context.closePath();
            context.clip();

            context.globalAlpha = options.altImageOpacity || options.fillOpacity;

            context.drawImage(image, 0, 0, mapArea.owner.scaleInfo.width, mapArea.owner.scaleInfo.height);
        },
        render: function () {
            // firefox 6.0 context.save() seems to be broken. to work around,  we have to draw the contents on one temp canvas,
            // the mask on another, and merge everything. ugh. fixed in 1.2.2. unfortunately this is a lot more code for masks,
            // but no other way around it that i can see.

            var maskCanvas, maskContext,
                        me = this,
                        md = me.map_data,
                        hasMasks = me.masks.length,
                        shapeCanvas = me.createCanvasFor(md),
                        shapeContext = shapeCanvas.getContext('2d'),
                        context = me.canvas.getContext('2d');

            if (hasMasks) {
                maskCanvas = me.createCanvasFor(md);
                maskContext = maskCanvas.getContext('2d');
                maskContext.clearRect(0, 0, maskCanvas.width, maskCanvas.height);

                $.each(me.masks, function (i,e) {
                    maskContext.save();
                    maskContext.beginPath();
                    me.renderShape(maskContext, e.mapArea);
                    maskContext.closePath();
                    maskContext.clip();
                    maskContext.lineWidth = 0;
                    maskContext.fillStyle = '#000';
                    maskContext.fill();
                    maskContext.restore();
                });

            }

            $.each(me.shapes, function (i,s) {
                shapeContext.save();
                if (s.options.fill) {
                    if (s.options.altImageId) {
                        me.addAltImage(shapeContext, md.images[s.options.altImageId], s.mapArea, s.options);
                    } else {
                        shapeContext.beginPath();
                        me.renderShape(shapeContext, s.mapArea);
                        shapeContext.closePath();
                        //shapeContext.clip();
                        shapeContext.fillStyle = css3color(s.options.fillColor, s.options.fillOpacity);
                        shapeContext.fill();
                    }
                }
                shapeContext.restore();
            });


            // render strokes at end since masks get stroked too
            if (context.setLineDash) { //setLineDash support check Modern Browsers & IE11+
                $.each(me.shapes.concat(me.masks), function (i,s) {
                    var offset = s.options.strokeWidth === 1 ? 0.5 : 0;
                    // offset applies only when stroke width is 1 and stroke would render between pixels.

                    if (s.options.stroke) {
                        shapeContext.save();
                        shapeContext.strokeStyle = css3color(s.options.strokeColor, s.options.strokeOpacity);
                        shapeContext.lineWidth = s.options.strokeWidth;

                        var ds = [];
                        if (s.options.dash) {
                          if (typeof s.options.dashStyle === 'string') {
                            switch (s.options.dashStyle) {
                              case 'solid':
                              ds = [10,0];
                              break;
                              case 'dotted':
                              ds = [2, 5];
                              break;
                              case 'short':
                              ds = [5,5];
                              break;
                              case 'long':
                              ds = [15,5];
                              break;
                              case 'morse':
                              ds = [15, 8, 2, 2, 2, 8];
                              break;
                            }
                          } else if (Array.isArray(s.options.dashStyle)) {
                            ds = s.options.dashStyle;
                          }
                          if (!ds.length) {
                            //console.error('Error: dashStyle option must be an array or a preset string ("default", "dotted", "short", "long", "morse")');
                          }
                          shapeContext.setLineDash(ds);
                        }

                        shapeContext.beginPath();

                        me.renderShape(shapeContext, s.mapArea, offset);
                        shapeContext.closePath();
                        shapeContext.stroke();
                        shapeContext.restore();
                    }
                });
            }

            if (hasMasks) {
                // render the new shapes against the mask

                maskContext.globalCompositeOperation = "source-out";
                maskContext.drawImage(shapeCanvas, 0, 0);

                // flatten into the main canvas
                context.drawImage(maskCanvas, 0, 0);
            } else {
                context.drawImage(shapeCanvas, 0, 0);
            }

            me.active = false;
            return me.canvas;
        },

        // create a canvas mimicing dimensions of an existing element
        createCanvasFor: function (md) {
            return $('<canvas width="' + md.scaleInfo.width + '" height="' +md.scaleInfo.height + '"></canvas>')[0];
        },
        clearHighlight: function () {
            var c = this.map_data.overlay_canvas;
            c.getContext('2d').clearRect(0, 0, c.width, c.height);
        },
        // Draw all items from selected_list to a new canvas, then swap with the old one. This is used to delete items when using canvases.
        refreshSelections: function () {
            var canvas_temp, map_data = this.map_data;
            // draw new base canvas, then swap with the old one to avoid flickering
            canvas_temp = map_data.base_canvas;

            map_data.base_canvas = this.createVisibleCanvas(map_data);
            $(map_data.base_canvas).hide();
            $(canvas_temp).before(map_data.base_canvas);

            map_data.redrawSelections();

            $(map_data.base_canvas).show();
            $(canvas_temp).remove();
        }
    };

    vmlMethods = {

        renderShape: function (mapArea, options, cssclass) {
            var me = this, fill,stroke, e, t_fill, el_name, el_class, template, c = mapArea.coords();
            el_name = me.elementName ? 'name="' + me.elementName + '" ' : '';
            el_class = cssclass ? 'class="' + cssclass + '" ' : '';

            t_fill = '<v:fill color="#' + options.fillColor + '" class="_fill" opacity="' +
                (options.fill ?
                    options.fillOpacity :
                    0) +
                '" /><v:stroke class="_fill" opacity="' +
                options.strokeOpacity + '"/>';


            stroke = options.stroke ?
                ' strokeweight=' + options.strokeWidth + ' stroked="t" strokecolor="#' +
                    options.strokeColor + '"' :
                ' stroked="f"';

            fill = options.fill ?
                ' filled="t"' :
                ' filled="f"';

            switch (mapArea.shape) {
                case 'rect':
                    template = '<v:rect ' + el_class + el_name + fill + stroke +
                        ' style="zoom:1;margin:0;padding:0;display:block;position:absolute;left:' +
                          c[0] + 'px;top:' + c[1]  + 'px;width:' + (c[2] - c[0]) +
                          'px;height:' + (c[3] - c[1]) + 'px;">' + t_fill + '</v:rect>';
                    break;
                case 'poly':
                    template = '<v:shape ' + el_class + el_name + fill + stroke + ' coordorigin="0,0" coordsize="' + me.width + ',' + me.height
                                + '" path="m ' + c[0] + ',' + c[1] + ' l ' + c.slice(2).join(',')
                                + ' x e" style="zoom:1;margin:0;padding:0;display:block;position:absolute;top:0px;left:0px;width:' + me.width + 'px;height:' + me.height + 'px;">' + t_fill + '</v:shape>';
                    break;
                case 'circ':
                case 'circle':
                    template = '<v:oval ' + el_class + el_name + fill + stroke
                                + ' style="zoom:1;margin:0;padding:0;display:block;position:absolute;left:' + (c[0] - c[2]) + 'px;top:' + (c[1] - c[2])
                                + 'px;width:' + (c[2] * 2) + 'px;height:' + (c[2] * 2) + 'px;">' + t_fill + '</v:oval>';
                    break;
            }
            e = $(template);
            $(me.canvas).append(e);

            return e;
        },
        render: function () {
            var opts, me = this;

            $.each(this.shapes, function (i,e) {
                me.renderShape(e.mapArea, e.options);
            });

            if (this.masks.length) {
                $.each(this.masks, function (i,e) {
                    opts = u.updateProps({},
                        e.options, {
                            fillOpacity: 1,
                            fillColor: e.options.fillColorMask
                        });
                    me.renderShape(e.mapArea, opts, 'mapster_mask');
                });
            }

            this.active = false;
            return this.canvas;
        },

        createCanvasFor: function (md) {
            var w = md.scaleInfo.width,
                h = md.scaleInfo.height;
            return $('<var width="' + w + '" height="' + h
                + '" style="zoom:1;overflow:hidden;display:block;width:'
                + w + 'px;height:' + h + 'px;"></var>')[0];
        },

        clearHighlight: function () {
            $(this.map_data.overlay_canvas).children().remove();
        },
        // remove single or all selections
        removeSelections: function (area_id) {
            if (area_id >= 0) {
                $(this.map_data.base_canvas).find('[name="static_' + area_id.toString() + '"]').remove();
            }
            else {
                $(this.map_data.base_canvas).children().remove();
            }
        }

    };

    // for all methods with two implemenatations, add a function that will automatically replace itself with the correct
    // method on first invocation

    $.each(['renderShape',
           'addAltImage',
           'render',
           'createCanvasFor',
           'clearHighlight',
           'removeSelections',
           'refreshSelections'],
        function(i,e) {
            p[e]=(function(method) {
                return function() {
                    p[method] = (m.hasCanvas() ?
                        canvasMethods[method] :
                        vmlMethods[method]) || noop;

                    return p[method].apply(this,arguments);
                };
            }(e));
    });


} (jQuery));
/* mapimage.js
   the MapImage object, repesents an instance of a single bound imagemap
*/

(function ($) {

    var m = $.mapster,
        u = m.utils,
        ap=[];
    /**
     * An object encapsulating all the images used by a MapData.
     */

    m.MapImages = function(owner) {
        this.owner = owner;
        this.clear();
    };


    m.MapImages.prototype = {
        constructor: m.MapImages,

        /* interface to make this array-like */

        slice: function() {
            return ap.slice.apply(this,arguments);
        },
        splice: function() {
            ap.slice.apply(this.status,arguments);
            var result= ap.slice.apply(this,arguments);
            return result;
        },

        /**
         * a boolean value indicates whether all images are done loading
         * @return {bool} true when all are done
         */
        complete: function() {
            return $.inArray(false, this.status) < 0;
        },

        /**
         * Save an image in the images array and return its index
         * @param  {Image} image An Image object
         * @return {int} the index of the image
         */

        _add: function(image) {
            var index = ap.push.call(this,image)-1;
            this.status[index] = false;
            return index;
        },

        /**
         * Return the index of an Image within the images array
         * @param  {Image} img An Image
         * @return {int} the index within the array, or -1 if it was not found
         */

        indexOf: function(image) {
            return u.indexOf(this,image);
        },

        /**
         * Clear this object and reset it to its initial state after binding.
         */

        clear: function() {
            var me=this;

            if (me.ids && me.ids.length>0) {
                $.each(me.ids,function(i,e) {
                    delete me[e];
                });
            }

            /**
             * A list of the cross-reference IDs bound to this object
             * @type {string[]}
             */

            me.ids=[];

            /**
             * Length property for array-like behavior, set to zero when initializing. Array prototype
             * methods will update it after that.
             *
             * @type {int}
             */

            me.length=0;

            /**
             * the loaded status of the corresponding image
             * @type {boolean[]}
             */

            me.status=[];


            // actually erase the images

            me.splice(0);

        },

        /**
         * Bind an image to the map and add it to the queue to be loaded; return an ID that
         * can be used to reference the
         *
         * @param {Image|string} image An Image object or a URL to an image
         * @param {string} [id] An id to refer to this image
         * @returns {int} an ID referencing the index of the image object in
         *                map_data.images
         */

        add: function(image,id) {
            var index,src,me = this;

            if (!image) { return; }

            if (typeof image === 'string') {
                src = image;
                image = me[src];
                if (typeof image==='object') {
                    return me.indexOf(image);
                }

                image = $('<img />')
                    .addClass('mapster_el')
                    .hide();

                index=me._add(image[0]);

                image
                    .bind('load',function(e) {
                        me.imageLoaded.call(me,e);
                    })
                    .bind('error',function(e) {
                        me.imageLoadError.call(me,e);
                    });

                image.attr('src', src);
            } else {

                // use attr because we want the actual source, not the resolved path the browser will return directly calling image.src

                index=me._add($(image)[0]);
            }
            if (id) {
                if (this[id]) {
                    throw(id+" is already used or is not available as an altImage alias.");
                }
                me.ids.push(id);
                me[id]=me[index];
            }
            return index;
        },

        /**
         * Bind the images in this object,
         * @param  {boolean} retry when true, indicates that the function is calling itself after failure
         * @return {Promise} a promise that resolves when the images have finished loading
         */

        bind: function(retry) {
            var me = this,
                promise,
                triesLeft = me.owner.options.configTimeout / 200,

            /* A recursive function to continue checking that the images have been
               loaded until a timeout has elapsed */

            check=function() {
                var i;

                // refresh status of images

                i=me.length;

                while (i-->0) {
                    if (!me.isLoaded(i)) {
                        break;
                    }
                }

                // check to see if every image has already been loaded

                if (me.complete()) {
                    me.resolve();
                } else {
                    // to account for failure of onLoad to fire in rare situations
                    if (triesLeft-- > 0) {
                        me.imgTimeout=window.setTimeout(function() {
                            check.call(me,true);
                        }, 50);
                    } else {
                        me.imageLoadError.call(me);
                    }
                }

            };

            promise = me.deferred=u.defer();

            check();
            return promise;
        },

        resolve: function() {
            var me=this,
                resolver=me.deferred;

            if (resolver) {
                // Make a copy of the resolver before calling & removing it to ensure
                // it is not called twice
                me.deferred=null;
                resolver.resolve();
            }
        },

        /**
         * Event handler for image onload
         * @param  {object} e jQuery event data
         */

        imageLoaded: function(e) {
            var me=this,
                index = me.indexOf(e.target);

            if (index>=0) {

                me.status[index] = true;
                if ($.inArray(false, me.status) < 0) {
                    me.resolve();
                }
            }
        },

        /**
         * Event handler for onload error
         * @param  {object} e jQuery event data
         */

        imageLoadError: function(e) {
            clearTimeout(this.imgTimeout);
            this.triesLeft=0;
            var err = e ? 'The image ' + e.target.src + ' failed to load.' :
                'The images never seemed to finish loading. You may just need to increase the configTimeout if images could take a long time to load.';
            throw err;
        },
        /**
         * Test if the image at specificed index has finished loading
         * @param  {int}  index The image index
         * @return {boolean} true if loaded, false if not
         */

        isLoaded: function(index) {
            var img,
                me=this,
                status=me.status;

            if (status[index]) { return true; }
            img = me[index];

            if (typeof img.complete !== 'undefined') {
                status[index]=img.complete;
            } else {
                status[index]=!!u.imgWidth(img);
            }
            // if complete passes, the image is loaded, but may STILL not be available because of stuff like adblock.
            // make sure it is.

            return status[index];
        }
    };
    } (jQuery));
/* mapdata.js
   the MapData object, repesents an instance of a single bound imagemap
*/


(function ($) {

    var m = $.mapster,
        u = m.utils;

    /**
     * Set default values for MapData object properties
     * @param  {MapData} me The MapData object
     */

    function initializeDefaults(me) {
        $.extend(me,{
            complete: false,         // (bool)    when configuration is complete
            map: null,                // ($)      the image map
            base_canvas: null,       // (canvas|var)  where selections are rendered
            overlay_canvas: null,    // (canvas|var)  where highlights are rendered
            commands: [],            // {}        commands that were run before configuration was completed (b/c images weren't loaded)
            data: [],                // MapData[] area groups
            mapAreas: [],            // MapArea[] list. AreaData entities contain refs to this array, so options are stored with each.
            _xref: {},               // (int)      xref of mapKeys to data[]
            highlightId: -1,        // (int)      the currently highlighted element.
            currentAreaId: -1,
            _tooltip_events: [],     // {}         info on events we bound to a tooltip container, so we can properly unbind them
            scaleInfo: null,         // {}         info about the image size, scaling, defaults
            index: -1,                 // index of this in map_cache - so we have an ID to use for wraper div
            activeAreaEvent: null
        });
    }

    /**
     * Return an array of all image-containing options from an options object;
     * that is, containers that may have an "altImage" property
     *
     * @param  {object} obj     An options object
     * @return {object[]}       An array of objects
     */
    function getOptionImages(obj) {
        return [obj, obj.render_highlight, obj.render_select];
    }

    /**
     * Parse all the altImage references, adding them to the library so they can be preloaded
     * and aliased.
     *
     * @param  {MapData} me The MapData object on which to operate
     */
    function configureAltImages(me)
    {
        var opts = me.options,
            mi = me.images;

        // add alt images

        if (m.hasCanvas()) {
            // map altImage library first

            $.each(opts.altImages || {}, function(i,e) {
                mi.add(e,i);
            });

            // now find everything else

            $.each([opts].concat(opts.areas),function(i,e) {
                $.each(getOptionImages(e),function(i2,e2) {
                    if (e2 && e2.altImage) {
                        e2.altImageId=mi.add(e2.altImage);
                    }
                });
            });
        }

        // set area_options
        me.area_options = u.updateProps({}, // default options for any MapArea
            m.area_defaults,
            opts);
    }

    /**
     * Queue a mouse move action based on current delay settings
     * (helper for mouseover/mouseout handlers)
     *
     * @param  {MapData}    me       The MapData context
     * @param  {number}     delay    The number of milliseconds to delay the action
     * @param  {AreaData}   area     AreaData affected
     * @param  {Deferred}   deferred A deferred object to return (instead of a new one)
     * @return {Promise}    A promise that resolves when the action is completed
     */
    function queueMouseEvent(me,delay,area, deferred) {

        deferred = deferred || u.when.defer();

        function cbFinal(areaId) {
            if (me.currentAreaId!==areaId && me.highlightId>=0) {
                deferred.resolve();
            }
        }
        if (me.activeAreaEvent) {
            window.clearTimeout(me.activeAreaEvent);
            me.activeAreaEvent=0;
        }
        if (delay<0) {
            deferred.reject();
        } else {
            if (area.owner.currentAction || delay) {
                me.activeAreaEvent = window.setTimeout((function() {
                        return function() {
                            queueMouseEvent(me,0,area,deferred);
                        };
                    }(area)),
                    delay || 100);
            } else {
                 cbFinal(area.areaId);
            }
        }
        return deferred;
    }

     /**
     * Mousedown event. This is captured only to prevent browser from drawing an outline around an
     * area when it's clicked.
     *
     * @param  {EventData} e jQuery event data
     */

    function mousedown(e) {
        if (!m.hasCanvas()) {
            this.blur();
        }
        e.preventDefault();
    }

    /**
     * Mouseover event. Handle highlight rendering and client callback on mouseover
     *
     * @param  {MapData} me The MapData context
     * @param  {EventData} e jQuery event data
     * @return {[type]}   [description]
     */

    function mouseover(me,e) {
        var arData = me.getAllDataForArea(this),
            ar=arData.length ? arData[0] : null;

        // mouseover events are ignored entirely while resizing, though we do care about mouseout events
        // and must queue the action to keep things clean.

        if (!ar || ar.isNotRendered() || ar.owner.currentAction) {
            return;
        }

        if (me.currentAreaId === ar.areaId) {
            return;
        }
        if (me.highlightId !== ar.areaId) {
            me.clearEffects();

            ar.highlight();

            if (me.options.showToolTip) {
                $.each(arData,function(i,e) {
                    if (e.effectiveOptions().toolTip) {
                        e.showToolTip();
                    }
                });
            }
        }

        me.currentAreaId = ar.areaId;

        if ($.isFunction(me.options.onMouseover)) {
            me.options.onMouseover.call(this,
            {
                e: e,
                options:ar.effectiveOptions(),
                key: ar.key,
                selected: ar.isSelected()
            });
        }
    }

    /**
     * Mouseout event.
     *
     * @param  {MapData} me The MapData context
     * @param  {EventData} e jQuery event data
     * @return {[type]}   [description]
     */

    function mouseout(me,e) {
        var newArea,
            ar = me.getDataForArea(this),
            opts = me.options;


        if (me.currentAreaId<0 || !ar) {
            return;
        }

        newArea=me.getDataForArea(e.relatedTarget);

        if (newArea === ar) {
            return;
        }

        me.currentAreaId = -1;
        ar.area=null;

        queueMouseEvent(me,opts.mouseoutDelay,ar)
            .then(me.clearEffects);

        if ($.isFunction(opts.onMouseout)) {
            opts.onMouseout.call(this,
            {
                e: e,
                options: opts,
                key: ar.key,
                selected: ar.isSelected()
            });
        }

    }

    /**
     * Clear any active tooltip or highlight
     *
     * @param  {MapData} me The MapData context
     * @param  {EventData} e jQuery event data
     * @return {[type]}   [description]
     */

    function clearEffects(me) {
        var opts = me.options;

        me.ensureNoHighlight();

        if (opts.toolTipClose
            && $.inArray('area-mouseout', opts.toolTipClose) >= 0
            && me.activeToolTip)
        {
            me.clearToolTip();
        }
    }

    /**
     * Mouse click event handler
     *
     * @param  {MapData} me The MapData context
     * @param  {EventData} e jQuery event data
     * @return {[type]}   [description]
     */

    function click(me,e) {
        var selected, list, list_target, newSelectionState, canChangeState, cbResult,
            that = this,
            ar = me.getDataForArea(this),
            opts = me.options;

        function clickArea(ar) {
            var areaOpts,target;
            canChangeState = (ar.isSelectable() &&
                (ar.isDeselectable() || !ar.isSelected()));

            if (canChangeState) {
                newSelectionState = !ar.isSelected();
            } else {
                newSelectionState = ar.isSelected();
            }

            list_target = m.getBoundList(opts, ar.key);

            if ($.isFunction(opts.onClick))
            {
                cbResult= opts.onClick.call(that,
                {
                    e: e,
                    listTarget: list_target,
                    key: ar.key,
                    selected: newSelectionState
                });

                if (u.isBool(cbResult)) {
                    if (!cbResult) {
                        return false;
                    }
                    target = $(ar.area).attr('href');
                    if (target!=='#') {
                        window.location.href=target;
                        return false;
                    }
                }
            }

            if (canChangeState) {
                selected = ar.toggle();
            }

            if (opts.boundList && opts.boundList.length > 0) {
                m.setBoundListProperties(opts, list_target, ar.isSelected());
            }

            areaOpts = ar.effectiveOptions();
            if (areaOpts.includeKeys) {
                list = u.split(areaOpts.includeKeys);
                $.each(list, function (i, e) {
                    var ar = me.getDataForKey(e.toString());
                    if (!ar.options.isMask) {
                        clickArea(ar);
                    }
                });
            }
        }

        mousedown.call(this,e);

        if (opts.clickNavigate && ar.href) {
            window.location.href=ar.href;
            return;
        }

        if (ar && !ar.owner.currentAction) {
            opts = me.options;
            clickArea(ar);
        }
    }

    /**
     * Prototype for a MapData object, representing an ImageMapster bound object
     * @param {Element} image   an IMG element
     * @param {object} options  ImageMapster binding options
     */
    m.MapData = function (image, options)
    {
        var me = this;

        // (Image)  main map image

        me.image = image;

        me.images = new m.MapImages(me);
        me.graphics = new m.Graphics(me);

        // save the initial style of the image for unbinding. This is problematic, chrome
        // duplicates styles when assigning, and cssText is apparently not universally supported.
        // Need to do something more robust to make unbinding work universally.

        me.imgCssText = image.style.cssText || null;

        initializeDefaults(me);

        me.configureOptions(options);

        // create context-bound event handlers from our private functions

        me.mouseover = function(e) { mouseover.call(this,me,e); };
        me.mouseout = function(e) { mouseout.call(this,me,e); };
        me.click = function(e) { click.call(this,me,e); };
        me.clearEffects = function(e) { clearEffects.call(this,me,e); };
    };

    m.MapData.prototype = {
        constructor: m.MapData,

         /**
         * Set target.options from defaults + options
         * @param  {[type]} target      The target
         * @param  {[type]} options     The options to merge
         */

        configureOptions: function(options) {
            this.options= u.updateProps({}, m.defaults, options);
        },

        /**
         * Ensure all images are loaded
         * @return {Promise} A promise that resolves when the images have finished loading (or fail)
         */

        bindImages: function() {
            var me=this,
                mi = me.images;

            // reset the images if this is a rebind

            if (mi.length>2) {
                mi.splice(2);
            } else if (mi.length===0) {

                // add the actual main image
                mi.add(me.image);
                // will create a duplicate of the main image, we need this to get raw size info
                mi.add(me.image.src);
            }

            configureAltImages(me);

            return me.images.bind();
        },

        /**
         * Test whether an async action is currently in progress
         * @return {Boolean} true or false indicating state
         */

        isActive: function() {
            return !this.complete || this.currentAction;
        },

        /**
         * Return an object indicating the various states. This isn't really used by
         * production code.
         *
         * @return {object} An object with properties for various states
         */

        state: function () {
            return {
                complete: this.complete,
                resizing: this.currentAction==='resizing',
                zoomed: this.zoomed,
                zoomedArea: this.zoomedArea,
                scaleInfo: this.scaleInfo
            };
        },

        /**
         * Get a unique ID for the wrapper of this imagemapster
         * @return {string} A string that is unique to this image
         */

        wrapId: function () {
            return 'mapster_wrap_' + this.index;
        },
        _idFromKey: function (key) {
            return typeof key === "string" && this._xref.hasOwnProperty(key) ?
                        this._xref[key] : -1;
        },

        /**
         * Return a comma-separated string of all selected keys
         * @return {string} CSV of all keys that are currently selected
         */

        getSelected: function () {
            var result = '';
            $.each(this.data, function (i,e) {
                if (e.isSelected()) {
                    result += (result ? ',' : '') + this.key;
                }
            });
            return result;
        },

        /**
         * Get an array of MapAreas associated with a specific AREA based on the keys for that area
         * @param  {Element} area   An HTML AREA
         * @param  {number} atMost  A number limiting the number of areas to be returned (typically 1 or 0 for no limit)
         * @return {MapArea[]}      Array of MapArea objects
         */

        getAllDataForArea:function (area,atMost) {
            var i,ar, result,
                me=this,
                key = $(area).filter('area').attr(me.options.mapKey);

            if (key) {
                result=[];
                key = u.split(key);

                for (i=0;i<(atMost || key.length);i++) {
                    ar = me.data[me._idFromKey(key[i])];
                    ar.area=area.length ? area[0]:area;
                    // set the actual area moused over/selected
                    // TODO: this is a brittle model for capturing which specific area - if this method was not used,
                    // ar.area could have old data. fix this.
                    result.push(ar);
                }
            }

            return result;
        },
        getDataForArea: function(area) {
            var ar=this.getAllDataForArea(area,1);
            return ar ? ar[0] || null : null;
        },
        getDataForKey: function (key) {
            return this.data[this._idFromKey(key)];
        },

        /**
         * Get the primary keys associated with an area group.
         * If this is a primary key, it will be returned.
         *
         * @param  {string key An area key
         * @return {string} A CSV of area keys
         */

        getKeysForGroup: function(key) {
            var ar=this.getDataForKey(key);

            return !ar ? '':
                ar.isPrimary ?
                    ar.key :
                    this.getPrimaryKeysForMapAreas(ar.areas()).join(',');
        },

        /**
         * given an array of MapArea object, return an array of its unique primary keys
         * @param  {MapArea[]} areas The areas to analyze
         * @return {string[]} An array of unique primary keys
         */

        getPrimaryKeysForMapAreas: function(areas)
        {
            var keys=[];
            $.each(areas,function(i,e) {
                if ($.inArray(e.keys[0],keys)<0) {
                    keys.push(e.keys[0]);
                }
            });
            return keys;
        },
        getData: function (obj) {
            if (typeof obj === 'string') {
                return this.getDataForKey(obj);
            } else if (obj && obj.mapster || u.isElement(obj)) {
                return this.getDataForArea(obj);
            } else {
                return null;
            }
        },
        // remove highlight if present, raise event
        ensureNoHighlight: function () {
            var ar;
            if (this.highlightId >= 0) {
                this.graphics.clearHighlight();
                ar = this.data[this.highlightId];
                ar.changeState('highlight', false);
                this.setHighlightId(-1);
            }
        },
        setHighlightId: function(id) {
            this.highlightId = id;
        },

        /**
         * Clear all active selections on this map
         */

        clearSelections: function () {
            $.each(this.data, function (i,e) {
                if (e.selected) {
                    e.deselect(true);
                 }
            });
            this.removeSelectionFinish();

        },

        /**
         * Set area options from an array of option data.
         *
         * @param {object[]} areas An array of objects containing area-specific options
         */

        setAreaOptions: function (areas) {
            var i, area_options, ar;
            areas = areas || [];

            // refer by: map_data.options[map_data.data[x].area_option_id]

            for (i = areas.length - 1; i >= 0; i--) {
                area_options = areas[i];
                if (area_options) {
                    ar = this.getDataForKey(area_options.key);
                    if (ar) {
                        u.updateProps(ar.options, area_options);

                        // TODO: will not deselect areas that were previously selected, so this only works
                        // for an initial bind.

                        if (u.isBool(area_options.selected)) {
                            ar.selected = area_options.selected;
                        }
                    }
                }
            }
        },
        // keys: a comma-separated list
        drawSelections: function (keys) {
            var i, key_arr = u.asArray(keys);

            for (i = key_arr.length - 1; i >= 0; i--) {
                this.data[key_arr[i]].drawSelection();
            }
        },
        redrawSelections: function () {
            $.each(this.data, function (i, e) {
                if (e.isSelectedOrStatic()) {
                    e.drawSelection();
                }
            });

        },
        ///called when images are done loading
        initialize: function () {
            var imgCopy, base_canvas, overlay_canvas, wrap, parentId, css, i,size,
                img,sort_func, sorted_list,  scale,
                        me = this,
                        opts = me.options;

            if (me.complete) {
                return;
            }

            img = $(me.image);

            parentId = img.parent().attr('id');

            // create a div wrapper only if there's not already a wrapper, otherwise, own it

            if (parentId && parentId.length >= 12 && parentId.substring(0, 12) === "mapster_wrap") {
                wrap = img.parent();
                wrap.attr('id', me.wrapId());
            } else {
                wrap = $('<div id="' + me.wrapId() + '"></div>');

                if (opts.wrapClass) {
                    if (opts.wrapClass === true) {
                        wrap.addClass(img[0].className);
                    }
                    else {
                        wrap.addClass(opts.wrapClass);
                    }
                }
            }
            me.wrapper = wrap;

            // me.images[1] is the copy of the original image. It should be loaded & at its native size now so we can obtain the true
            // width & height. This is needed to scale the imagemap if not being shown at its native size. It is also needed purely
            // to finish binding in case the original image was not visible. It can be impossible in some browsers to obtain the
            // native size of a hidden image.

            me.scaleInfo = scale = u.scaleMap(me.images[0],me.images[1], opts.scaleMap);

            me.base_canvas = base_canvas = me.graphics.createVisibleCanvas(me);
            me.overlay_canvas = overlay_canvas = me.graphics.createVisibleCanvas(me);

            // Now we got what we needed from the copy -clone from the original image again to make sure any other attributes are copied
            imgCopy = $(me.images[1])
                .addClass('mapster_el '+ me.images[0].className)
                .attr({id:null, usemap: null});

            size=u.size(me.images[0]);

            if (size.complete) {
                imgCopy.css({
                    width: size.width,
                    height: size.height
                });
            }

            me.buildDataset();

            // now that we have processed all the areas, set css for wrapper, scale map if needed

            css = {
                display: 'block',
                position: 'relative',
                padding: 0,
                width: scale.width,
                height: scale.height
            };

            if (opts.wrapCss) {
                $.extend(css, opts.wrapCss);
            }
            // if we were rebinding with an existing wrapper, the image will aready be in it
            if (img.parent()[0] !== me.wrapper[0]) {

                img.before(me.wrapper);
            }

            wrap.css(css);

            // move all generated images into the wrapper for easy removal later

            $(me.images.slice(2)).hide();
            for (i = 1; i < me.images.length; i++) {
                wrap.append(me.images[i]);
            }

            //me.images[1].style.cssText = me.image.style.cssText;

            wrap.append(base_canvas)
                        .append(overlay_canvas)
                        .append(img.css(m.canvas_style));

            // images[0] is the original image with map, images[1] is the copy/background that is visible

            u.setOpacity(me.images[0], 0);
            $(me.images[1]).show();

            u.setOpacity(me.images[1],1);

            if (opts.isSelectable && opts.onGetList) {
                sorted_list = me.data.slice(0);
                if (opts.sortList) {
                    if (opts.sortList === "desc") {
                        sort_func = function (a, b) {
                            return a === b ? 0 : (a > b ? -1 : 1);
                        };
                    }
                    else {
                        sort_func = function (a, b) {
                            return a === b ? 0 : (a < b ? -1 : 1);
                        };
                    }

                    sorted_list.sort(function (a, b) {
                        a = a.value;
                        b = b.value;
                        return sort_func(a, b);
                    });
                }

                me.options.boundList = opts.onGetList.call(me.image, sorted_list);
            }

            me.complete=true;
            me.processCommandQueue();

            if (opts.onConfigured && typeof opts.onConfigured === 'function') {
                opts.onConfigured.call(img, true);
            }
        },

        // when rebind is true, the MapArea data will not be rebuilt.
        buildDataset: function(rebind) {
            var sel,areas,j,area_id,$area,area,curKey,mapArea,key,keys,mapAreaId,group_value,dataItem,href,
                me=this,
                opts=me.options,
                default_group;

            function addAreaData(key, value) {
                var dataItem = new m.AreaData(me, key, value);
                dataItem.areaId = me._xref[key] = me.data.push(dataItem) - 1;
                return dataItem.areaId;
            }

            me._xref = {};
            me.data = [];
            if (!rebind) {
                me.mapAreas=[];
            }

            default_group = !opts.mapKey;
            if (default_group) {
                opts.mapKey = 'data-mapster-key';
            }

            // the [attribute] selector is broken on old IE with jQuery. hasVml() is a quick and dirty
            // way to test for that

            sel = m.hasVml() ? 'area' :
                        (default_group ?
                            'area[coords]' :
                            'area[' + opts.mapKey + ']');

            areas = $(me.map).find(sel).unbind('.mapster');

            for (mapAreaId = 0;mapAreaId<areas.length; mapAreaId++) {
                area_id = 0;
                area = areas[mapAreaId];
                $area = $(area);

                // skip areas with no coords - selector broken for older ie
                if (!area.coords) {
                    continue;
                }
                // Create a key if none was assigned by the user

                if (default_group) {
                     curKey=String(mapAreaId);
                    $area.attr('data-mapster-key', curKey);

                } else {
                    curKey = area.getAttribute(opts.mapKey);
                }

                // conditions for which the area will be bound to mouse events
                // only bind to areas that don't have nohref. ie 6&7 cannot detect the presence of nohref, so we have to also not bind if href is missing.

                if (rebind) {
                    mapArea = me.mapAreas[$area.data('mapster')-1];
                    mapArea.configure(curKey);
                } else {
                    mapArea = new m.MapArea(me, area,curKey);
                    me.mapAreas.push(mapArea);
                }

                keys = mapArea.keys; // converted to an array by mapArea


                // Iterate through each mapKey assigned to this area
                for (j = keys.length - 1; j >= 0; j--) {
                    key = keys[j];

                    if (opts.mapValue) {
                        group_value = $area.attr(opts.mapValue);
                    }
                    if (default_group) {
                        // set an attribute so we can refer to the area by index from the DOM object if no key
                        area_id = addAreaData(me.data.length, group_value);
                        dataItem = me.data[area_id];
                        dataItem.key = key = area_id.toString();
                    }
                    else {
                        area_id = me._xref[key];
                        if (area_id >= 0) {
                            dataItem = me.data[area_id];
                            if (group_value && !me.data[area_id].value) {
                                dataItem.value = group_value;
                            }
                        }
                        else {
                            area_id = addAreaData(key, group_value);
                            dataItem = me.data[area_id];
                            dataItem.isPrimary=j===0;
                        }
                    }
                    mapArea.areaDataXref.push(area_id);
                    dataItem.areasXref.push(mapAreaId);
                }

                //href=$area.attr('href');
                href = $area.attr('data-hotspot-id');
                if (href && href!=='#' && !dataItem.href)
                {
                    dataItem.href=href;
                }

                if (!mapArea.nohref) {
                    $area.bind('click.mapster', me.click)
                        .bind('mouseover.mapster, touchstart.mapster', me.mouseover)
                        .bind('mouseout.mapster, touchend.mapster', me.mouseout)
                        .bind('mousedown.mapster', me.mousedown);



                }

                // store an ID with each area.
                $area.data("mapster", mapAreaId+1);
            }

            // TODO listenToList
            //            if (opts.listenToList && opts.nitG) {
            //                opts.nitG.bind('click.mapster', event_hooks[map_data.hooks_index].listclick_hook);
            //            }

            // populate areas from config options
            me.setAreaOptions(opts.areas);
            me.redrawSelections();

        },
        processCommandQueue: function() {

            var cur,me=this;
            while (!me.currentAction && me.commands.length) {
                cur = me.commands[0];
                me.commands.splice(0,1);
                m.impl[cur.command].apply(cur.that, cur.args);
            }
        },
        clearEvents: function () {
            $(this.map).find('area')
                        .unbind('.mapster');
            $(this.images)
                        .unbind('.mapster');
        },
        _clearCanvases: function (preserveState) {
            // remove the canvas elements created
            if (!preserveState) {
                $(this.base_canvas).remove();
            }
            $(this.overlay_canvas).remove();
        },
        clearMapData: function (preserveState) {
            var me = this;
            this._clearCanvases(preserveState);

            // release refs to DOM elements
            $.each(this.data, function (i, e) {
                e.reset();
            });
            this.data = null;
            if (!preserveState) {
                // get rid of everything except the original image
                this.image.style.cssText = this.imgCssText;
                $(this.wrapper).before(this.image).remove();
            }

            me.images.clear();

            this.image = null;
            u.ifFunction(this.clearTooltip, this);
        },

        // Compelete cleanup process for deslecting items. Called after a batch operation, or by AreaData for single
        // operations not flagged as "partial"

        removeSelectionFinish: function () {
            var g = this.graphics;

            g.refreshSelections();
            // do not call ensure_no_highlight- we don't really want to unhilight it, just remove the effect
            g.clearHighlight();
        }
    };
} (jQuery));
/* areadata.js
   AreaData and MapArea protoypes
*/

(function ($) {
    var m = $.mapster, u = m.utils;

    /**
     * Select this area
     *
     * @param {AreaData} me  AreaData context
     * @param {object} options Options for rendering the selection
     */
    function select(options) {
        // need to add the new one first so that the double-opacity effect leaves the current one highlighted for singleSelect

        var me=this, o = me.owner;
        if (o.options.singleSelect) {
            o.clearSelections();
        }

        // because areas can overlap - we can't depend on the selection state to tell us anything about the inner areas.
        // don't check if it's already selected
        if (!me.isSelected()) {
            if (options) {

                // cache the current options, and map the altImageId if an altimage
                // was passed

                me.optsCache = $.extend(me.effectiveRenderOptions('select'),
                    options,
                    {
                        altImageId: o.images.add(options.altImage)
                    });
            }

            me.drawSelection();

            me.selected = true;
            me.changeState('select', true);
        }

        if (o.options.singleSelect) {
            o.graphics.refreshSelections();
        }
    }

    /**
     * Deselect this area, optionally deferring finalization so additional areas can be deselected
     * in a single operation
     *
     * @param  {boolean} partial when true, the caller must invoke "finishRemoveSelection" to render
     */

    function deselect(partial) {
        var me=this;
        me.selected = false;
        me.changeState('select', false);

        // release information about last area options when deselecting.

        me.optsCache=null;
        me.owner.graphics.removeSelections(me.areaId);

        // Complete selection removal process. This is separated because it's very inefficient to perform the whole
        // process for multiple removals, as the canvas must be totally redrawn at the end of the process.ar.remove

        if (!partial) {
            me.owner.removeSelectionFinish();
        }
    }

    /**
     * Toggle the selection state of this area
     * @param  {object} options Rendering options, if toggling on
     * @return {bool} The new selection state
     */
    function toggle(options) {
        var me=this;
        if (!me.isSelected()) {
            me.select(options);
        }
        else {
            me.deselect();
        }
        return me.isSelected();
    }

    /**
     * An AreaData object; represents a conceptual area that can be composed of
     * one or more MapArea objects
     *
     * @param {MapData} owner The MapData object to which this belongs
     * @param {string} key   The key for this area
     * @param {string} value The mapValue string for this area
     */

    m.AreaData = function (owner, key, value) {
        $.extend(this,{
            owner: owner,
            key: key || '',
            // means this represents the first key in a list of keys (it's the area group that gets highlighted on mouseover)
            isPrimary: true,
            areaId: -1,
            href: '',
            value: value || '',
            options:{},
            // "null" means unchanged. Use "isSelected" method to just test true/false
            selected: null,
            // xref to MapArea objects
            areasXref: [],
            // (temporary storage) - the actual area moused over
            area: null,
            // the last options used to render this. Cache so when re-drawing after a remove, changes in options won't
            // break already selected things.
            optsCache: null
         });
    };

    /**
     * The public API for AreaData object
     */

    m.AreaData.prototype = {
        constuctor: m.AreaData,
        select: select,
        deselect: deselect,
        toggle: toggle,
        areas: function() {
            var i,result=[];
            for (i=0;i<this.areasXref.length;i++) {
                result.push(this.owner.mapAreas[this.areasXref[i]]);
            }
            return result;
        },
        // return all coordinates for all areas
        coords: function(offset) {
            var coords = [];
            $.each(this.areas(), function (i, el) {
                coords = coords.concat(el.coords(offset));
            });
            return coords;
        },
        reset: function () {
            $.each(this.areas(), function (i, e) {
                e.reset();
            });
            this.areasXref = [];
            this.options = null;
        },
        // Return the effective selected state of an area, incorporating staticState
        isSelectedOrStatic: function () {

            var o = this.effectiveOptions();
            return u.isBool(o.staticState) ? o.staticState :
                        this.isSelected();
        },
        isSelected: function () {
            return u.isBool(this.selected) ? this.selected :
                u.isBool(this.owner.area_options.selected) ? this.owner.area_options.selected : false;
        },
        isSelectable: function () {
            return u.isBool(this.effectiveOptions().staticState) ? false :
                        (u.isBool(this.owner.options.staticState) ? false : u.boolOrDefault(this.effectiveOptions().isSelectable,true));
        },
        isDeselectable: function () {
            return u.isBool(this.effectiveOptions().staticState) ? false :
                        (u.isBool(this.owner.options.staticState) ? false : u.boolOrDefault(this.effectiveOptions().isDeselectable,true));
        },
        isNotRendered: function() {
            var area = $(this.area);
            return area.attr('nohref') ||
                !area.attr('href') ||
                this.effectiveOptions().isMask;

        },


         /**
         * Return the overall options effective for this area.
         * This should get the default options, and merge in area-specific options, finally
         * overlaying options passed by parameter
         *
         * @param  {[type]} options  options which will supercede all other options for this area
         * @return {[type]}          the combined options
         */

        effectiveOptions: function (options) {

            var opts = u.updateProps({},
                    this.owner.area_options,
                    this.options,
                    options || {},
                    {
                        id: this.areaId
                    }
                );

            opts.selected = this.isSelected();

            return opts;
        },

        /**
         * Return the options effective for this area for a "render" or "highlight" mode.
         * This should get the default options, merge in the areas-specific options,
         * and then the mode-specific options.
         * @param  {string} mode    'render' or 'highlight'
         * @param  {[type]} options  options which will supercede all other options for this area
         * @return {[type]}          the combined options
         */

        effectiveRenderOptions: function (mode, options) {
            var allOpts,opts=this.optsCache;

            if (!opts || mode==='highlight') {
                allOpts = this.effectiveOptions(options);
                opts = u.updateProps({},
                    allOpts,
                    allOpts["render_" + mode]
                );

                if (mode!=='highlight') {
                    this.optsCache=opts;
                }
            }
            return $.extend({},opts);
        },

        // Fire callback on area state change
        changeState: function (state_type, state) {
            if ($.isFunction(this.owner.options.onStateChange)) {
                this.owner.options.onStateChange.call(this.owner.image,
                    {
                        key: this.key,
                        state: state_type,
                        selected: state
                    }
                );
            }
        },

        // highlight this area

        highlight: function (options) {
            var o = this.owner;
            if (this.effectiveOptions().highlight) {
                o.graphics.addShapeGroup(this, "highlight",options);
            }
            o.setHighlightId(this.areaId);
            this.changeState('highlight', true);
        },

        // select this area. if "callEvent" is true then the state change event will be called. (This method can be used
        // during config operations, in which case no event is indicated)

        drawSelection: function () {


            this.owner.graphics.addShapeGroup(this, "select");

        }


    };
    // represents an HTML area
    m.MapArea = function (owner,areaEl,keys) {
        if (!owner) {
            return;
        }
        var me = this;
        me.owner = owner;   // a MapData object
        me.area = areaEl;
        me.areaDataXref=[]; // a list of map_data.data[] id's for each areaData object containing this
        me.originalCoords = [];
        $.each(u.split(areaEl.coords), function (i, el) {
            me.originalCoords.push(parseFloat(el));
        });
        me.length = me.originalCoords.length;
        me.shape = areaEl.shape.toLowerCase();
        me.nohref = areaEl.nohref || !areaEl.href;
        me.configure(keys);
    };
    m.MapArea.prototype= {
        constructor: m.MapArea,
        configure: function(keys) {
            this.keys = u.split(keys);
        },
        reset: function() {
            this.area=null;
        },
        coords: function (offset) {
            return $.map(this.originalCoords,function(e) {
                return offset ? e : e+offset;
            });
        }
    };
} (jQuery));
/* areacorners.js
   determine the best place to put a box of dimensions (width,height) given a circle, rect or poly
*/

(function ($) {
    var u=$.mapster.utils;


    /**
     * Compute positions that will place a target with dimensions [width,height] outside
     * but near the boundaries of the elements "elements". When an imagemap is passed, the
     *
     * @param  {Element|Element[]} elements An element or an array of elements (such as a jQuery object)
     * @param  {Element} image The image to which area elements are bound, if this is an image map.
     * @param  {Element} container The contianer in which the target must be constrained (or document, if missing)
     * @param  {int} width The width of the target object
     * @return {object} a structure with the x and y positions
     */
    u.areaCorners = function (elements, image, container, width, height) {
        var pos,found, minX, minY, maxX, maxY, bestMinX, bestMaxX, bestMinY, bestMaxY, curX, curY, nest, j,
           offsetx=0,
           offsety=0,
           rootx,
           rooty,
           iCoords,radius,angle,el,
           coords=[];

        // if a single element was passed, map it to an array

        elements = elements.length ?
            elements:
            [elements];

        container = container ?
            $(container):
            $(document.body);

        // get the relative root of calculation

        pos = container.offset();
        rootx = pos.left;
        rooty = pos.top;

        // with areas, all we know about is relative to the top-left corner of the image. We need to add an offset compared to
        // the actual container. After this calculation, offsetx/offsety can be added to either the area coords, or the target's
        // absolute position to get the correct top/left boundaries of the container.

        if (image) {
            pos = $(image).offset();
            offsetx = pos.left;
            offsety = pos.top;
        }

        // map the coordinates of any type of shape to a poly and use the logic. simpler than using three different
        // calculation methods. Circles use a 20 degree increment for this estimation.

        for (j=0;j<elements.length;j++)
        {
            el=elements[j];
            if (el.nodeName==='AREA') {
                iCoords = u.split(el.coords,parseInt);

                switch(el.shape) {
                    case 'circle':
                        curX=iCoords[0];
                        curY=iCoords[1];
                        radius=iCoords[2];
                        coords=[];
                        for (j=0;j<360;j+=20) {
                             angle=j*Math.PI/180;
                             coords.push(curX+radius*Math.cos(angle),curY+radius*Math.sin(angle));
                        }
                        break;
                      case 'rect':
                          coords.push(iCoords[0],iCoords[1],iCoords[2],iCoords[1],iCoords[2],iCoords[3],iCoords[0],iCoords[3]);
                          break;
                      default:
                          coords=coords.concat(iCoords);
                         break;
                }

                // map area positions to it's real position in the container

                for (j=0;j<coords.length;j+=2)
                {
                    coords[j]=parseInt(coords[j],10)+offsetx;
                    coords[j+1]=parseInt(coords[j+1],10)+offsety;
                }
            } else {
                el=$(el);
                pos = el.position();
                coords.push(pos.left,pos.top,
                            pos.left+el.width(),pos.top,
                            pos.left+el.width(),pos.top+el.height(),
                            pos.left,pos.top+el.height());

            }
        }

        minX = minY = bestMinX = bestMinY = 999999;
        maxX = maxY = bestMaxX = bestMaxY = -1;

        for (j = coords.length - 2; j >= 0; j -= 2) {
            curX = coords[j];
            curY = coords[j + 1];

            if (curX < minX) {
                minX = curX;
                bestMaxY = curY;
            }
            if (curX > maxX) {
                maxX = curX;
                bestMinY = curY;
            }
            if (curY < minY) {
                minY = curY;
                bestMaxX = curX;
            }
            if (curY > maxY) {
                maxY = curY;
                bestMinX = curX;
            }

        }

        // try to figure out the best place for the tooltip

        if (width && height) {
            found=false;
            $.each([[bestMaxX - width, minY - height], [bestMinX, minY - height],
                             [minX - width, bestMaxY - height], [minX - width, bestMinY],
                             [maxX,bestMaxY - height], [ maxX,bestMinY],
                             [bestMaxX - width, maxY], [bestMinX, maxY]
                      ],function (i, e) {
                          if (!found && (e[0] > rootx && e[1] > rooty)) {
                              nest = e;
                              found=true;
                              return false;
                  }
             });

             // default to lower-right corner if nothing fit inside the boundaries of the image

             if (!found) {
                 nest=[maxX,maxY];
             }
        }
        return nest;
    };
} (jQuery));
/* scale.js: resize and zoom functionality
   requires areacorners.js, when.js
*/


(function ($) {
    var m = $.mapster, u = m.utils, p = m.MapArea.prototype;

    m.utils.getScaleInfo = function (eff, actual) {
        var pct;
        if (!actual) {
            pct = 1;
            actual=eff;
        } else {
            pct = eff.width / actual.width || eff.height / actual.height;
            // make sure a float error doesn't muck us up
            if (pct > 0.98 && pct < 1.02) { pct = 1; }
        }
        return {
            scale: (pct !== 1),
            scalePct: pct,
            realWidth: actual.width,
            realHeight: actual.height,
            width: eff.width,
            height: eff.height,
            ratio: eff.width / eff.height
        };
    };
    // Scale a set of AREAs, return old data as an array of objects
    m.utils.scaleMap = function (image, imageRaw, scale) {

        // stunningly, jQuery width can return zero even as width does not, seems to happen only
        // with adBlock or maybe other plugins. These must interfere with onload events somehow.


        var vis=u.size(image),
            raw=u.size(imageRaw,true);

        if (!raw.complete()) {
            throw("Another script, such as an extension, appears to be interfering with image loading. Please let us know about this.");
        }
        if (!vis.complete()) {
            vis=raw;
        }
        return this.getScaleInfo(vis, scale ? raw : null);
    };

    /**
     * Resize the image map. Only one of newWidth and newHeight should be passed to preserve scale
     *
     * @param  {int}   width       The new width OR an object containing named parameters matching this function sig
     * @param  {int}   height      The new height
     * @param  {int}   effectDuration Time in ms for the resize animation, or zero for no animation
     * @param  {function} callback    A function to invoke when the operation finishes
     * @return {promise}              NOT YET IMPLEMENTED
     */

    m.MapData.prototype.resize = function (width, height, duration, callback) {
        var p,promises,newsize,els, highlightId, ratio,
            me = this;

        // allow omitting duration
        callback = callback || duration;

        function sizeCanvas(canvas, w, h) {
            if (m.hasCanvas()) {
                canvas.width = w;
                canvas.height = h;
            } else {
                $(canvas).width(w);
                $(canvas).height(h);
            }
        }

        // Finalize resize action, do callback, pass control to command queue

        function cleanupAndNotify() {

            me.currentAction = '';

            if ($.isFunction(callback)) {
                callback();
            }

            me.processCommandQueue();
        }

        // handle cleanup after the inner elements are resized

        function finishResize() {
            sizeCanvas(me.overlay_canvas, width, height);

            // restore highlight state if it was highlighted before
            if (highlightId >= 0) {
                var areaData = me.data[highlightId];
                areaData.tempOptions = { fade: false };
                me.getDataForKey(areaData.key).highlight();
                areaData.tempOptions = null;
            }
            sizeCanvas(me.base_canvas, width, height);
            me.redrawSelections();
            cleanupAndNotify();
        }

        function resizeMapData() {
            $(me.image).css(newsize);
            // start calculation at the same time as effect
            me.scaleInfo = u.getScaleInfo({
                    width: width,
                    height: height
                },
                {
                    width: me.scaleInfo.realWidth,
                    height: me.scaleInfo.realHeight
                });
            $.each(me.data, function (i, e) {
                $.each(e.areas(), function (i, e) {
                    e.resize();
                });
            });
        }

        if (me.scaleInfo.width === width && me.scaleInfo.height === height) {
            return;
        }

        highlightId = me.highlightId;


        if (!width) {
            ratio = height / me.scaleInfo.realHeight;
            width = Math.round(me.scaleInfo.realWidth * ratio);
        }
        if (!height) {
            ratio = width / me.scaleInfo.realWidth;
            height = Math.round(me.scaleInfo.realHeight * ratio);
        }

        newsize = { 'width': String(width) + 'px', 'height': String(height) + 'px' };
        if (!m.hasCanvas()) {
            $(me.base_canvas).children().remove();
        }

        // resize all the elements that are part of the map except the image itself (which is not visible)
        // but including the div wrapper
        els = $(me.wrapper).find('.mapster_el').add(me.wrapper);

        if (duration) {
            promises = [];
            me.currentAction = 'resizing';
            els.each(function (i, e) {
                p = u.defer();
                promises.push(p);

                $(e).animate(newsize, {
                    duration: duration,
                    complete: p.resolve,
                    easing: "linear"
                });
            });

            p = u.defer();
            promises.push(p);

            // though resizeMapData is not async, it needs to be finished just the same as the animations,
            // so add it to the "to do" list.

            u.when.all(promises).then(finishResize);
            resizeMapData();
            p.resolve();
        } else {
            els.css(newsize);
            resizeMapData();
            finishResize();

        }
    };


    m.MapArea = u.subclass(m.MapArea, function () {
        //change the area tag data if needed
        this.base.init();
        if (this.owner.scaleInfo.scale) {
            this.resize();
        }
    });

    p.coords = function (percent, coordOffset) {
        var j, newCoords = [],
                    pct = percent || this.owner.scaleInfo.scalePct,
                    offset = coordOffset || 0;

        if (pct === 1 && coordOffset === 0) {
            return this.originalCoords;
        }

        for (j = 0; j < this.length; j++) {
            //amount = j % 2 === 0 ? xPct : yPct;
            newCoords.push(Math.round(this.originalCoords[j] * pct) + offset);
        }
        return newCoords;
    };
    p.resize = function () {
        this.area.coords = this.coords().join(',');
    };

    p.reset = function () {
        this.area.coords = this.coords(1).join(',');
    };

    m.impl.resize = function (width, height, duration, callback) {
        if (!width && !height) {
            return false;
        }
        var x= (new m.Method(this,
                function () {
                    this.resize(width, height, duration, callback);
                },
                null,
                {
                    name: 'resize',
                    args: arguments
                }
            )).go();
        return x;
    };

/*
    m.impl.zoom = function (key, opts) {
        var options = opts || {};

        function zoom(areaData) {
            // this will be MapData object returned by Method

            var scroll, corners, height, width, ratio,
                    diffX, diffY, ratioX, ratioY, offsetX, offsetY, newWidth, newHeight, scrollLeft, scrollTop,
                    padding = options.padding || 0,
                    scrollBarSize = areaData ? 20 : 0,
                    me = this,
                    zoomOut = false;

            if (areaData) {
                // save original state on first zoom operation
                if (!me.zoomed) {
                    me.zoomed = true;
                    me.preZoomWidth = me.scaleInfo.width;
                    me.preZoomHeight = me.scaleInfo.height;
                    me.zoomedArea = areaData;
                    if (options.scroll) {
                        me.wrapper.css({ overflow: 'auto' });
                    }
                }
                corners = $.mapster.utils.areaCorners(areaData.coords(1, 0));
                width = me.wrapper.innerWidth() - scrollBarSize - padding * 2;
                height = me.wrapper.innerHeight() - scrollBarSize - padding * 2;
                diffX = corners.maxX - corners.minX;
                diffY = corners.maxY - corners.minY;
                ratioX = width / diffX;
                ratioY = height / diffY;
                ratio = Math.min(ratioX, ratioY);
                offsetX = (width - diffX * ratio) / 2;
                offsetY = (height - diffY * ratio) / 2;

                newWidth = me.scaleInfo.realWidth * ratio;
                newHeight = me.scaleInfo.realHeight * ratio;
                scrollLeft = (corners.minX) * ratio - padding - offsetX;
                scrollTop = (corners.minY) * ratio - padding - offsetY;
            } else {
                if (!me.zoomed) {
                    return;
                }
                zoomOut = true;
                newWidth = me.preZoomWidth;
                newHeight = me.preZoomHeight;
                scrollLeft = null;
                scrollTop = null;
            }

            this.resize({
                width: newWidth,
                height: newHeight,
                duration: options.duration,
                scroll: scroll,
                scrollLeft: scrollLeft,
                scrollTop: scrollTop,
                // closure so we can be sure values are correct
                callback: (function () {
                    var isZoomOut = zoomOut,
                            scroll = options.scroll,
                            areaD = areaData;
                    return function () {
                        if (isZoomOut) {
                            me.preZoomWidth = null;
                            me.preZoomHeight = null;
                            me.zoomed = false;
                            me.zoomedArea = false;
                            if (scroll) {
                                me.wrapper.css({ overflow: 'inherit' });
                            }
                        } else {
                            // just to be sure it wasn't canceled & restarted
                            me.zoomedArea = areaD;
                        }
                    };
                } ())
            });
        }
        return (new m.Method(this,
                function (opts) {
                    zoom.call(this);
                },
                function () {
                    zoom.call(this.owner, this);
                },
                {
                    name: 'zoom',
                    args: arguments,
                    first: true,
                    key: key
                }
                )).go();


    };
    */
} (jQuery));
/* tooltip.js - tooltip functionality
   requires areacorners.js
*/

(function ($) {

    var m = $.mapster, u = m.utils;

    $.extend(m.defaults, {
        toolTipContainer: '<div style="border: 2px solid black; background: #EEEEEE; width:160px; padding:4px; margin: 4px; -moz-box-shadow: 3px 3px 5px #535353; ' +
        '-webkit-box-shadow: 3px 3px 5px #535353; box-shadow: 3px 3px 5px #535353; -moz-border-radius: 6px 6px 6px 6px; -webkit-border-radius: 6px; ' +
        'border-radius: 6px 6px 6px 6px; opacity: 0.9;"></div>',
        showToolTip: false,
        toolTipFade: true,
        toolTipClose: ['area-mouseout','image-mouseout'],
        onShowToolTip: null,
        onHideToolTip: null
    });

    $.extend(m.area_defaults, {
        toolTip: null,
        toolTipClose: null
    });


    /**
     * Show a tooltip positioned near this area.
     *
     * @param {string|jquery} html A string of html or a jQuery object containing the tooltip content.
     * @param {string|jquery} [template] The html template in which to wrap the content
     * @param {string|object} [css] CSS to apply to the outermost element of the tooltip
     * @return {jquery} The tooltip that was created
     */

    function createToolTip(html, template, css) {
        var tooltip;

        // wrap the template in a jQuery object, or clone the template if it's already one.
        // This assumes that anything other than a string is a jQuery object; if it's not jQuery will
        // probably throw an error.

        if (template) {
            tooltip = typeof template === 'string' ?
                $(template) :
                $(template).clone();

            tooltip.append(html);
        } else {
            tooltip=$(html);
        }

        // always set display to block, or the positioning css won't work if the end user happened to
        // use a non-block type element.

        tooltip.css($.extend((css || {}),{
                display:"block",
                position:"absolute"
            })).hide();

        $('body').append(tooltip);

        // we must actually add the tooltip to the DOM and "show" it in order to figure out how much space it
        // consumes, and then reposition it with that knowledge.
        // We also cache the actual opacity setting to restore finally.

        tooltip.attr("data-opacity",tooltip.css("opacity"))
            .css("opacity",0);

        // doesn't really show it because opacity=0

        return tooltip.show();
    }


    /**
     * Show a tooltip positioned near this area.
     *
     * @param {jquery} tooltip The tooltip
     * @param {object} [options] options for displaying the tooltip.
     *  @config {int} [left] The 0-based absolute x position for the tooltip
     *  @config {int} [top] The 0-based absolute y position for the tooltip
     *  @config {string|object} [css] CSS to apply to the outermost element of the tooltip
     *  @config {bool} [fadeDuration] When non-zero, the duration in milliseconds of a fade-in effect for the tooltip.
     */

    function showToolTipImpl(tooltip,options)
    {
        var tooltipCss = {
                "left":  options.left + "px",
                "top": options.top + "px"
            },
            actalOpacity=tooltip.attr("data-opacity") || 0,
            zindex = tooltip.css("z-index");

        if (parseInt(zindex,10)===0
            || zindex === "auto") {
            tooltipCss["z-index"] = 9999;
        }

        tooltip.css(tooltipCss)
            .addClass('mapster_tooltip');


        if (options.fadeDuration && options.fadeDuration>0) {
            u.fader(tooltip[0], 0, actalOpacity, options.fadeDuration);
        } else {
            u.setOpacity(tooltip[0], actalOpacity);
        }
    }

    /**
     * Hide and remove active tooltips
     *
     * @param  {MapData} this The mapdata object to which the tooltips belong
     */

    m.MapData.prototype.clearToolTip = function() {
        if (this.activeToolTip) {
            this.activeToolTip.stop().remove();
            this.activeToolTip = null;
            this.activeToolTipID = null;
            u.ifFunction(this.options.onHideToolTip, this);
        }
    };

    /**
     * Configure the binding between a named tooltip closing option, and a mouse event.
     *
     * If a callback is passed, it will be called when the activating event occurs, and the tooltip will
     * only closed if it returns true.
     *
     * @param  {MapData}  [this]     The MapData object to which this tooltip belongs.
     * @param  {String}   option     The name of the tooltip closing option
     * @param  {String}   event      UI event to bind to this option
     * @param  {Element}  target     The DOM element that is the target of the event
     * @param  {Function} [beforeClose] Callback when the tooltip is closed
     * @param  {Function} [onClose]  Callback when the tooltip is closed
     */
    function bindToolTipClose(options, bindOption, event, target, beforeClose, onClose) {
        var event_name = event + '.mapster-tooltip';

        if ($.inArray(bindOption, options) >= 0) {
            target.unbind(event_name)
                .bind(event_name, function (e) {
                    if (!beforeClose || beforeClose.call(this,e)) {
                        target.unbind('.mapster-tooltip');
                        if (onClose) {
                            onClose.call(this);
                        }
                    }
                });

            return {
                object: target,
                event: event_name
            };
        }
    }

    /**
     * Show a tooltip.
     *
     * @param {string|jquery}   [tooltip]       A string of html or a jQuery object containing the tooltip content.
     *
     * @param {string|jquery}   [target]        The target of the tooltip, to be used to determine positioning. If null,
     *                                          absolute position values must be passed with left and top.
     *
     * @param {string|jquery}   [image]         If target is an [area] the image that owns it
     *
     * @param {string|jquery}   [container]     An element within which the tooltip must be bounded
     *
     *
     *
     * @param {object|string|jQuery} [options]  options to apply when creating this tooltip - OR -
     *                                          The markup, or a jquery object, containing the data for the tooltip
     *
     *  @config {string}        [closeEvents]   A string with one or more comma-separated values that determine when the tooltip
     *                                          closes: 'area-click','tooltip-click','image-mouseout' are valid values
     *                                          then no template will be used.
     *  @config {int}           [offsetx]       the horizontal amount to offset the tooltip
     *  @config {int}           [offsety]       the vertical amount to offset the tooltip
     *  @config {string|object} [css]           CSS to apply to the outermost element of the tooltip
     */

    function showToolTip(tooltip,target,image,container,options) {
        var corners,
            ttopts = {};

        options = options || {};


        if (target) {

            corners = u.areaCorners(target,image,container,
                                    tooltip.outerWidth(true),
                                    tooltip.outerHeight(true));

            // Try to upper-left align it first, if that doesn't work, change the parameters

            ttopts.left = corners[0];
            ttopts.top = corners[1];

        } else {

            ttopts.left = options.left;
            ttopts.top = options.top;
        }

        ttopts.left += (options.offsetx || 0);
        ttopts.top +=(options.offsety || 0);

        ttopts.css= options.css;
        ttopts.fadeDuration = options.fadeDuration;

        showToolTipImpl(tooltip,ttopts);

        return tooltip;
    }

    /**
     * Show a tooltip positioned near this area.
      *
     * @param {string|jquery}   [content]       A string of html or a jQuery object containing the tooltip content.

     * @param {object|string|jQuery} [options]  options to apply when creating this tooltip - OR -
     *                                          The markup, or a jquery object, containing the data for the tooltip
     *  @config {string|jquery}   [container]     An element within which the tooltip must be bounded
     *  @config {bool}          [template]      a template to use instead of the default. If this property exists and is null,
     *                                          then no template will be used.
     *  @config {string}        [closeEvents]   A string with one or more comma-separated values that determine when the tooltip
     *                                          closes: 'area-click','tooltip-click','image-mouseout' are valid values
     *                                          then no template will be used.
     *  @config {int}           [offsetx]       the horizontal amount to offset the tooltip
     *  @config {int}           [offsety]       the vertical amount to offset the tooltip
     *  @config {string|object} [css]           CSS to apply to the outermost element of the tooltip
     */
    m.AreaData.prototype.showToolTip= function(content,options) {
        var tooltip, closeOpts, target, tipClosed, template,
            ttopts = {},
            ad=this,
            md=ad.owner,
            areaOpts = ad.effectiveOptions();

        // copy the options object so we can update it
        options = options ? $.extend({},options) : {};

        content = content || areaOpts.toolTip;
        closeOpts = options.closeEvents || areaOpts.toolTipClose || md.options.toolTipClose || 'tooltip-click';

        template = typeof options.template !== 'undefined' ?
                options.template :
                md.options.toolTipContainer;

        options.closeEvents = typeof closeOpts === 'string' ?
            closeOpts = u.split(closeOpts) :
            closeOpts;

        options.fadeDuration = options.fadeDuration ||
                 (md.options.toolTipFade ?
                    (md.options.fadeDuration || areaOpts.fadeDuration) : 0);

        target = ad.area ?
            ad.area :
            $.map(ad.areas(),
                function(e) {
                    return e.area;
                });

        if (md.activeToolTipID===ad.areaId) {
            return;
        }

        md.clearToolTip();

        md.activeToolTip = tooltip = createToolTip(content,
            template,
            options.css);

        md.activeToolTipID = ad.areaId;

        tipClosed = function() {
            md.clearToolTip();
        };

        bindToolTipClose(closeOpts,'area-click', 'click', $(md.map), null, tipClosed);
        bindToolTipClose(closeOpts,'tooltip-click', 'click', tooltip,null, tipClosed);
        bindToolTipClose(closeOpts,'image-mouseout', 'mouseout', $(md.image), function(e) {
            return (e.relatedTarget && e.relatedTarget.nodeName!=='AREA' && e.relatedTarget!==ad.area);
        }, tipClosed);


        showToolTip(tooltip,
                    target,
                    md.image,
                    options.container,
                    template,
                    options);

        u.ifFunction(md.options.onShowToolTip, ad.area,
        {
            toolTip: tooltip,
            options: ttopts,
            areaOptions: areaOpts,
            key: ad.key,
            selected: ad.isSelected()
        });

        return tooltip;
    };


    /**
     * Parse an object that could be a string, a jquery object, or an object with a "contents" property
     * containing html or a jQuery object.
     *
     * @param  {object|string|jQuery} options The parameter to parse
     * @return {string|jquery} A string or jquery object
     */
    function getHtmlFromOptions(options) {

            // see if any html was passed as either the options object itself, or the content property

            return (options ?
                ((typeof options === 'string' || options.jquery) ?
                    options :
                    options.content) :
                null);
    }

    /**
     * Activate or remove a tooltip for an area. When this method is called on an area, the
     * key parameter doesn't apply and "options" is the first parameter.
     *
     * When called with no parameters, or "key" is a falsy value, any active tooltip is cleared.
     *
     * When only a key is provided, the default tooltip for the area is used.
     *
     * When html is provided, this is used instead of the default tooltip.
     *
     * When "noTemplate" is true, the default tooltip template will not be used either, meaning only
     * the actual html passed will be used.
     *
     * @param  {string|AreaElement} key The area for which to activate a tooltip, or a DOM element.
     *
     * @param {object|string|jquery} [options] options to apply when creating this tooltip - OR -
     *                                         The markup, or a jquery object, containing the data for the tooltip
     *  @config {string|jQuery} [content]   the inner content of the tooltip; the tooltip text or HTML
     *  @config {Element|jQuery} [container]   the inner content of the tooltip; the tooltip text or HTML
     *  @config {bool}          [template]  a template to use instead of the default. If this property exists and is null,
     *                                      then no template will be used.
     *  @config {int}           [offsetx]   the horizontal amount to offset the tooltip.
     *  @config {int}           [offsety]   the vertical amount to offset the tooltip.
     *  @config {string|object} [css]       CSS to apply to the outermost element of the tooltip
     *  @config {string|object} [css] CSS to apply to the outermost element of the tooltip
     *  @config {bool}          [fadeDuration] When non-zero, the duration in milliseconds of a fade-in effect for the tooltip.
     * @return {jQuery} The jQuery object
     */

    m.impl.tooltip = function (key,options) {
        return (new m.Method(this,
        function mapData() {
            var tooltip, target, md=this;
            if (!key) {
                md.clearToolTip();
            } else {
                target=$(key);
                if (md.activeToolTipID ===target[0]) {
                    return;
                }
                md.clearToolTip();

                md.activeToolTip = tooltip = createToolTip(getHtmlFromOptions(options),
                            options.template || md.options.toolTipContainer,
                            options.css);
                md.activeToolTipID = target[0];

                bindToolTipClose(['tooltip-click'],'tooltip-click', 'click', tooltip, null, function() {
                    md.clearToolTip();
                });

                md.activeToolTip = tooltip = showToolTip(tooltip,
                    target,
                    md.image,
                    options.container,
                    options);
            }
        },
        function areaData() {
            if ($.isPlainObject(key) && !options) {
                options = key;
            }

            this.showToolTip(getHtmlFromOptions(options),options);
        },
        {
            name: 'tooltip',
            args: arguments,
            key: key
        }
    )).go();
    };
} (jQuery));

(function() {
  'use strict';


var brandsCarousel = function() {
  $('.brand-container .carousel-contain').slick({
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: _BPSMALL,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
}

var brandsEqualHeight = function() {
  $('.brand-container .carousel-contain').each( function(){
    var slickTrackHeight = $(this).height();
      $(this).find('.brand-box').each(function(){
       $(this).outerHeight(slickTrackHeight);
    });
  });
}




$(document).ready(function(){
  brandsCarousel();
  brandsEqualHeight();
});
})();


$(document).resize(function() {
  var windowSize = $(window).width();
});


function carousel4x1() {
  $('.carousel.four-items .carousel-contain').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    draggable: false,
    responsive: [
      {
        breakpoint: _BPMEDIUM,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true
        }
      },
      {
        breakpoint: _BPSMALL,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true
        }
      }
    ]
  });
}

function carousel3x1() {
  $('.carousel.three-items .carousel-contain').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    draggable: false,
    responsive: [
      {
        breakpoint: _BPSMALL,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true
        }
      }
    ]
  });
}

function carousel1x1() {
  //Custom function to count slides and paginate by numbers

  var $slickCarousel = $('.carousel.one-item');
  var $status = $('.paging .slide-numbers');
  $slickCarousel.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide) {
    $(this).show();
    var i = (currentSlide ? currentSlide : 0) + 1;
    if (slick.slideCount > 1) {
      $(this).find($status).text(i + ' of ' + slick.slideCount);
    }
  });


  var $singleItemCarousel = $('.carousel.one-item .carousel-contain');
  if (($singleItemCarousel).length) {

    $('.carousel.one-item').each(function(idx, item) {
      var carouselID = 'carousel' + idx;
      $(this).addClass(carouselID);

      $(this).find('.carousel-contain').slick({
        infinite: true,
        draggable: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        appendArrows: '.' + carouselID + ' .paging',
        adapativeHeight: true
      });
    });


    $('.mobile-carousel-arrow.next ').click(function() {
      $(this).prev($('.slick-slider')).slick('slickNext');
    });

    $('.mobile-carousel-arrow.prev').click(function() {
      $(this).next($('.slick-slider')).slick('slickPrev');
    });

    //For Media Gallery Detail page
    if ($('.media-gallery-carousel').length) {
      $('.media-gallery-carousel-next').click(function() {
        $('.media-gallery-carousel .slick-slider').slick('slickNext');
      });
      
      $('.media-gallery-carousel-prev').click(function() {
        $('.media-gallery-carousel .slick-slider').slick('slickPrev');
      });
    }
  }
}

$(document).ready(function() {

  if ($('.carousel').length) {

    carousel4x1();
    carousel3x1();
    carousel1x1();

  }
});

function contactFormCountry() {
  $(document).on('change', '.contact-form-country', function() {
    var cfState = $(this).parents('.contact-form').find('.contact-form-state'),
        countryVal = $('.contact-form-country').val();
        //console.log(countryVal);
    if (countryVal == "United States") {
      cfState.prop('disabled', false)
             .parents('.select-bg')
             .removeClass('select-bg-disabled');
    } else {
      cfState[0].selectedIndex = 0;
      cfState.prop('disabled', true)
             .parents('.select-bg')
             .addClass('select-bg-disabled');
    }
  });
};

$(document).ready(function() {
  contactFormCountry();
});
var fl = (function() {

  // Our returned public functions
  // example call -> fl.init()
  var flPublic = {

    // Initialize fl
    init: function() {
      flInit();
    }

  };

  // Private Global Vars
  var $D = $(document),
      $W = $(window),
      $html = $('html'),
      
      urlInitParamsSearch = window.location.search.substring(1),
      urlInitHash = window.location.hash,
      urlInitHashSearch = urlInitHash.slice(urlInitHash.indexOf('?') + 1),
      urlInitParams = urlInitParamsSearch ? urlInitParamsSearch : urlInitHashSearch,

      urlInitParamsCheck = urlInitParams ? true : false,

      flType = flTypeGet(),
      urlInitObj = urlInitParamsCheck ? flUrlObjMake(urlInitParams) : false,
      pageNum = urlInitObj.page,
      pageNumCheck = /^[0-9]+$/.test(urlInitObj.page),
      pageCount = 1;


  function flInit() {
    flUrlInit();
    flFiltersClickInit();
    flPaginationClickInit();
    flDataGet();
  };


  function flCompareKeys(a, b) {
    if (a['_suid']) {
      delete a['_suid'];
    }
    if (b['_suid']) {
      delete b['_suid'];
    }
    var aKeys = Object.keys(a).sort();
    var bKeys = Object.keys(b).sort();
    
    return JSON.stringify(aKeys) === JSON.stringify(bKeys);
  };

  function flTypeGet() {
    var listingType = $('.filterable-listing').data('listing-type');
    return listingType;
  };

  function flFiltersClickInit() {
    flFiltersClickHandler();
    flFiltersApplyClickHandler();
    flFiltersClearClickHandler();
  };

  function flFiltersClickHandler() {
    $D.on('click', '.trigger-filters-open', function(event) {
      event.preventDefault();
      var $this = $(this);
      flFiltersToggle($this);
    });
  };

  function flFiltersToggle(element) {
    $(element)
      .parents('.filterable-listing-filters')
      .toggleClass('filterable-listing-filters-open');
  };

  function flFiltersSet() {
    var cFilterObj = flUrlObjectBuilder();

    // check if keys = data-filter attr
    var keyCheck = flCompareKeys(urlInitObj, cFilterObj);

    if (keyCheck) {
      // set filters based on url obj
      flFiltersUpdate(urlInitObj);
    } else {
      // set url based on current filters
      flUrlUpdate();
    }

  };

  function flFiltersUpdate(obj) {
    var needsUpdate = false;
    $.each( obj, function( key, value ) {
      if (key !== 'page') {
        var match = $('.filterable-listing-filters-input[data-filter="' + key + '"]');
        if (match && match.is('select')) {
          if (match.find('option[value="' + value + '"]').length) {
            match.val(value);
          } else {
            needsUpdate = true;
          }
        } else
        if (match && match.is('input:text')) {
          match.val(value);
        } else {
          needsUpdate = true;
        }
      }
    });

    if (!pageNumCheck) {
      pageNum = flPageNumberGet();
      needsUpdate = true;
    }

    if (needsUpdate) {
      flUrlUpdate();
    }

  };

  function flFiltersReset() {
    $('.filterable-listing-filters-input').each(function(index, el) {
      if ($(el).is('select')) {
        $(el).val('all');
      } else {
        $(el).val('');
      }
    });
  };

  function flFiltersClear() {
    flFiltersReset();
    flFiltersApply();
  };

  function flFiltersApply() {
    flPageNumberReset();
    flUrlUpdate();
    flDataGet();
  };

  function flFiltersApplyClickHandler() {
    $D.on('click', '.trigger-filters-apply', function(event) {
      event.preventDefault();
      flFiltersApply();
    });
  };

  function flFiltersClearClickHandler() {
    $D.on('click', '.trigger-filters-clear', function(event) {
      event.preventDefault();
      flFiltersClear();
    });
  };

  







  function flPaginationBuilder(data) {
    var resultNum = data.ResultCount;
    
    pageCount = Math.ceil(resultNum/pageSize);

    flPaginationClear();

    for (var i = 0; i < pageCount; i++) {
      var pageLinkTempl = flPageLinkTempl(i);
      $('.filterable-listing-page-links').append(pageLinkTempl);
    }

    flPaginationBuilt();

    flPageNumberActiveSet();

  };


  function flPaginationClear() {
    flPaginationUnBuilt();
    $('.filterable-listing-page-links').empty();
  };

  function flPaginationBuilt() {
    $('.filterable-listing-pagination').addClass('filterable-listing-pagination-built');
  };

  function flPaginationUnBuilt() {
    $('.filterable-listing-pagination').removeClass('filterable-listing-pagination-built');
  };

  function flPageLinkTempl(index) {
    var pageNum = index + 1,
        pageLinkTempl =
          '<button data-page="' + pageNum + '" class="filterable-listing-page-link">' +
            pageNum
          '</button>';

    return pageLinkTempl;
  }

  function flPageNumberGet() {
    if (!pageNumCheck) {
      pageNum = 1;
    }
    return pageNum;
  };

  function flPageNumberReset() {
    pageNum = 1;
  }

  function flPageNumberUpdate(clicked) {
    pageNum = clicked.data('page');
    flPageNumberActiveSet();
  };

  function flPageNumberActiveClear() {
    $('.filterable-listing-page-link').removeClass('filterable-listing-page-link-active');
  };

  function flPageNumberActiveSet() {
    flPageNumberActiveClear();
    $('.filterable-listing-page-link[data-page="' + pageNum + '"]')
      .addClass('filterable-listing-page-link-active');
  };

  function flPageNumberApply(clicked) {
    flPageNumberUpdate(clicked);
    flUrlUpdate();
    flDataGet();
  };

  function flPageNumberClickHandler() {
    $D.on('click', '.filterable-listing-page-link', function(event) {
      event.preventDefault();
      var $this = $(this);
      flPageNumberApply($this);
    });
  };

  function flPageIncrementClickHandler() {
    $D.on('click', '.filterable-listing-page-increment', function(event) {
      event.preventDefault();

      var $this = $(this),
          pageIncrement = $this.data('page-increment');

      if (/^0/.test(pageNum)) {
        pageNum = 1;
        flUrlUpdate();
        flDataGet();
        return;
      }


      if (pageIncrement === 'first') {
        if (pageNum === 1) {
          return;
        }
        pageNum = 1;
      }
      
      if (pageIncrement === 'previous') {
        if (pageNum === 1) {
          return;
        }
        if (pageNum < 1) {
          pageNum = 1;
        } else {
          pageNum = pageNum - 1;
        }
      }

      if (pageIncrement === 'next') {
        if (pageNum === pageCount) {
          return;
        }
        if (pageNum > pageCount) {
          pageNum = pageCount;
        } else {
          pageNum = pageNum + 1;
        }
      }

      if (pageIncrement === 'last') {
        if (pageNum === pageCount) {
          return;
        }
        pageNum = pageCount;
      }

      flUrlUpdate();
      flDataGet();

    });
  };

  function flPaginationClickInit() {
    flPageNumberClickHandler();
    flPageIncrementClickHandler();
  }





  function flUrlObjMake(urlParams) {
    var flInitUrlArr = urlParams.split('&'),
        flInitUrlObj = {};
    flInitUrlArr.map(function(flUrlParamFull) {
      var flUrlParam = flUrlParamFull.split('=');
      return (
        flInitUrlObj[flUrlParam[0]] = decodeURIComponent(flUrlParam[1]).replace(/\+/g, ' ')
      );
    })
    return flInitUrlObj;
  };

  function flUrlObjectBuilder() {
    var urlObject = {};

    var resourceClassificationType = (typeof resourceClassification);
    
    $('.filterable-listing-filters-input').each(function(index, el) {
      var objectKey = $(el).data('filter'),
          objectVal = $(el).val();
      urlObject[objectKey] = objectVal;
    });

    urlObject.page = pageNum ? pageNum.toString() : flPageNumberGet();

    urlObject.pageSize = pageSize;

    if (resourceClassificationType !== 'undefined' || resourceClassificationType === null) {
      urlObject.resourceClassification = resourceClassification;
    }

    return urlObject;
  };

  function flUrlUpdate() {
    var noUrlCheck = $('.filterable-listing').data('listing-nourl') !== undefined || null ? true : false;

    if (!noUrlCheck) {
      var urlState = flUrlObjectBuilder(),
        urlTitle = null,
        urlHash = '?' + $.param(urlState);
      History.replaceState(urlState, urlTitle, urlHash);
    }

  };

  function flUrlInit() {
    if (urlInitObj) {
      // apply filters based on init url obj
      flFiltersSet();
    } else {
      // build and add url obj params
      flUrlUpdate();
    }
  };





  function flDataUrlGet() {
    // if url has parameters pass blank or attach
    // to url call for json object
    var noUrlCheck = $('.filterable-listing').data('listing-nourl') !== undefined || null ? true : false;

    var url = flApiUrl,
        urlParamsSearch = window.location.search.substring(1),
        urlHash = window.location.hash,
        urlHashSearch = urlHash.slice(urlHash.indexOf('?') + 1),
        urlParams = urlParamsSearch ? urlParamsSearch : urlHashSearch;

    if (urlParams && !noUrlCheck) {
      url = url + '?' + urlParams;
    } else {
      var urlState = flUrlObjectBuilder(),
          urlHash = '?' + $.param(urlState);
      url = url + urlHash;
    }
    return url;
  };


  function flDataGet() {
    var url = flDataUrlGet();
    //console.log('GET from: ' + url);
    $.getJSON(url, function(data){
      flDataHandler(data);
    });
  };

  function flDataHandler(data) {
    var count = data.ResultCount;
    // Inject number of found items
    flInjectNumFound(count);
    // Clear previous items
    flClear();
    // check if items exist
    if (count <= 0) {
      flNoItems();
    } else {
      flHasItems(data);
    }
  };



  function flInjectNumFound(count) {
    $('.filterable-listing-count-value').html(count);
  };

  function flClear() {
    $('.filterable-listing-items').empty();
  };

  function flNoItems() {
    $('.filterable-listing').addClass('filterable-listing-empty');
  };

  function flHasItems(data) {
    
    $('.filterable-listing').removeClass('filterable-listing-empty');

    // build pagination
    flPaginationBuilder(data);

    if (flType === 'resources') {
      $.each(data.ResourceList, function(index, item) {
        flItemBuilder(item);
      });
    }

    if (flType === 'products') {
      $.each(data.Products, function(index, item) {
        flItemBuilder(item);
      });
    }

    if (flType === 'videos') {
      flItemBuilder(data.VideoList);
    }

    if (flType === 'distributors') {
      flItemBuilder(data.DistributorList);
    }

    if (flType === 'technicalarticles') {
        $.each(data.TechnicalArticleList, function (index, item) {
            flItemBuilder(item);
        });
    }

    if (flType === 'whitepapers') {
        $.each(data.WhitePaperList, function (index, item) {
            flItemBuilder(item);
        });
    }

    if (flType === 'uwb-partners') {
        flItemBuilder(data.UWBPartnerList);
    }
  };

  function flItemBuilder(item) {
    var itemTempl;
    
    if (flType === 'resources') {
      itemTempl = flItemTemplResource(item);
    }

    if (flType === 'products') {
      itemTempl = flItemTemplProduct(item);
    }

    if (flType === 'videos') {
      itemTempl = flItemTemplVideo(item);
    }

    if (flType === 'distributors') {
      itemTempl = flItemTemplDistributor(item);
    }

    if (flType === 'technicalarticles') {
        itemTempl = flItemTemplTechnicalArticle(item);
    }

    if (flType === 'whitepapers') {
        itemTempl = flItemTemplWhitePaper(item);
    }

    if (flType === 'uwb-partners') {
        itemTempl = flItemTemplUWBPartner(item);
    }

    $('.filterable-listing-items').append(itemTempl);
  };

  function flItemTemplResource(item) {
    var targetlink = '';
    if(item.IsExternalLink != undefined){
      targetlink = (item.IsExternalLink) ? ' target="_blank" ' : '';
    }
    
    var itemTempl = 
      '<div class="filterable-listing-item filterable-listing-item-resource">' +
        '<div class="row">' +

          '<div class="columns one listing-item-resource-icon-col">' +
            '<div class="listing-item-resource-icon">' +
              '<i class="' + item.IconClass + '" />' +
            '</div>' +
          '</div>' +

          '<div class="columns eight listing-item-resource-link-col">' +
            '<a href="' + item.ResourceUrl + '" class="listing-item-resource-link" ' + targetlink + '>' +
              item.ResourceTitle +
            '</a>' +
          '</div>' +

          '<div class="columns three listing-item-resource-date-col">' +
            '<div class="u-fs-6 listing-item-resource-date">' +
              item.PublishedDate +
            '</div>' +
          '</div>' +

        '</div>' +
      '</div>';

    return itemTempl;
  };

  function flItemTemplProduct(item) {
    var itemTemplPartVariance = [];

    var itemTemplPartVarianceCreate =
      $.each(item.RelatedProducts, function(index, relItem) {
        itemTemplPartVariance.push(
          '<div class="listing-item-product-part-link">' +
            '<a href="' + relItem.Url + '">' +
              relItem.Title +
            '</a>' +
          '</div>'
        );
      });

    var itemTempl = 
      '<div class="filterable-listing-item filterable-listing-item-product">' +
          
          '<div class="listing-item-product-part-col">' +
            '<div class="listing-item-product-part-links">' +
              itemTemplPartVariance.join('') +
            '</div>' +
            '<div class="listing-item-product-part-image">' +
              '<img src="' + item.ImageUrl + '" />' +
            '</div>' +
          '</div>' +

          '<div class="listing-item-product-description-col">' +
            '<div class="listing-item-product-description-text">' +
              item.Description +
            '</div>' +
          '</div>' +

          '<div class="listing-item-product-features-col">' +
            '<div class="listing-item-product-features-text">' +
              item.KeyFeatures +
            '</div>' +
          '</div>' +

      '</div>';

    return itemTempl;
  };

  function flItemTemplVideo(items) {
    var itemTemplRows = [];

    // create rows
    for(var i = 0; i < items.length; i+=4) {

      var slicedItems = items.slice(i, i+4);
      var itemTemplItems = [];

      $.each(slicedItems, function(index, item) {
        itemTemplItems.push(
          '<div class="columns three filterable-listing-item-video">' +
            '<div class="listing-item-video">' +
              '<a href="' + item.VideoUrl + '" class="listing-item-video-link">' +
                '<div class="listing-item-video-image">' +
                  '<img src="' + item.VideoThumbnail + '" />' +
                '</div>' +
                '<div class="listing-item-video-title">' +
                  item.VideoTitle +
                '</div>' +
                '<div class="listing-item-video-date">' +
                  item.CreatedDate +
                '</div>' +
              '</a>' +
            '</div>' +
          '</div>'
        );
      });

      itemTemplRows.push(
        '<div class="row filterable-listing-item-video-row">' +
          itemTemplItems.join('') +
        '</div>'
      );
      
    };

    // join rows to create template
    var itemTempl = itemTemplRows.join('');

    return itemTempl;
  };


  function flItemTemplDistributor(items) {
    var itemTemplRows = [];

    // create rows
    for(var i = 0; i < items.length; i+=3) {

      var slicedItems = items.slice(i, i+3);
      var itemTemplItems = [];

      $.each(slicedItems, function(index, item) {
        itemTemplItems.push(
          '<div class="columns four filterable-listing-item-distributor">' +
            '<div class="listing-item-distributor">' +
              '<a href="' + item.NavigationUrl + '" class="listing-item-distributor-link" target="_blank">' +

                '<div class="listing-item-distributor-region">' +
                  item.RegionInformation +
                '</div>' +

                '<div class="listing-item-distributor-image">' +
                  '<img src="' + item.Thumbnail + '" />' +
                '</div>' +

                '<div class="listing-item-distributor-specialty">' +
                  item.ProductLine +
                '</div>' +

                '<div class="tile-chevron">' +
                '</div>' +
                
              '</a>' +
            '</div>' +
          '</div>'
        );
      });

      itemTemplRows.push(
        '<div class="row filterable-listing-item-distributor-row">' +
          itemTemplItems.join('') +
        '</div>'
      );
      
    };

    // join rows to create template
    var itemTempl = itemTemplRows.join('');

    return itemTempl;
  };


  function flItemTemplTechnicalArticle(item) {
      // console.log("flItemTemplTechnicalArticle()");
      // return "<p>" + item.Type + "&nbsp;|&nbsp;" + item.Title + "&nbsp;|&nbsp;" + item.DatePublished + "&nbsp;|&nbsp;" + item.Url + "</p>";

      var targetlink = '';
      if (item.IsExternalLink != undefined) {
          targetlink = (item.IsExternalLink) ? ' target="_blank" ' : '';
      }

      var itemTempl =
        '<div class="filterable-listing-item filterable-listing-item-resource">' +
          '<div class="row">' +

            '<div class="columns one listing-item-resource-icon-col">' +
              '<div class="listing-item-resource-icon">' +
                '<i class="' + item.IconClass + '" />' +
              '</div>' +
            '</div>' +

            '<div class="columns eight listing-item-resource-link-col">' +
              '<a href="' + item.Url + '" class="listing-item-resource-link" ' + targetlink + '>' +
                item.Title +
              '</a>' +
            '</div>' +

            '<div class="columns three listing-item-resource-date-col">' +
              '<div class="u-fs-6 listing-item-resource-date">' +
                item.DatePublished +
              '</div>' +
            '</div>' +

          '</div>' +
        '</div>';

      return itemTempl;
  }


  function flItemTemplWhitePaper(item) {
      // console.log("flItemTemplWhitePaper()");
      // return "<p>" + item.Type + "&nbsp;|&nbsp;" + item.Title + "&nbsp;|&nbsp;" + item.DatePublished + "&nbsp;|&nbsp;" + item.Url + "</p>";

      var targetlink = '';
      if (item.IsExternalLink != undefined) {
          targetlink = (item.IsExternalLink) ? ' target="_blank" ' : '';
      }

      var itemTempl =
        '<div class="filterable-listing-item filterable-listing-item-resource">' +
          '<div class="row">' +

            '<div class="columns one listing-item-resource-icon-col">' +
              '<div class="listing-item-resource-icon">' +
                '<i class="' + item.IconClass + '" />' +
              '</div>' +
            '</div>' +

            '<div class="columns eight listing-item-resource-link-col">' +
              '<a href="' + item.Url + '" class="listing-item-resource-link" ' + targetlink + '>' +
                item.Title +
              '</a>' +
            '</div>' +

            '<div class="columns three listing-item-resource-date-col">' +
              '<div class="u-fs-6 listing-item-resource-date">' +
                item.DatePublished +
              '</div>' +
            '</div>' +

          '</div>' +
        '</div>';

      return itemTempl;
  }


  function flItemTemplUWBPartner(items) {
      var itemTemplRows = [];

      // Create rows
      for (var i = 0; i < items.length; i += 2) {

          var slicedItems = items.slice(i, i + 2);
          var itemTemplItems = [];

          $.each(slicedItems, function (index, item) {
              itemTemplItems.push(
                '<div class="columns six filterable-listing-item-uwb-partner">' +
                  '<div class="listing-item-uwb-partner">' +
                    '<a href="' + item.DetailsPageUrl + '" class="listing-item-uwb-partner-link">' +
                      '<div class="row">' +
                        '<div class="columns twelve text">' +
                          '<img src="' + item.NavigationThumbnail + '" class="logo" />' +
                          '<p class="name">' + item.Name + '</p>' +
                          '<p><strong>Region(s):</strong> ' + item.Regions + '</p>' +
                          '<p class="description">' + item.NavigationDescription + '</p>' +
                        '</div>' +
                        '<div class="tile-chevron" style="bottom: 22px;"></div>' +
                      '</div>' +
                    '</a>' +
                  '</div>' +
                '</div>'
              );
          });

          itemTemplRows.push(
            '<div class="row filterable-listing-item-uwb-partner-row">' +
              itemTemplItems.join('') +
            '</div>'
          );

      }

      // Join rows to create template
      var itemTempl = itemTemplRows.join('');

      return itemTempl;
  }

  // return our public object
  return flPublic;
})();

$(document).ready(function(){
  if ($('.filterable-listing').length) {
    fl.init();
  }
});


  $(document).ready(function(){
    $('.fclgtwo-slick').slick({
        infinite: true,
         slidesToShow: 2,
         slidesToScroll: 1,
         draggable: false,
         responsive: [
            {
              breakpoint: _BPMEDIUM,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true
              }
            },
            {
              breakpoint: _BPSMALL,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true
              }
            }
          ]
        });
  });

(function() {
  'use strict';
  var selectors = [".product-container-outer.six:nth-child(2n)", ".product-container-outer.three:nth-child(4n)", ".product-container-outer.four:nth-child(3n)", ".product-container-outer.two:nth-child(6n)"];
  $(document).ready(function() {
    for (var i = 0, l = selectors.length; i < l; i++) {
      $(selectors[i]).addClass("remove-right-margin");
    }
    $('.full-product-tiles').each(function() {
      var $par = $(this);
      var tiles = $par.find('.product-container-outer');
      for (var i = 0, l = tiles.length; i < l; i++) {
        var $tile = $(tiles[i]);
        if ($tile.hasClass('three') && l <= 4) {
          $tile.css("margin-bottom", '2px');
        }
        if ($tile.hasClass('four') && l <= 3) {
          $tile.css("margin-bottom", '2px');
        }
      }
    });

  });


})(jQuery);

(function() {
  'use strict';
  var init = function() {
    $(document).find('.generic-filter').each(function() {
      var $gf = $(this);
      var $toggle = $gf.find('.mobile-toggle button');
      var $gfc = $gf.find('.generic-filter-inner');
      $toggle.on('click', function(e) {
        if ($gfc.is(':visible')) {
          $gfc.hide(function() {
            $toggle.find('i').removeClass('icon-chevron-thin-right');
            $toggle.find('i').addClass('icon-chevron-thin-down');
          });
        } else {
          $gfc.show(function() {
            $toggle.find('i').removeClass('icon-chevron-thin-down');
            $toggle.find('i').addClass('icon-chevron-thin-right');
          });
        }
      });
    });

    //For select tags in error state, this will add stylings for
    //arrow icon. Previously used pseudo elements but not ideal for IE8/9.
    $(document).find('.error-state').each(function() {
      var $es = $(this);
      if ($es.length) {
        $es.parent('.select-bg').siblings('.pri-nav-typedir.up').css('border-right', '1px solid $errorred');
      } else {
        $es.parent('.select-bg').siblings('.pri-nav-typedir.up').css('border-right', '1px solid #999999');
      }
    });

    //Add underline to search filter texts
    $(document).find('.sort button').click(function() {
      $('.sort button.active').removeClass('active');
      $(this).addClass('active');
    });
  };
  $(document).ready(init);
})(jQuery);

(function() {
  'use strict';
var fetchDbFilterData = function() {
    var getDist2 = getDist;
    var getDistData = {};
    $.getJSON(getDist2, function(data) {
      getDistData = data;
      $('.region').empty();
      $.each(data.DistributorList, function(i, v) {
      // create option with value as index - makes it easier to access on change
      var options = $('<option/>', {
        value: v.RegionInformation,
        text: v.RegionInformation
      }).attr('data-id', i);
      // append the options to job selectbox
      $('.region').append(options);
      });

      // bind change event
      $('.region').change(function() {
        // cache this
        var $el = $(this);
        // get data-id attr from selected option
        var id = $('option:selected', this).data('id');
        // empty select
        $('.specialty').empty();
        // get name values for selected option
          var array = data.DistributorList[id].ProductLine.split(',');
          $.each(array, function(i, v) {
              var options = $('<option/>', {
            value: v,
            text: v
          });
               $('.specialty').append(options)
          });

      }).change(); // trigger change() on page load to fill name selectbox

            
          });

        };

var clearAllSalesContacts = function(){
  $('#qorvosalesdiv select').each(function(index, el) {     
        $(el).val('');
  });
      $("#SPFErrorMessage").hide();
      $('#LocalSalesPerson').hide();

      var new_url = window.location.pathname;
      window.history.replaceState( {} , '/', new_url );
};

$(document).ready(function(){
  if ($('.distributor-filter').length) {
    fetchDbFilterData();
  }

  $('#qorvosalesdiv .trigger-filters-clear').click(function(event){
    clearAllSalesContacts();
  });

});

})();
(function($){
  'use strict';

  $.fn.leftSideNav = function(){
    
      var $lsn = $('.lsn');
      var $contentWrap = $('.content-wrap');
      var $lsnToggle = $('.toggle-left-nav');
      var $recentlyViewRibbon = $('.recently-visited-ribbon');
      var $extraOffset;
      setTimeout(function(){//Need to delay to get correct offsets
        if ( $lsn.length ) {
          var $lsnHeight = $lsn.outerHeight(true);
          var $lsnOffset = $lsn.offset().top;
          var $contentHeight = $contentWrap.outerHeight(true);
          var $contentOffset = $contentWrap.offset().top;
          var $newContentHeight = $lsnHeight + $lsnOffset;  
        }
        
        if ($lsnHeight > ($contentHeight - $lsnOffset)) {
          $contentWrap.css('min-height', $newContentHeight - $contentOffset);
        }

        $lsnToggle.on('click', function(e) {
          if ( $recentlyViewRibbon.is(':visible') ) {
            $extraOffset = 180;
          } else {
            $extraOffset = 115;
          }

          if ( $lsn.hasClass('sticky') ){
            $('html, body').animate({
              scrollTop: $lsn.offset().top - $extraOffset
            }, function() {
              $lsn.addClass('lsn-open');
              $('.lsn .icon-toggle').addClass('sticky-icon-rotate');
            });
          } else {
            $lsn.altToggle('lsn-open');
            $('.lsn .icon-toggle').removeClass('sticky-icon-rotate');
          }

          if ( $lsn.hasClass('lsn-open') ) {
            $('.lsn .icon-toggle').addClass('sticky-icon-rotate');
          } else {
            $('.lsn .icon-toggle').removeClass('sticky-icon-rotate');
          }
        });

      // $('.current > a').each(function() {
      //   $(this).next('ul').show();
      // });

      //Add a class to each top level li that has a child menu for styling
      // $('.lsn li').each(function() {
      //   if( $(this).children('ul').length > 0 ) {
      //     $(this).addClass('parent');
      //   }
      // });

      //For initial expanded menu, rotate arrow and bold list header
      // $('.lsn li.current').addClass('active');

      //Clicking on the parent shows the child menu
      // $('.lsn li.parent > .icon-arrow').click(function(e) {
      //   // e.preventDefault();
      //   $(this).parent().altToggle('active');
      //   $(this).parent().children('ul').slideToggle();

      //   //if child menu is shown, rotate arrow icon
      //   if ( $(this).parent().hasClass('active') ) {
      //     $(this).addClass('icon-arrow-rotate');
      //   }
      //   else {
      //     $(this).removeClass('icon-arrow-rotate');
      //   }
      // });

      //Prevent LSN from closing if clicked
      $lsn.off().on('click', function(e) {
        e.stopPropagation();
      });

      //Clicking outside of the Left Side Nav closes the Left side nav
      $('html, body').off().on('click',function(){
        if( $lsn.hasClass('lsn-open') ) {
          $lsn.removeClass('lsn-open');
        }
      });

      $(window).scroll(function(e){
        if ( $lsn.length ) {
          var lsnPosition = $lsn.offset().top;
          var h = $(window).scrollTop();
          var topNav = $('.pri-nav').outerHeight();

          if ($recentlyViewRibbon.is(':visible')) {
            var extraPadding = $recentlyViewRibbon.outerHeight();
          } else {
            var extraPadding = 0;
          }

          if( h < lsnPosition - topNav ) {
            $lsn.removeClass('sticky');
          } else {
            $lsn.addClass('sticky');
            $lsnToggle.find('h4').css('top', extraPadding + 78);
          }
          //LSN is open; user scrolls down; close LSN
          if( h > ($lsnHeight + $lsnOffset - 140)) {
            $lsn.removeClass('lsn-open'); 
          }
        }
      });
      }, 500);
    };

}(jQuery));

(function() {
 	'use strict';
 	//For About Us-Our History filters section, display a message based on Company dropdown
 	var displayMessage = function(){

 		$('.filter .year').change(function(){
 			getMessage();
 		});

 		$('.filter .company').change(function(){
 			getMessage();
 		});

 		$('.filter .type').change(function(){
 			getMessage();
 		});
 	};

 	var getMessage = function(){
 		var messageContainer = $('.history-container .no-results');
		var counter = $('.result-ribbon .total .count').text().trim();
		var message = $('.filter .company option:selected').attr('data-empty-message');

		if($(messageContainer).is(':visible')){
			$(messageContainer).find('h4').text(message);	
		}

 	};

 	$(document).ready(function(){
		displayMessage();
	});

})(jQuery);


'use strict';

var pdp = (function() {

  // Our returned public functions
  var pdpPublic = {
    tabs: function() {
      tabsInit();
    },
    clickHandlers: function() {
      distributorButtonClickHandler();
      distributorCloseClickHandler();
    }
  };

  // Global vars
  var $D = $(document);


  function distributorButtonClickHandler() {
    var triggerSelector = '.trigger-pdp-distributors',
        $trigger = $(triggerSelector);
    $D.on('click', triggerSelector, function(event) {
      event.preventDefault();
      distributorToggle($(this));
    });
  };

  function distributorCloseClickHandler() {
    var triggerSelector = '.trigger-pdp-distributors-close',
        $trigger = $(triggerSelector);
    $D.on('click', triggerSelector, function(event) {
      event.preventDefault();
      $(this)
        .parents('.pdp-header')
        .find('.pdp-distributors')
        .removeClass('pdp-distributors-open')
        .end()
        .find('.trigger-pdp-distributors')
        .removeClass('trigger-pdp-distributors-open');
    });
  };

  function distributorToggle(clicked) {
    var openCheck = clicked.hasClass('trigger-pdp-distributors-open');
    if (openCheck) {
      distributorClose(clicked)
    } else {
      distributorOpen(clicked);
    }
  };

  function distributorOpen(clicked) {
    clicked.addClass('trigger-pdp-distributors-open');
    clicked
      .parents('.pdp-header')
      .find('.pdp-distributors')
      .addClass('pdp-distributors-open ie-poly');
  };

  function distributorClose(clicked) {
    clicked.removeClass('trigger-pdp-distributors-open');
    clicked
      .parents('.pdp-header')
      .find('.pdp-distributors')
      .removeClass('pdp-distributors-open ie-poly');
  };

  // legacy phase 1
  function tabsInit() {
    
    var $tabs = $('.tabs .carousel-container ul'),
        $tabbedContent = $('.tabbed-content-container'),
        $blockdiagramTabs = $('.tabs.block-diagram'),
        $initialSlide = 0;

    var $numItems = $('.tabs .carousel-container ul a').length;

    $('.tabs ul').each(function(){
      var $active, $content, $links = $(this).find('a');
      $active = $($links.filter('[href="'+location.hash+'"]')[0] || $links[0]);
      
      $links.filter('[href="'+location.hash+'"]').addClass('active');
      $content = $($active[0].hash).addClass('active');

      if($numItems > 4) {
        $initialSlide = $active.parent().index();  
      }
      
      $links.not($active).each(function () {
        $(this.hash).hide();
        $(this).removeClass('active');
      });

      $(this).on('click', 'a', function(e){
        e.preventDefault();
        $tabs.find('a.active').removeClass('active');
        $content.removeClass('active');
        $content.hide();

        var activeHref = $(this).attr('href');
        $active = $(this);
        $content = $(this.hash);

        if(history.pushState) {
          history.pushState(null, null, $active.attr('href') );
        }
        else {
          location.hash = $active.attr('href');
        }
        $active.addClass('active');
        $links.filter('[href="'+activeHref+'"]').addClass('active');
        $content.addClass('active').show();
      });

      $tabs.on('afterChange', function(event, slick, currentSlide){

        if ( $(window).width() < 776 ) {
          $tabs.find('a.active').removeClass('active');
          $tabbedContent.find('.active').hide().removeClass('active');

          var nextTab = $('.tabs').find('[data-slick-index='+ currentSlide +']');
          nextTab.find('a').addClass('active');

          var $slideContent = nextTab.find('a').attr('href');

          $($slideContent).show().addClass('active');

          if(history.pushState) {
            history.pushState(null, null, $slideContent );
          }
          else {
            location.hash = $slideContent;
          }
        }
      });
    });

    var tabsCarouselCheck = $('.tabs').hasClass('tabs-carousel');

    if ( tabsCarouselCheck || $(window).width() < 776 ) {
      $tabs.slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        draggable: false,
        focusOnSelect: false,
        slide: 'li',
        initialSlide: $initialSlide,
        responsive: [
           {
             breakpoint: 767,
             settings: {
               initialSlide: $initialSlide,
               slidesToShow: 1
             }
           },
           {
             breakpoint: 1023,
             settings: {
               slidesToShow: 3
             }
           }
         ]
      });
      //Scroll up to offset header
      // if($blockdiagramTabs) {
      //   $('html, body').animate({scrollTop: '-=400px'}, 800);  
      // }
    }
  };

  return pdpPublic;

})();

$(document).ready(function() {
  pdp.clickHandlers();
  if ($('.tabs').length) {
    pdp.tabs();
  }
});

(function() {
  'use strict';
  var $rVRibbon = $('.recently-visited-ribbon');
  var $rVProducts = $('.recently-visited-products');
  var $rVCarousel = $rVProducts.find('.carousel-contain');
  var $rVColl = $('.recently-visited-collapse');
  var $rVTog = $('.recently-visisted-toggle');
  var $rRemoveProd = $rVProducts.find('.icon-close');

  var recentlyViewedRibbon = function() {
    $rVCarousel.slick({
      infinite: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [{
        breakpoint: _BPSMALL,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true
        }
      }]
    });

    $rVCarousel.css('overflow', 'visible');

    $rRemoveProd.on('click', function() {
      var slideIndex = $(this).parent('.product').index();
      var slideCount = $rVProducts.find('.slick-slide').length;

      $rVCarousel.slick('slickRemove', slideIndex);

      if (slideCount === 1 ) {
        $rVRibbon.slideUp();
        $(this).parent('.slick-slide').remove();
       }

      // TODO: INSERT CODE TO REMOVE PRODUCT FROM BACKEND COOKIE
    });


    $rVColl.on('click', function() {
      $rVProducts.slideToggle();
      $rVTog.toggleClass('collapsed');
    });

    $('.remove-ribbon').on('click', function() {
      $('.recently-visited-ribbon').slideUp();
      // TODO: INSERT CODE TO REMOVE RIBBON COOKIE
    });

  };


  $(document).ready(function() {
    recentlyViewedRibbon();
  });
})();

var sp = (function() {

  // Our returned public functions
  // example call -> sp.init()
  var spPublic = {

    // Initialize sp
    init: function() {
      spInit();
    }

  };

  // Init Global Vars
  var $D = $(document),
      $W = $(window),

      spInitUrlParams = spUrlParamGet() ? spUrlParamGet() : false,

      SPClass = 'sp',
      SPSelector = '.' + SPClass,
      $SP = $(SPSelector);


/////////////////////////////////////////////////////////
// INITS
/////////////////////////////////////////////////////////

  function spInit() {
    // init url
    spInitUrl();

    // init entry
    spInitEntry();

    // init filters
    spInitFilters();

    // init results
    spInitResults();

    // init paging
    spInitPaging();
  };

  function spInitUrl() {
    if (spInitUrlParams) {
      // If there are params we should build the page
      // according to the params and initiate a search
      spUrlHasParams(spInitUrlParams);
    }
  };

  function spInitEntry() {
    // init mode switcher
    spEntryModeSwitchHandlers();
    // init advanced search toggle
    spEntryAdvClickHandler();
    // init search submit
    spEntrySubmitHandler();
  };

  function spInitFilters() {
    spFilterHandlers();
  };

  function spInitResults() {
    spResultsProductAllClickHandler();
  };

  function spInitPaging() {
    spPagingSizeSelectHandler();
    spPagingNavHandlers();
  };



/////////////////////////////////////////////////////////
// URL
/////////////////////////////////////////////////////////

  function spUrlParamGet() {
    var params = window.location.search.substring(1);
    return params;
  };

  function spUrlParamObjMake(params) {
    var spParamArr = params.split('&'),
        spParamObj = {};
    spParamArr.map(function(spParamFull) {
      var spParam = spParamFull.split('=');
      return (
        spParamObj[spParam[0]] = decodeURIComponent(spParam[1]).replace(/\+/g, ' ')
      );
    });
    return spParamObj;
  };

  function spUrlParamMake(paramObj) {
    var param = $.param(paramObj);
    return param;
  };

  function spUrlHasParams(params) {
    // Get Data from url with params
    spDataGet(params);
  };

  function spUrlUpdate(params) {
    var urlState = spUrlParamObjMake(params),
        urlTitle = null,
        urlHash = '?' + params;
    History.replaceState(urlState, urlTitle, urlHash);
  };



/////////////////////////////////////////////////////////
// DATA
/////////////////////////////////////////////////////////

  // Gets url from page
  function spDataApiUrlGet() {
    var url = spApiUrl;
    return url;
  };

  // Will add parameters to api url
  function spDataUrlMake(params) {
    var url = spDataApiUrlGet();
    url = url + '?' + params;
    return url;
  };

  // Call for the data object
  function spDataGet(params) {
    var url = spDataUrlMake(params);

    var paramObj = spUrlParamObjMake(params);
    // build entry
    spEntryDataHandler(paramObj);

    // validate
    var valid = spValidation(paramObj);

    if (valid) {
      // Turn On Spinner
      spSpinnerBuild();

      spUrlUpdate(params);
      //console.log('GET from: ' + url);
      $.getJSON(url, function(data) {
        // Deal with injecting data
        spDataHandler(data, paramObj);
        if (typeof gaTagSearch == 'function') { gaTagSearch(); }
      });
    }

  };

  function spEntryDataHandler(param) {
    // Set up Entry data
    var entryArr = ['mode', 'key', 'des', 'exact', 'any', 'none'],
        mode = param.mode || '1',
        key = param.key || '',
        des = param.des || '',
        exact = param.exact || '',
        any = param.any || '',
        none = param.none || '',
        pagingArr = ['pageSize', 'pageNumber'];

    // Assign Entry mode a name
    mode = spParamModeAssign(mode);

    // Build Entry
    spEntryBuilder(mode, key, des, exact, any, none);
  };

  // Split out data to specific handlers
  function spDataHandler(data, param) {

    // Set up Entry data
    var entryArr = ['mode', 'key', 'des', 'exact', 'any', 'none'],
        mode = param.mode || '1',
        key = param.key || '',
        des = param.des || '',
        pagingArr = ['pageSize', 'pageNumber'];

    // Assign Entry mode a name
    mode = spParamModeAssign(mode);

    // Set up Filters data
    var filters = data.FacetCategories || false,
        filterByLabel = data.FilterByLabel || 'Filter By: ',
        filterApplyLabel = data.ApplyLabel || 'Apply',
        filterResetLabel = data.ResetLabel || 'Reset All',
        filterClearLabel = data.ClearAllLabel || 'Clear All',
        filterParams = {},
        filterParamsCount = 0;

    // Create Filter Params
    $.each(param, function(k, v) {
      var checkEntryArray = $.inArray(k, entryArr) >= 0 ? true : false,
          checkPagingArray = $.inArray(k, pagingArr) >= 0 ? true : false;
      if (!checkEntryArray && !checkPagingArray) {
        filterParams[k] = v;
        filterParamsCount++;
      }
    });
    filterParams = filterParamsCount > 0 ? filterParams : false;

    // Turn off Spinner
    spSpinnerDestroy();

    // Build Filters if data exists
    if (filters && filters.length) {
      spFilterBuilder(filters, filterByLabel, filterApplyLabel, filterResetLabel, filterClearLabel, filterParams);
    }

    //Update the dropdown in Search Results
    $('.sp-entry-switcher select').val(mode);
    // Build Results
    spResultsBuilder(mode, key, des, data);
    ////////////////////
    ////////////////////
    ////////////////////
    ////////////////////
    $('.cn-dyn-inner ul').empty();
    window.gatherContentLinks();
    // $D.contentnav();
    ////////////////////
    ////////////////////
    ////////////////////
    ////////////////////


  };



/////////////////////////////////////////////////////////
// PARAMS
/////////////////////////////////////////////////////////

  var modeGlobal = 'global',
      modeProduct = 'product',
      modeDocument = 'document';

  function spParamsObjMake(includeFilters) {
    var params = {};

    // Entry Params
    params.mode = spParamGetMode();
    var mode = params.mode;
    params.key = spParamGetKey(mode);
    params.des = spParamGetDes(mode);

    params.exact = spParamGetExact();
    params.any = spParamGetAny();
    params.none = spParamGetNone();

    // Paging Params
    if (includeFilters) {
      params.pageNumber = spParamGetPageNumber();
      params.pageSize = spParamGetPageSize();
    }

    // Filters Params
    if (includeFilters) {
      filtersObj = spParamGetFilters();
      if (filtersObj) {
        $.extend(params, filtersObj);
      }
    }

    return params;
  };

  function spParamModeAssign(mode) {
    // Check mode, if none, set it to 1
    if (!mode === '1' || !mode === '2' || !mode === '3' || !mode === '4') {
      mode = '1';
    }
    if (mode === '1') {
      mode = modeGlobal;
    }
    if (mode === '2' || mode === '3') {
      mode = modeProduct;
    }
    if (mode === '4') {
      mode = modeDocument;
    }
    return mode;
  };

  function spParamGetMode() {
    var mode = '1';
    if (spEntry.hasClass(spEntryGlobalClass)) {
      mode = '1';
    }
    if (spEntry.hasClass(spEntryProductClass)) {
      mode = '2';
    }
    if (spEntry.hasClass(spEntryDocumentClass)) {
      mode = '4';
    }
    return mode;
  };

  function spParamGetKey(mode) {
    var key = '';
    if (mode === '1') {
      key = spInputGlobal.val() || '';
    }
    if (mode === '2') {
      key = spInputProductKey.val() || '';
    }
    if (mode === '4') {
      key = spInputDocument.val() || '';
    }
    return key;
  };

  function spParamGetDes(mode) {
    var des = '';
    if (mode === '2') {
      des = spInputProductDes.val() || '';
    }
    return des;
  };

  function spParamGetExact() {
    var exact = spInputExact.val() || '';
    return exact;
  };

  function spParamGetAny() {
    var any = spInputAny.val() || '';
    return any;
  };

  function spParamGetNone() {
    var none = spInputNone.val() || '';
    return none;
  };

  function spParamGetFilters() {
    var filters = false;
    if ($(spFilterSelector).length) {
      filters = {};
      $(spFilterSelector).each(function(index) {
        var category = $(this).data(spFilterDataAttrCategory),
            checkedArr = [],
            checked = $(this).find(spFilterOptionCheckboxSelector + ':checked');
        // create category based on data attribute
        // gather selected options
        checked.each(function(index, el) {
          checkedValue = $(this).data('uuid');
          checkedArr.push(checkedValue);
        });
        // Make sure category has selected options before adding
        if (checkedArr.length > 0) {
          filters[category] = checkedArr.join(',');
        }
      });
    };

    return filters;
  };

  function spParamGetPageNumber() {
    var pageNumber = $(spPagingNavLinkActiveSelector).data(spPagingDataAttrPage);
    return pageNumber;
  };

  function spParamGetPageSize() {
    var pageSize = $(spPagingSizeSelectSelector).val() || '';
    return pageSize;
  };



/////////////////////////////////////////////////////////
// HELPERS & INJECTS
/////////////////////////////////////////////////////////

  function spInjectInput(input, value) {
    input.val(value);
  };

  function spInjectTempl(location, template) {
    location.append(template);
  };

  function spEmptyElement(element) {
    element.empty();
  };



/////////////////////////////////////////////////////////
// ENTRY
/////////////////////////////////////////////////////////

  // Entry Global Vars
  var spEntryClass = 'sp-entry',
      spEntrySelector = '.' + spEntryClass,
      spEntry = $(spEntrySelector),
      spEntryGlobalClass = 'sp-entry-global',
      spEntryProductClass = 'sp-entry-product',
      spEntryDocumentClass = 'sp-entry-document',

      spEntryFormClass = 'sp-entry-form',
      spEntryFormSelector = '.' + spEntryFormClass,
      spEntryForm = $(spEntryFormSelector),

      spEntryAdvClass = 'sp-entry-advanced',
      spEntryAdvSelector = '.' + spEntryAdvClass,
      spEntryAdv = $(spEntryAdvSelector),
      spEntryAdvToggleClass = 'sp-entry-advanced-toggle',
      spEntryAdvToggleSelector = '.' + spEntryAdvToggleClass,
      spEntryAdvOpenClass = 'sp-entry-advanced-open'

      spInputClass = 'sp-entry-input',
      spInputSelector = '.' + spInputClass,
      spInput = $(spInputSelector),

      spInputGlobalClass = 'sp-entry-input-global',
      spInputGlobalSelector = '.' + spInputGlobalClass,
      spInputGlobal = $(spInputGlobalSelector),

      spInputProductKeyClass = 'sp-entry-input-product-key',
      spInputProductKeySelector = '.' + spInputProductKeyClass,
      spInputProductKey = $(spInputProductKeySelector),

      spInputProductDesClass = 'sp-entry-input-product-des',
      spInputProductDesSelector = '.' + spInputProductDesClass,
      spInputProductDes = $(spInputProductDesSelector),

      spInputDocumentClass = 'sp-entry-input-document',
      spInputDocumentSelector = '.' + spInputDocumentClass,
      spInputDocument = $(spInputDocumentSelector),

      spInputExactClass = 'sp-entry-input-exact',
      spInputExactSelector = '.' + spInputExactClass,
      spInputExact = $(spInputExactSelector),

      spInputAnyClass = 'sp-entry-input-any',
      spInputAnySelector = '.' + spInputAnyClass,
      spInputAny = $(spInputAnySelector),

      spInputNoneClass = 'sp-entry-input-none',
      spInputNoneSelector = '.' + spInputNoneClass,
      spInputNone = $(spInputNoneSelector),

      spEntrySwitchClass = 'sp-entry-switch',
      spEntrySwitchSelector = '.' + spEntrySwitchClass,
      spEntrySwitch = $(spEntrySwitchSelector),

      spEntrySwitcherClass = 'sp-entry-switcher',
      spEntrySwitcherSelector = '.' + spEntrySwitcherClass,
      spEntrySwitcher = $(spEntrySwitcherSelector),
      spEntrySwitcherOpenClass = 'sp-entry-switcher-open',

      spEntrySwitchTextClass = 'sp-entry-switch-text',
      spEntrySwitchTextSelector = '.' + spEntrySwitchTextClass,
      spEntrySwitchText = $(spEntrySwitchTextSelector),

      spEntrySwitchModeClass = 'sp-entry-switch-mode',
      spEntrySwitchModeSelector = '.' + spEntrySwitchClass + ' select';//'.' + spEntrySwitchModeClass,//'.sp-entry-switch select', // option .' + spEntrySwitchModeClass,//
      spEntrySwitchMode = $(spEntrySwitchModeSelector),

      spEntryDataAttrModeSwitch = 'mode-switch';

  // Base Builder Function
  function spEntryBuilder(mode, key, des, exact, any, none) {
    // Build base search based on mode param
    spEntryMode(mode, key, des);
    // Build advanced search based on params
    // Check exact, any, none variables for values
    // If one exists open advanced search and populate
    spEntryAdvanced(exact, any, none);
  };

  function spEntryMode(mode, key, des) {
    // Apply mode
    // Populate key and des for product
    if (mode === modeGlobal) {
      // set switcher text
      spEntryModeSetSwitcherText(mode);
      // set mode and inject
      spEntryModeGlobal(key);
    }
    if (mode === modeProduct) {
      // set switcher text
      spEntryModeSetSwitcherText(mode);
      // set mode and inject
      spEntryModeProduct(key, des);
    }
    if (mode === modeDocument) {
      // set switcher text
      spEntryModeSetSwitcherText(mode);
      // set mode and inject
      spEntryModeDocument(key);
    }
  };

  function spEntryModeGlobal(key) {
    // set mode
    spEntryModeSetGlobal();
    // inject input
    if (key.length) {
      var cleanKey = clearParam(key)
      spInjectInput(spInputGlobal, cleanKey);
    }
  };

  function spEntryModeProduct(key, des) {
    // set mode
    spEntryModeSetProduct();
    // inject key input
    if (key.length) {
      var cleanKey = clearParam(key)
      spInjectInput(spInputProductKey, cleanKey);
    }
    // inject des input
    if (des.length) {
      var cleanDes = clearParam(des);
      spInjectInput(spInputProductDes, cleanDes);
    }
  };

  function spEntryModeDocument(key) {
    // set mode
    spEntryModeSetDocument();
    // inject input
    if (key.length) {
      var cleanKey = clearParam(key)
      spInjectInput(spInputDocument, cleanKey);
    }
  };

  function spEntryAdvanced(exact, any, none) {
    if (exact.length || any.length || none.length) {
      // open advanced search if value exists
      spEntryAdvOpen();
      // inject values if they exist
      if (exact.length) {
        spInjectInput(spInputExact, exact);
      }
      if (any.length) {
        spInjectInput(spInputAny, any);
      }
      if (none.length) {
        spInjectInput(spInputNone, none);
      }
    }
  };

  function spEntryModeSwitchHandlers() {
    spEntryModeDropClickHandler();
    spEntryModeSwitchClickHandler();
    spEntryModeDocClickHandler();
  };

  function spEntryModeDocClickHandler() {
    $D.on('click', function(event) {
      var clicked = $('option:selected', $(event.target));//$(event.target);
      if (clicked.is(spEntrySwitchSelector) || clicked.parents().is(spEntrySwitchSelector)) {
      } else {
        spEntryModeDropClose();
      }
    });
  };

  function spEntryModeDropClickHandler() {
    $D.on('click', spEntrySwitchSelector, function(event) {
      event.preventDefault();
      spEntryModeDropToggle();
    });
  };

  function spEntryModeDropToggle() {
    if (spEntrySwitcher.hasClass(spEntrySwitcherOpenClass)) {
      spEntryModeDropClose();
    } else {
      spEntryModeDropOpen();
    }
  };

  function spEntryModeDropClose() {
    spEntrySwitcher.removeClass(spEntrySwitcherOpenClass);
  };

  function spEntryModeDropOpen() {
    spEntrySwitcher.addClass(spEntrySwitcherOpenClass);
  };

  function spEntryModeSwitchClickHandler() {
    $D.on('change', spEntrySwitchModeSelector, function(event) {
    //$D.on('click', spEntrySwitchModeSelector, function(event) {      
      event.preventDefault();
      // close switch
      //spEntryModeDropClose();
      var opt = $('option:selected', this);
      // Find current mode
      var currentMode = spEntryGetCurrentMode();

      // Find new mode
      var newMode = $(opt).attr('value'); //$(this).data(spEntryDataAttrModeSwitch);

      // Check for key
      var currentKey = spEntryGetCurrentKey(currentMode);

      // Clear all entry inputs and validation
      spEntryInputClear();
      spValidationReset();

      // Inject the current key into new mode
      if (currentKey) {
        spEntryInjectCurrentKey(newMode, currentKey);
      }

      // Switch mode
      spEntryModeSwitch(newMode);

      // Run a search
      spEntryForm.submit();
    });
  };

  function spEntryGetCurrentMode() {
    // set default to global
    var currentMode = modeGlobal;
    // set global
    if ( spEntry.hasClass(spEntryGlobalClass) ) {
      currentMode = modeGlobal;
    }
    // set product
    if ( spEntry.hasClass(spEntryProductClass) ) {
      currentMode = modeProduct;
    }
    // set document
    if ( spEntry.hasClass(spEntryDocumentClass) ) {
      currentMode = modeDocument;
    }
    return currentMode;
  };

  function spEntryGetCurrentKey(mode) {
    var currentKey = false,
        keyVal;
    if (mode === modeGlobal) {
      keyVal = spInputGlobal.val();
    }
    if (mode === modeProduct) {
      keyVal = spInputProductDes.val();
    }
    if (mode === modeDocument) {
      keyVal = spInputDocument.val();
    }
    currentKey = keyVal ? keyVal : false;
    return currentKey;
  };

  function spEntryInjectCurrentKey(mode, key) {
    if (mode === modeGlobal) {
      spInjectInput(spInputGlobal, key);
    }
    if (mode === modeProduct) {
      spInjectInput(spInputProductDes, key);
    }
    if (mode === modeDocument) {
      spInjectInput(spInputDocument, key);
    }
  };

  function spEntryModeSwitch(newMode) {
    // set switcher text
    spEntryModeSetSwitcherText(newMode);
    // set mode
    if (newMode === modeGlobal) {
      spEntryModeSetGlobal();
    }
    if (newMode === modeProduct) {
      spEntryModeSetProduct();
    }
    if (newMode === modeDocument) {
      spEntryModeSetDocument();
    }

    // Clear Filter container if one exists
    spFilterContainerRemove();
  };

  function spEntryModeSetSwitcherText(mode) {
    var newText = $('[data-' + spEntryDataAttrModeSwitch + '="' + mode + '"]').text();
    spEntrySwitchText.text(newText);
  };

  function spEntryModeSetGlobal() {
    // reset, then add mode class to entry
    spEntry.removeClass(spEntryProductClass)
           .removeClass(spEntryDocumentClass)
           .addClass(spEntryGlobalClass);
  };

  function spEntryModeSetProduct() {
    // reset, then add mode class to entry
    spEntry.removeClass(spEntryGlobalClass)
           .removeClass(spEntryDocumentClass)
           .addClass(spEntryProductClass);
  };

  function spEntryModeSetDocument() {
    // reset, then add mode class to entry
    spEntry.removeClass(spEntryGlobalClass)
           .removeClass(spEntryProductClass)
           .addClass(spEntryDocumentClass);
  };

  function spEntryAdvClickHandler() {
    $D.on('click', spEntryAdvToggleSelector, function(event) {
      event.preventDefault();
      spEntryAdvToggle();
    });
  };

  function spEntryAdvToggle() {
    if (spEntryAdv.hasClass(spEntryAdvOpenClass)) {
      spEntryAdvClose();
    } else {
      spEntryAdvOpen();
    }
  };

  function spEntryAdvOpen() {
    spEntryAdv.addClass(spEntryAdvOpenClass);
  };

  function spEntryAdvClose() {
    spEntryAdv.removeClass(spEntryAdvOpenClass);
  };

  function spEntryInputClear() {
    // Clear all entry inputs
    spInjectInput(spInput, '');
  };


  function spEntrySubmitHandler() {
    $D.on('submit', spEntryFormSelector, function(event) {
      event.preventDefault();
      var params = spParamsObjMake(false),
          urlParams = spUrlParamMake(params);
      spDataGet(urlParams);
    });
  };

  function clearParam(data){
    var result = '';
    if(data.indexOf("&quot") != -1){
      result = data.replace(/&quot;/g, '"');
    }else{
      result = data;
    }

    if(data.indexOf("&amp;") != -1){
      if(result.length > 0){
        result = result.replace(/&amp;/g, '&');
      }else{
        result = data.replace(/&amp;/g, '&');
      }
    }    
    return result;
  }
/////////////////////////////////////////////////////////
// VALIDATION
/////////////////////////////////////////////////////////

  var spInputErrorClass = 'sp-entry-input-error',

      spErrorTextClass = 'sp-entry-error-text',
      spErrorTextSelector = '.' + spErrorTextClass,
      spErrorText = $(spErrorTextSelector),

      spErrorTextEmptyClass = 'sp-entry-error-text-empty',
      spErrorTextEmptySelector = '.' + spErrorTextEmptyClass,
      spErrorTextEmpty = $(spErrorTextEmptySelector),

      spErrorTextShortClass = 'sp-entry-error-text-short',
      spErrorTextShortSelector = '.' + spErrorTextShortClass,
      spErrorTextShort = $(spErrorTextShortSelector),

      spErrorTextShowClass = 'sp-entry-error-text-show';

  function spValidation(param) {
    var valid = false,
        empty = false,
        short = false,
        mode = param.mode || '1',
        key = (param.key == undefined) ? '' : param.key.trim();//param.key.trim() || '',
        des = (param.des == undefined) ? '' : param.des.trim();//param.des.trim() || '',
        exact = (param.exact == undefined) ? '' : param.exact.trim(); //param.exact.trim() || '',
        any = (param.any == undefined) ? '' : param.any.trim();//param.any.trim() || '',
        none = (param.none == undefined) ? '' : param.none.trim();//param.none.trim() || '';

    //Check if SiteCore does not provide value by default
    if( typeof searchTextLength === 'undefined' || searchTextLength === null ){
      var searchTextLength = '2';
    }

    // reset all errors
    spValidationReset();

    if (mode === '2' || mode === '3') {
      var keyLength = (key.length > 0) ? key.length : false,
          desLength = (des.length > 0) ? des.length : false,
          exactLength = (exact.length > 0) ? exact.length : false,
          anyLength = (any.length > 0) ? any.length : false,
          noneLength = (none.length > 0) ? none.length : false;

      // if both empty, error both fields
      if (!keyLength && !desLength && !exactLength && !anyLength && !noneLength) {
        spValidationErrorAdd(spInput);
        empty = true;
      } else
      if ( keyLength < searchTextLength || desLength < searchTextLength ) {
        if (keyLength && keyLength < searchTextLength) {
          spValidationErrorAdd(spInputProductKey);
          short = true;
        }
        if (desLength && desLength < searchTextLength) {
          spValidationErrorAdd(spInputProductDes);
          short = true;
        }
      }

    } else
    if (mode === '1' || mode === '4') {
      var keyLength = (key.length > 0) ? key.length : false,
          desLength = (des.length > 0) ? des.length : false,
          exactLength = (exact.length > 0) ? exact.length : false,
          anyLength = (any.length > 0) ? any.length : false,
          noneLength = (none.length > 0) ? none.length : false,
          input = (mode === '1') ? spInputGlobal : spInputDocument;

      if (!keyLength && !exactLength && !anyLength && !noneLength) {
        spValidationErrorAdd(spInput);
        empty = true;
      } else
      if (keyLength && keyLength < searchTextLength) {
        spValidationErrorAdd(input);
        short = true;
      }
    }

    if (exact.length > 0 && exact.length < searchTextLength) {
      spValidationErrorAdd(spInputExact);
      short = true;
    }
    if (any.length > 0 && any.length < searchTextLength) {
      spValidationErrorAdd(spInputAny);
      short = true;
    }
    if (none.length > 0 && none.length < searchTextLength) {
      spValidationErrorAdd(spInputNone);
      short = true;
    }

    if (empty && !short) {
      spValidationTextShow(spErrorTextEmpty);
    }
    if (short) {
      spValidationTextShow(spErrorTextShort);
    }

    if (!empty && !short) {
      valid = true;
    }

    return valid;
  };

  function spValidationReset() {
    spValidationErrorRemove(spInput);
    spValidationTextHide(spErrorText);
  };

  function spValidationTextShow(text) {
    text.addClass(spErrorTextShowClass);
  };

  function spValidationTextHide(text) {
    text.removeClass(spErrorTextShowClass);
  };

  function spValidationErrorAdd(input) {
    input.addClass(spInputErrorClass);
  };

  function spValidationErrorRemove(input) {
    input.removeClass(spInputErrorClass);
  };



/////////////////////////////////////////////////////////
// FILTERS
/////////////////////////////////////////////////////////

  // Filters Global Vars
  // Don't create $ vars for injected content
  var spFiltersInjectLocationSelector = '.sp-header .container',
      spFiltersInjectLocation = $(spFiltersInjectLocationSelector),

      spFiltersContainerClass = 'sp-filters-container',
      spFiltersContainerSelector = '.' + spFiltersContainerClass,

      spFiltersTitleClass = 'sp-filters-title',
      spFiltersTitleSelector = '.' + spFiltersBaseClass,

      spFiltersBaseClass = 'sp-filters',
      spFiltersBaseSelector = '.' + spFiltersBaseClass,

      spFilterClass = 'sp-filter',
      spFilterSelector = '.' + spFilterClass,
      spFilterOpenClass = 'sp-filter-open',

      spFilterTriggerClass = 'sp-filter-trigger',
      spFilterTriggerSelector = '.' + spFilterTriggerClass,

      spFilterTriggerTextClass = 'sp-filter-trigger-text',
      spFilterTriggerTextSelector = '.' + spFilterTriggerTextClass,

      spFilterCountClass = 'sp-filter-count',
      spFilterCountSelector = '.' + spFilterCountClass,
      spFilterCountOnClass = 'sp-filter-count-on',

      spFilterCountValClass = 'sp-filter-count-val',
      spFilterCountValSelector = '.' + spFilterCountValClass,

      spFilterOptionsClass = 'sp-filter-options',
      spFilterOptionsSelector = '.' + spFilterOptionsClass,

      spFilterOptionClass = 'sp-filter-option',
      spFilterOptionSelector = '.' + spFilterOptionClass,

      spFilterOptionCheckboxClass = 'sp-filter-option-checkbox',
      spFilterOptionCheckboxSelector = '.' + spFilterOptionCheckboxClass,

      spFilterOptionTextClass = 'sp-filter-option-text',
      spFilterOptionTextSelector = '.' + spFilterOptionTextClass,

      spFilterOptionCountClass = 'sp-filter-option-count'
      spFilterOptionCountSelector = '.' + spFilterOptionCountClass

      spFilterButtonsClass = 'sp-filter-buttons',
      spFilterButtonsSelector = '.' + spFilterButtonsClass,
      spFilterClearClass = 'sp-filter-clear',
      spFilterClearSelector = '.' + spFilterClearClass,
      spFilterApplyClass = 'sp-filter-apply',
      spFilterApplySelector = '.' + spFilterApplyClass,
      spFilterResetClass = 'sp-filter-reset',
      spFilterResetHideClass = 'sp-filter-reset-hide',
      spFilterResetSelector = '.' + spFilterResetClass,

      spFilterDataAttrCategory = 'filter-category';

  function spFilterBuilder(filters, filterByLabel, filterApplyLabel, filterResetLabel, filterClearLabel, params) {
    // Make Templates
    var containerTempl = spFilterContainerTemplMake(),
        titleTempl = spFilterTitleTemplMake(filterByLabel),
        baseTempl = spFilterBaseTemplMake(),
        buttonsTempl = spFilterButtonsTemplMake(filterApplyLabel, filterResetLabel);

    // If container already exists then remove
    spFilterContainerRemove();
    // Inject the filters container
    spInjectTempl(spFiltersInjectLocation, containerTempl);

    var container = $(spFiltersContainerSelector);

    spInjectTempl(container, titleTempl);
    spInjectTempl(container, baseTempl);

    var base = $(spFiltersBaseSelector);

    $.each(filters, function(index, filter) {
      if ($(filter.SubCategoryList).length) {
        var filterTempl = spFilterTemplMake(filter, filterClearLabel);
        spInjectTempl(base, filterTempl);
      }
    });

    spInjectTempl(base, buttonsTempl);

    if (params) {
      spFiltersChecksAssign(params);
    }

  };

  function spFilterContainerTemplMake() {
    var template = '<div class="' + spFiltersContainerClass + '"></div>';
    return template;
  };

  function spFilterContainerRemove() {
    $(spFiltersContainerSelector).remove();
  };

  function spFilterTitleTemplMake(filtersTitle) {
    var template =
      '<h3 class="' + spFiltersTitleClass + '">' +
        filtersTitle +
      '</h3>';
    return template;
  };

  function spFilterBaseTemplMake() {
    var template = '<div class="' + spFiltersBaseClass + '"></div>';
    return template;
  };

  function spFilterTemplMake(filter, filterClearLabel) {
    var optionArr = [];

    var optionArrMake =
      $.each(filter.SubCategoryList, function(index, option) {
        var oID = option.CategoryId ? option.CategoryId : option.Name;
        optionArr.push(
          '<div class="' + spFilterOptionClass + '">' +
            '<label class="checkbox">' +
              '<input type="checkbox" class="' + spFilterOptionCheckboxClass + '" data-uuid="' + oID + '" value="' + option.Name + '">' +
              '<span class="' + spFilterOptionTextClass + '">' +
                option.Name +
              '</span>' +
              '<span class="' + spFilterOptionCountClass + '">' +
                '(' + option.Count + ')' +
              '</span>' +
            '</label>' +
          '</div>'
        );
      });

    var categoryStr = filter.Name,
        category = categoryStr.replace(/\s+/g, '');

    var template =
      '<div class="' + spFilterClass + '" data-' + spFilterDataAttrCategory + '="' + category + '">' +
        '<button type="button" class="' + spFilterTriggerClass + '">' +
          '<span class="' + spFilterTriggerTextClass + '">' +
            filter.Name +
          '</span>' +
          '<span class="' + spFilterCountClass + '">' +
            '(' +
            '<span class="' + spFilterCountValClass + '">' +
             '0' +
            '</span>' +
            ')' +
          '</span>' +
          '<span class="icon-chevron-thin-down"></span>' +
        '</button>' +
        '<div class="' + spFilterOptionsClass + '">' +
          optionArr.join('') +
          '<button type="button" class="' + spFilterClearClass + '">' +
            filterClearLabel +
          '</button>' +
        '</div>' +
      '</div>';

    return template;
  };

  function spFilterButtonsTemplMake(filterApplyLabel, filterResetLabel) {
    var template =
      '<div class="' + spFilterButtonsClass + '">' +
        '<button type="button" class="' + spFilterApplyClass + '">' +
          filterApplyLabel +
        '</button>' +
        '<button type="button" class="' + spFilterResetClass + '">' +
          filterResetLabel +
        '</button>' +
      '</div>';
    return template;
  };

  function spFilterHandlers() {
    spFilterTriggerClickHandler();
    spFilterCheckboxHandler();
    spFilterClearClickHandler();
    spFilterApplyClickHandler();
    spFilterResetClickHandler();
    spFilterDocClickHandler();
  };

  function spFilterDocClickHandler() {
    $D.on('click', function(event) {
      var clicked = $(event.target);
      if (clicked.is(spFilterSelector) || clicked.parents().is(spFilterSelector)) {
      } else {
        spFilterClose($(spFilterSelector));
      }
    });
  };

  function spFilterTriggerClickHandler() {
    $D.on('click', spFilterTriggerSelector, function(event) {
      event.preventDefault();
      var filter = $(this).parent(spFilterSelector);
      if (filter.hasClass(spFilterOpenClass)) {
        // close this filter
        spFilterClose(filter);
      } else {
        // close all other filters
        spFilterClose($(spFilterSelector));
        // open this filters
        spFilterOpen(filter);
      }
    });
  };

  function spFilterClose(filter) {
    filter.removeClass(spFilterOpenClass);
  };

  function spFilterOpen(filter) {
    filter.addClass(spFilterOpenClass);
  };

  function spFilterCheckboxHandler() {
    $D.on('change', spFilterOptionCheckboxSelector, function() {
      var filter = $(this).parents(spFilterSelector);
      spFilterCheckCount(filter);
    });
  };

  function spFilterClearClickHandler() {
    $D.on('click', spFilterClearSelector, function(event) {
      event.preventDefault();
      var filter = $(this).parents(spFilterSelector);
      spFilterCheckClear(filter);
    });
  };

  function spFilterCheckCount(filter) {
    var filterChecks = filter.find(spFilterOptionCheckboxSelector + ':checked'),
        checkCount = filterChecks.length;

    if (checkCount > 0) {
      filter.find(spFilterCountSelector)
            .addClass(spFilterCountOnClass);
    } else {
      filter.find(spFilterCountSelector)
            .removeClass(spFilterCountOnClass);
    }

    filter.find(spFilterCountValSelector)
          .text(checkCount);
  };

  function spFilterCheckClear(filter) {
    var filterCheckbox = filter.find(spFilterOptionCheckboxSelector);
    filterCheckbox.prop('checked', false)
                  .trigger('change');
  };

  function spFilterApplyClickHandler() {
    $D.on('click', spFilterApplySelector, function(event) {
      event.preventDefault();
      var params = spParamsObjMake(true);
      params.pageNumber = '1';
      var urlParams = spUrlParamMake(params);
      spDataGet(urlParams);
    });
  };

  function spFilterResetClickHandler() {
    $D.on('click', spFilterResetSelector, function(event) {
      event.preventDefault();
      var params = spParamsObjMake(false),
          urlParams = spUrlParamMake(params);
      spDataGet(urlParams);
    });
  };

  function spFiltersChecksAssign(params) {
    $.each(params, function(k, v) {
      //Validate if data is encoded
      var kvalue = (k.match(/%[0-9a-f]{2}/i) == null) ? k : decodeURIComponent(k);
      var category = $(spFilterSelector + '[data-' + spFilterDataAttrCategory + '="' + kvalue + '"]'),
          checksArr = v.split(',');
      /*var category = $(spFilterSelector + '[data-' + spFilterDataAttrCategory + '="' + k + '"]'),
          checksArr = v.split(',');*/
      spFiltersChecksMark(checksArr, category);
    });
  };

  function spFiltersChecksMark(checks, category) {
    $.each(checks, function(index, check) {
      var filter = category.find(spFilterOptionCheckboxSelector + '[data-uuid="' + check + '"]');
      filter.prop('checked', true)
            .trigger('change');
    });
  };



/////////////////////////////////////////////////////////
// RESULTS
/////////////////////////////////////////////////////////

  // No Results Global Vars
  var spNoResultsGlobalClass = 'sp-no-results-global',
      spNoResultsGlobalSelector = '.' + spNoResultsGlobalClass,
      spNoResultsGlobal = $(spNoResultsGlobalSelector),

      spNoResultsProductClass = 'sp-no-results-product',
      spNoResultsProductSelector = '.' + spNoResultsProductClass,
      spNoResultsProduct = $(spNoResultsProductSelector),

      spNoResultsDocumentClass = 'sp-no-results-document',
      spNoResultsDocumentSelector = '.' + spNoResultsDocumentClass,
      spNoResultsDocument = $(spNoResultsDocumentSelector),

      spNoResultsClass = 'sp-no-results',
      spNoResultsSelector = '.' + spNoResultsClass,
      spNoResults = $(spNoResultsSelector),
      spNoResultsShowClass = 'sp-no-results-show';

  // Results Global Vars
  // Don't create $ vars for injected content
  var spResultsContainerClass = 'sp-results-container',
      spResultsContainerSelector = '.' + spResultsContainerClass,

      spResultsBoxClass = 'sp-results-box',
      spResultsBoxSelector = '.' + spResultsBoxClass,

      spResultsClass = 'sp-results',
      spResultsSelector = '.' + spResultsClass,

      spResultsTitleClass = 'sp-results-title',

      spResultClass = 'sp-result',
      spResultContentClass = 'sp-result-content',
      spResultIconClass = 'sp-result-icon',
      spResultCategoryClass = 'sp-result-category',
      spResultTitleLinkClass = 'sp-result-title-link',
      spResultTitleClass = 'sp-result-title',
      spResultTextClass = 'sp-result-text',
      spResultDateClass = 'sp-result-date',
      spResultRevisionClass = 'sp-result-revision',

      spResultsProductsClass = 'sp-results-products',
      spResultsProductsSelector = '.' + spResultsProductsClass

      spResultsProductsHeaderClass = 'sp-products-header',
      spResultsProductsHeaderSelector = '.' + spResultsProductsHeaderClass,

      spResultsProductsAllClass = 'sp-products-all',

      spResultsProductsAllLinkClass = 'sp-products-all-link',
      spResultsProductsAllLinkSelector = '.' + spResultsProductsAllLinkClass,

      spParametricContainerClass = 'search-parametric-container',

      spSearchKeyClass = 'sp-searchkey',
      spSearchKeySelector = '.' + spSearchKeyClass;

  function spResultsBuilder(mode, key, des, data) {
    // first clear results
    spResultsClear();

    // check data for results
    var resultsProd = data.ProductResults || {},
        resultsProdCheck = resultsProd.length ? true : false;
        resultsGlobal = data.GlobalSearchResults || {},
        resultsGlobalCheck = resultsGlobal.length ? true : false;

    // reset/hide all no-results container
    spNoResultsHide(spNoResults);
    // do something if results dont exist
    if (mode === modeGlobal && !resultsProdCheck && !resultsGlobalCheck) {
      spNoResultsShow(spNoResultsGlobal, key, false);
    }
    if (mode === modeProduct && !resultsProdCheck) {
      spNoResultsShow(spNoResultsProduct, key, des);
    }
    if (mode === modeDocument && !resultsGlobalCheck) {
      spNoResultsShow(spNoResultsDocument, key, false);
    }

    // then draw results
    if (mode === modeGlobal || mode === modeProduct) {
      if (resultsProdCheck) {
        spResultsProductBuilder(mode, data);
      }
    }
    if (mode === modeGlobal || mode === modeDocument) {
      if (resultsGlobalCheck) {
        spResultsGlobalBuilder(mode, data);
      }
    }
  };

  function spNoResultsHide(element) {
    element.removeClass(spNoResultsShowClass);
  };

  function spNoResultsShow(element, key, des) {
    // add values to search boxes
    if (des) {
      if (key && des) {
        spSearchKeyInject(key + ', ' + des);
      } else {
        var text = key || des;
        spSearchKeyInject(text);
      }
    } else {
      spSearchKeyInject(key);
    }

    // remove filter container
    if ($(spFiltersContainerSelector).length) {
      spFilterContainerRemove();
    }

    // show no results element
    element.addClass(spNoResultsShowClass);
  };

  function spResultsClear() {
    $(spResultsContainerSelector).remove();
  };

  function spSearchKeyInject(text) {
    $(spSearchKeySelector).html(text);
  };

  function spResultsGlobalBuilder(mode, data) {
    // make container
    var containerLocation = $SP;
        container = spResultsGlobalContainerTemplMake(mode);
    // inject container
    spInjectTempl(containerLocation, container);

    // Set up box location
    var boxLocation = $(spResultsBoxSelector + '-' + mode);

    // make title
    var titleLabel = (mode === modeDocument) ? data.DocumentResultsLabel : data.SiteResultsLabel,
        title = spResultsTitleTemplMake(titleLabel, true);
    // inject title
    spInjectTempl(boxLocation, title);

    // make paging containers
    var pagingTopContainer = spPagingContainerTopTemplMake(),
        pagingBottomContainer = spPagingContainerBottomTemplMake();

    // inject Top Paging
    spInjectTempl(boxLocation, pagingTopContainer);

    // make base
    var base = spResultsGlobalBaseTemplMake(mode);
    // inject base
    spInjectTempl(boxLocation, base);
    // Set up base location
    var baseLocation = $(spResultsSelector + '-' + mode);

    // inject Bottom Paging
    spInjectTempl(boxLocation, pagingBottomContainer);

    // Set up paging locations
    var pagingTopLocation = $(spPagingTopSelector),
        pagingBottomLocation = $(spPagingBottomSelector),
        // make paging templates
        pagingResultsLabel = spPagingResultsLabelTemplMake(data.CurrentResultsLabel, data.ResultCount),
        pagingSizeSelector = spPagingSizeSelectorTemplMake(data.ShowLabel, data.PageSize, data.PagingFilterList),
        pagingNav = spPagingNavTemplMake(data.PageNumber, data.TotalPages);

    // Inject Top Paging
    spInjectTempl(pagingTopLocation, pagingResultsLabel);
    spInjectTempl(pagingTopLocation, pagingSizeSelector);
    spInjectTempl(pagingTopLocation, pagingNav);
    // Inject Bottom Paging
    spInjectTempl(pagingBottomLocation, pagingNav);

    // Inject Results
    var results = data.GlobalSearchResults;
    $.each(results, function(index, result) {
      var resultTempl = spResultGlobalTemplMake(result);
      spInjectTempl(baseLocation, resultTempl);
    });

  };

  function spResultsTitleTemplMake(title, rightNavLink) {
    var cnLink = rightNavLink ? 'cn-link ' : '';
    var template =
      '<h2 class="' + cnLink + spResultsTitleClass + '">' +
        title +
      '</h2>';
    return template;
  };

  function spResultsGlobalContainerTemplMake(mode) {
    var template =
      '<div class="' + spResultsContainerClass + '">' +
        '<div class="container">' +
          '<div class="' + spResultsBoxClass + ' ' + spResultsBoxClass + '-' + mode + '">' +
          '</div>' +
        '</div>' +
      '</div>';
    return template;
  };

  function spResultsGlobalBaseTemplMake(mode) {
    var template =
      '<div class="' + spResultsClass + ' ' + spResultsClass + '-' + mode + '">' +
      '</div>';
    return template;
  };

  function spResultGlobalTemplMake(result) {
    var iconData = result.SearchResultIcon || false,
        icon = iconData ? spResultGlobalIconTemplMake(iconData) : '',
        categoryData = result.SearchCategory || false,
        category = categoryData ? spResultGlobalCategoryTemplMake(categoryData) : '',
        titleData = result.SearchResultTitle || false,
        titleUrlData = result.SearchResultUrl || false,
        isExternalLink = result.IsExternalLink || false,
        title = titleData ? spResultGlobalTitleTemplMake(titleData, titleUrlData, isExternalLink) : '',
        textData = result.SearchResultDescription || false,
        text = textData ? spResultGlobalTextTemplMake(textData) : '',
        dateData = result.SearchResultDate || false,
        date = dateData ? spResultGlobalDateTemplMake(dateData) : '',
        revisionData = result.SearchResultRevision || false,
        revision = revisionData ? spResultGlobalRevisionTemplMake(revisionData) : '';

    var template =
      '<div class="' + spResultClass + '">' +
        icon +
        '<div class="' + spResultContentClass + '">' +
          category +
          title +
          text +
        '</div>' +
        date +
        revision +
      '</div>';
    return template;
  };

  function spResultGlobalIconTemplMake(data) {
    var template =
      '<div class="' + spResultIconClass + '">' +
        '<span class="' + data + '"></span>' +
      '</div>';
    return template;
  };

  function spResultGlobalCategoryTemplMake(data) {
    var template =
      '<div class="' + spResultCategoryClass + '">' +
        data +
      '</div>';
    return template;
  };

  function spResultGlobalTitleTemplMake(title, url, isExternalLink) {
    var target = isExternalLink ? '_blank' : '';

    var titleMake =
      url ?
      '<a href="' + url + '" class="' + spResultTitleLinkClass + '" target="' + target + '">' +
        title +
      '</a>'
      : title;

    var template =
      '<div class="' + spResultTitleClass + '">' +
        titleMake +
      '</div>';
    return template;
  };

  function spResultGlobalTextTemplMake(data) {
    var template =
      '<div class="' + spResultTextClass + '">' +
        data +
      '</div>';
    return template;
  };

  function spResultGlobalDateTemplMake(data) {
    var template =
      '<div class="' + spResultDateClass + '">' +
        data +
      '</div>';
    return template;
  };

  function spResultGlobalRevisionTemplMake(data) {
    var template =
      '<div class="' + spResultRevisionClass + '">' +
        data +
      '</div>';
    return template;
  };

  function spResultsProductBuilder(mode, data) {
    // make container
    var containerLocation = $SP;
        container = spResultsProductContainerTemplMake();
    // inject container
    spInjectTempl(containerLocation, container);

    // Set up header location
    var headerLocation = $(spResultsProductsHeaderSelector);
    // make title
    var titleLabel = data.ProductResultsLabel,
        title = spResultsTitleTemplMake(titleLabel, false);
    // inject title
    spInjectTempl(headerLocation, title);

    // inject data
    var payload = {data: data.ProductResults, mode: data.ResultsMode};
    loadParametricTable(payload);
    scrollToTable();
  };

  function scrollToTable() {
    var tblIndex = window.location.toString().indexOf('tbl=');
    if (tblIndex > -1) {
      var tblId = window.location.toString().substring(tblIndex + 4);
      var tblHeaderId = '#header_' + tblId;
      var rect = $(tblHeaderId)[0].getBoundingClientRect();
      $('html, body').animate({ scrollTop: rect.top - 85}, 'fast');
    }
  };

  function spResultsProductContainerTemplMake() {
    var template =
      '<div class="' + spResultsContainerClass + ' ' + spResultsProductsClass + '">' +
        '<div class="container ' + spResultsProductsHeaderClass + '"></div>' +
        '<div class="container ' + spParametricContainerClass + '"></div>';
      '</div>';
    return template;
  };

  function spResultsProductAllTemplMake(label) {
    var template =
      '<div class="container ' + spResultsProductsAllClass + '">' +
        '<button type="button" class="' + spResultsProductsAllLinkClass + '">' +
          label +
          '<span class="icon-chevron-thin-right"></span>' +
        '</button>' +
      '</div>';
    return template;
  };

  function spResultsProductAllClickHandler() {
    $D.on('click', spResultsProductsAllLinkSelector, function(event) {
      event.preventDefault();
      var params = spParamsObjMake(true);
      // switch the mode
      params.mode = 2;
      params.des = params.key;
      params.key = '';
      // build the url
      var urlParams = spUrlParamMake(params);
      // get the data
      spDataGet(urlParams);
      $('html, body').animate({ scrollTop: 0 }, 'fast');
    });
  }

/////////////////////////////////////////////////////////
// PAGING
/////////////////////////////////////////////////////////

  var spPagingClass = 'sp-paging',
      spPagingSelector = '.' + spPagingClass,

      spPagingTopClass = 'sp-paging-top',
      spPagingTopSelector = '.' + spPagingTopClass,

      spPagingBottomClass = 'sp-paging-bottom',
      spPagingBottomSelector = '.' + spPagingBottomClass,

      spPagingResultsLabelClass = 'sp-paging-results-label',
      spPagingResultsLabelSelector = '.' + spPagingResultsLabelClass,

      spPagingSizeClass = 'sp-paging-size-selector',

      spPagingSizeLabelClass = 'sp-paging-size-selector-label',

      spPagingSizeSelectClass = 'sp-paging-size-select',
      spPagingSizeSelectSelector = '.' + spPagingSizeSelectClass,

      spPagingNavClass = 'sp-paging-nav',
      spPagingNavSelector = '.' + spPagingNavClass,

      spPagingNavLinksClass = 'sp-paging-nav-links',

      spPagingNavLinkClass = 'sp-paging-nav-link',
      spPagingNavLinkSelector = '.' + spPagingNavLinkClass,

      spPagingNavLinkActiveClass = 'sp-paging-nav-link-active',
      spPagingNavLinkActiveSelector = '.' + spPagingNavLinkActiveClass

      spPagingNavFirstClass = 'sp-paging-nav-first',
      spPagingNavFirstSelector = '.' + spPagingNavFirstClass,

      spPagingNavPrevClass = 'sp-paging-nav-prev',
      spPagingNavPrevSelector = '.' + spPagingNavPrevClass,

      spPagingNavNextClass = 'sp-paging-nav-next',
      spPagingNavNextSelector = '.' + spPagingNavNextClass,

      spPagingNavLastClass = 'sp-paging-nav-last',
      spPagingNavLastSelector = '.' + spPagingNavLastClass,

      spPagingDataAttrTotal = 'page-total',
      spPagingDataAttrPage = 'page';

  function spPagingContainerTopTemplMake() {
    var template =
      '<div class="' + spPagingClass + ' ' + spPagingTopClass + '"></div>';
    return template;
  };

  function spPagingContainerBottomTemplMake() {
    var template =
      '<div class="' + spPagingClass + ' ' + spPagingBottomClass + '"></div>';
    return template;
  };

  function spPagingResultsLabelTemplMake(label, resultCount) {
    var template =
      '<div class="' + spPagingResultsLabelClass + '" total-result-count="' + resultCount + '">' +
        label +
      '</div>';
    return template;
  };

  function spPagingSizeSelectorTemplMake(label, size, options) {
    var optionsArr = [];

    $.each(options, function(index, option) {
      var sizeCheck = size.toString(),
          selected = (option.Value === sizeCheck) ? 'selected' : '';
      var optionMake =
        '<option value="' + option.Value + '" ' + selected + '>' +
          option.Name +
        '</option>';
      optionsArr.push(optionMake);
    });

    var template =
      '<div class="' + spPagingSizeClass + '">' +
        '<div class="' + spPagingSizeLabelClass + '">' +
          label +
        '</div>' +
        '<div class="select-bg">' +
          '<select class="' + spPagingSizeSelectClass + '">' +
            optionsArr.join('') +
          '</select>' +
          '<div class="pri-nav-typedir up">' +
            '<i class="icon-chevron-thin-down"></i>' +
          '</div>' +
        '</div>' +
      '</div>';
    return template;
  };

  function spPagingNavTemplMake(page, total) {
    var pageArr = [];

    // Change pagesShown variable to set new max
    // amount of pages shown in paging nav
    var pagesShown = 5,
        pagesShownHalf = Math.floor(pagesShown/2);

    var start = (total < pagesShown) ? 1 : (page - pagesShownHalf),
        end = (total < pagesShown) ? total : (page + pagesShownHalf);

    if (start < 1) {
      var diff = (pagesShown - pagesShownHalf - start);
      end = page + diff;
      start = 1;
    }

    if (end > total) {
      var diff = (end - total);
      start = (page - (pagesShownHalf + diff));
      end = total;
    }

    for (var i = start; i < (end + 1); i++) {
      var pageNum = i;
          pageActiveCheck = (pageNum === page) ? (' ' + spPagingNavLinkActiveClass) : '';
      var pageMake =
        '<button type="button" class="' + spPagingNavLinkClass + pageActiveCheck + '" data-' + spPagingDataAttrPage + '="' + pageNum + '">' +
          pageNum +
        '</button>';
      pageArr.push(pageMake);
    }

    var template =
      '<div class="' + spPagingNavClass + '" data-' + spPagingDataAttrTotal + '="' + total + '">' +
        '<button type="button" class="' + spPagingNavFirstClass + '">' +
          '<i class="icon-beginning-arrow"></i>' +
        '</button>' +
        '<button type="button" class="' + spPagingNavPrevClass + '">' +
          '<i class="icon-chevron-thin-left"></i>' +
        '</button>' +
        '<div class="' + spPagingNavLinksClass + '">' +
          pageArr.join('') +
        '</div>' +
        '<button type="button" class="' + spPagingNavNextClass + '">' +
          '<i class="icon-chevron-thin-right"></i>' +
        '</button>' +
        '<button type="button" class="' + spPagingNavLastClass + '">' +
          '<i class="icon-end-arrow"></i>' +
        '</button>' +
      '</div>';

    return template;
  };


  function spPagingSizeSelectHandler() {
    $D.on('change', spPagingSizeSelectSelector, function(event) {
      var params = spParamsObjMake(true);
      params.pageNumber = '1';
      var urlParams = spUrlParamMake(params);
      spDataGet(urlParams);
    });
  };

  function spPagingNavHandlers() {
    spPagingNavLinkClickHandler();
    spPagingNavFirstClickHandler();
    spPagingNavPrevClickHandler();
    spPagingNavNextClickHandler();
    spPagingNavLastClickHandler();
  };

  function spPagingNavLinkClickHandler() {
    $D.on('click', spPagingNavLinkSelector, function(event) {
      event.preventDefault();
      // clear
      spPagingNavActiveClear();
      // make active
      $(this).addClass(spPagingNavLinkActiveClass);
      // run search
      var params = spParamsObjMake(true),
          urlParams = spUrlParamMake(params);
      spDataGet(urlParams);
    });
  };

  function spPagingNavFirstClickHandler() {
    $D.on('click', spPagingNavFirstSelector, function(event) {
      event.preventDefault();
      // clear
      spPagingNavActiveClear();
      // set page to 1
      var page = 1;

      // run search
      var params = spParamsObjMake(true);
      params.pageNumber = page;
      var urlParams = spUrlParamMake(params);
      spDataGet(urlParams);
    });
  };

  function spPagingNavPrevClickHandler() {
    $D.on('click', spPagingNavPrevSelector, function(event) {
      event.preventDefault();
      var currentPage = spPagingCurrentGet(),
          prevPage = currentPage - 1;
      // clear
      spPagingNavActiveClear();
      // make sure page stays within total pages
      var page = (prevPage <= 1) ? 1 : prevPage;
      // set active
      spPagingNavActiveSet(page);
      // run search
      var params = spParamsObjMake(true),
          urlParams = spUrlParamMake(params);
      spDataGet(urlParams);
    });
  };

  function spPagingNavNextClickHandler() {
    $D.on('click', spPagingNavNextSelector, function(event) {
      event.preventDefault();
      var currentPage = spPagingCurrentGet(),
          totalPages = $(spPagingNavSelector).data(spPagingDataAttrTotal),
          nextPage = currentPage + 1;
      // clear
      spPagingNavActiveClear();
      // make sure page stays within total pages
      var page = (nextPage >= totalPages) ? totalPages : nextPage;
      // set active
      spPagingNavActiveSet(page);
      // run search
      var params = spParamsObjMake(true),
          urlParams = spUrlParamMake(params);
      spDataGet(urlParams);
    });
  };

  function spPagingNavLastClickHandler() {
    $D.on('click', spPagingNavLastSelector, function(event) {
      event.preventDefault();
      // clear
      spPagingNavActiveClear();
      // set page to last
      var page = $(spPagingNavSelector).data(spPagingDataAttrTotal);
      // run search
      var params = spParamsObjMake(true);
      params.pageNumber = page;
      var urlParams = spUrlParamMake(params);
      spDataGet(urlParams);
    });
  };

  function spPagingNavActiveClear() {
    $(spPagingNavLinkSelector).removeClass(spPagingNavLinkActiveClass);
  };

  function spPagingNavActiveSet(page) {
    $(spPagingNavLinkSelector + '[data-' + spPagingDataAttrPage + '="' + page + '"]').addClass(spPagingNavLinkActiveClass);
  };

  function spPagingCurrentGet() {
    var number = $(spPagingNavLinkActiveSelector).data(spPagingDataAttrPage);
    return number;
  };



/////////////////////////////////////////////////////////
// SPINNER
/////////////////////////////////////////////////////////
  var spSpinnerClass = 'sp-spinner',
      spSpinnerSelector = '.' + spSpinnerClass;

  function spSpinnerBuild() {
    // make container
    var spinnerLocation = $SP;
        spinnerTempl = spSpinnerMake();

    if ($(spFiltersContainerSelector).length) {
      spFilterContainerRemove();
    }

    if ($(spResultsContainerSelector).length) {
      spResultsClear();
    }

    // inject container
    spInjectTempl(spinnerLocation, spinnerTempl);
  };

  function spSpinnerDestroy() {
    $(spSpinnerSelector).remove();
  };

  function spSpinnerMake() {
    var template =
      '<div class="' + spSpinnerClass + '"></div>';
    return template;
  };



/////////////////////////////////////////////////////////
// RETURN
/////////////////////////////////////////////////////////

  // return our public object
  return spPublic;

})();

$(document).ready(function(){
  if ($('.sp').length) {
    sp.init();
  }
});

(function() {
 	'use strict';
 	
 	var setEqualWidth = function(){
 		$('.static-tables-container .pst').each(function(){
 			var paramId = $(this).attr('id').split('_');

 			var header = $(this).find('div').filter('[id=header_'+ paramId[1] +']');
 			var results = $(this).find('tbody').filter('[id=results_'+ paramId[1] +']');
 			
 			var headerWidth = $(header).width();
 			var resultsWidth = $(results).width();

 			if(headerWidth > resultsWidth){
 				$(results).css('width', headerWidth + 'px');
 			}else{
 				$(header).css('width', resultsWidth + 'px');
 			}
 			
 		});

 	};

 	$(document).ready(function(){
		setEqualWidth();
	});

})(jQuery);
function tierTwoHeaderToggle() {

  $(document).on('click', '.trigger-expandable-open', function() {
    $('.trigger-expandable-open').removeClass('opened');
    $(this).addClass('opened');
    var clickedButton = $(this),
        buttonData = clickedButton.data('to-expand'),
        expandableAreasWrap = $(this).parents('.expandable-areas'),
        expandableArea = expandableAreasWrap.find('.expandable-area'),
        expandableAreaTriggered = expandableAreasWrap.find('.expandable-area[data-expandable="'+ buttonData +'"]');
    // hide all expandable area divs that are within our expandable areas parent  
    expandableArea.hide();
    // show the expandable area with matching data attribute
    expandableAreaTriggered.show();
  });

  $(document).on('click', '.trigger-expandable-close', function() {
    $('.trigger-expandable-open').removeClass('opened');
    var clickedButton = $(this),
        expandableArea = $(this).parents('.expandable-area');
    // hide parent expandable area
    expandableArea.hide();
  });
  

  // $('.page-header-show-more-btn button').click(function() {
  //   var $btn = $(this),
  //     data = $btn.attr('data'),
  //     $thisArea = $('.header-copy .expandable-area.' + data);
  //   //Alternate content between tabs
  //   $('.expandable-area').hide().eq($(this).index()).show();
  //   // $thisArea.is(':visible') ? $thisArea.hide() : $thisArea.show();
  //   $('.expandable-area .icon-close').click(function() {
  //     $thisArea.hide();
  //   });
  // });
}



function tierTwoHeaderReadMore() {
  var readMoreBtn = $('.read-more-container .read-more');
  var readLessBtn = $('.read-more-container .read-less');
  readMoreBtn.click(function() {
    var thisbtn = $(this);
    var btnParent = thisbtn.closest('.read-more-container');
    thisbtn.closest('.read-more-container').find('.hidden-area').slideToggle(400, function() {
      btnParent.find('.read-less').show();
      btnParent.find('.read-more').hide();
    });
  });
  readLessBtn.click(function() {
    var thisbtn = $(this);
    var btnParent = thisbtn.closest('.read-more-container');
    thisbtn.closest('.read-more-container').find('.hidden-area').hide(function() {
      btnParent.find('.read-more').show();
      btnParent.find('.read-less').hide();
    });
  });
}

function tierTwoHeaderContentHeight() {
  $('.t2-read-more.read-more-content').each(function () {
    if ( $(this).outerHeight() < 160 ) {
      $('.t2-read-more .read-more, .t2-read-more .read-less').hide();
    } else {
      $(this).children('p').slice(1).addClass('hidden-area');
      $('.t2-read-more .read-more').show();
    }
    
  })
}

$(document).ready(function() {
  tierTwoHeaderToggle();
  tierTwoHeaderReadMore();
  tierTwoHeaderContentHeight();
});

(function() {
  'use strict';
  var FAQtoggle = function() {
    var $FAQToggle = $('.faq .toggle');
    var $FAQAnswer = $('.faq .answer');
    var $FAQexpandAll = $('.expand-all');
    var $FAQcollapseAll = $('.collapse-all');

    $FAQToggle.click(function() {
      $(this).children($FAQAnswer).slideToggle();
      $(this).toggleClass('open');
    });

    $FAQexpandAll.click(function() {
      $FAQToggle.each(function() {
        if (!$(this).hasClass('open')) {
          $(this).children($FAQAnswer).slideDown();
          $(this).toggleClass('open');
          $FAQcollapseAll.show();
          $FAQexpandAll.hide();
        }

      });
    });

    $FAQcollapseAll.click(function() {
      $FAQToggle.each(function() {
        $(this).children($FAQAnswer).slideUp();
        $(this).removeClass('open');
        $FAQcollapseAll.hide();
        $FAQexpandAll.show();
      });
    });
  };

  $(document).ready(FAQtoggle);
})(jQuery);


(function($){
  'use strict';

  $.fn.contentnav = function(){
    var links = [];
    var ptLinks = [];
    window.addContentLinks = function(ele) {
      links.push(ele);
    };

    window.gatherContentLinks = function() {
      links = [];
      gatherLinks();
    };

    if($('body').attr('data-content-nav') === 'false' ){
      //console.log('No content navigation for this page.');
      return;
    }

    $(document).ready(function(){   
      getBlockDiagramsLinks();
      gatherLinks();
      //position();
      printPage();
      contactLink();

      //Social icon work around for IE
       $(".social-wrap").hover(function () {
          $('.cn-main').toggleClass("social-hover");
       });

    });

    $(window).on('resize',function(){
      //position();
    });

    $(document).on('mouseleave','.cn-main',function(){
      $('.cn-main').removeClass('cn-active');
    });

    $(document).on('click','[data-cn-act]',function(){
      goto($(this));
      setColorCurrentLink();
    });

    $(document).on('scroll',function(e){           
      setCurrentLink();
      //setColorCurrentLink();
    });

    //Set active item in right nav after click on tab component
    $(document).on('click','.tabs .carousel-container', function(){
      setColorCurrentLink();
      //Hide Asociated Product Tables only for Block Diagrams
      $('.parts-table-target h2').css('display',"none");
    });

    function setColorCurrentLink(){
      var blockDiagram_activeTab = $('.block-diagram ul li').find('a.active').attr('href');
      var carousel_activeTab = $('.tabs .carousel-container ul li').find('a.active').attr('href');

      var activeLink = (blockDiagram_activeTab != undefined) ? blockDiagram_activeTab : carousel_activeTab;

      var buttonItem = $('.cn-dyn-inner li').find('button').filter('[data-href-tab="'+ activeLink +'"]');
      //var activeLink = $('.block-diagram ul li').find('a.active').attr('href');
      

      if($(buttonItem).length > 0){
        // Check if browser is ie8-9
        var oldIE;
        if ($('html').is('#lt-ie10')) {
          oldIE = true;
        }

        if(oldIE){
          // If IE8/9, change icon color color
          $('.cn-dyn-inner li').each(function(){
            $(this).find('.icon-dot').css('color','#999999');
          });
          //Active item
          $(buttonItem).find('icon-dot').
          $('.cn-dyn-inner li').find('button').filter('[data-href-tab="'+ activeLink +'"]').find('.icon-dot').css('color','#1aa3de');  
        }else{
          //Chage color of all items
          $('.cn-dyn-inner li').each(function(){
              $(this).find('.icon-dot').css('color','#000000');
          });
          $('.cn-dyn-inner li').find('button').filter('[data-href-tab="'+ activeLink +'"]').find('.icon-dot').css('color','#1aa3de');   
        }
      } 
    }

    function setCurrentLink(){
      var result = 0;
      // Check if browser is ie8-9
      var oldIE;
      if ($('html').is('#lt-ie10')) {
        oldIE = true;
      }
      // Loop through our links and figure out which ones are in view
      var inView = [];

      if (oldIE) {
        // If IE8/9, change icon color color
        for(var i=0,l=links.length;i<l;i++){
          var $s = links[i];         
          var id = i;
          if( isElementInViewport($s) ) {
            inView.push([$s,$('[data-cn-act="'+id+'"]').find('i')]);
          } else {
            $('[data-cn-act="'+id+'"]').find('i').css('color','#999999');
          }
        }
      } else {
        // ..And here's the full-fat code for everyone else
        for(var i=0,l=links.length;i<l;i++){
          var $s = links[i];                
          var id = i;
          if( isElementInViewport($s) ) {
            inView.push([$s,$('[data-cn-act="'+id+'"]').find('i')]);
          } else {
            $('[data-cn-act="'+id+'"]').find('i').css('color','black');
          }
        }
      }

      if (oldIE) {
        // If IE8/9, change icon color color
        if( inView.length > 0){
          inView[0][1].css('color','#1aa3de');
          for(var i=1,l=inView.length;i<l;i++){
            inView[i][1].css('color','#999999');
          }
        }
      } else {
        // ..And here's the full-fat code for everyone else
        if( inView.length > 0){
          inView[0][1].css('color','#1aa3de');
          for(var i=1,l=inView.length;i<l;i++){
            inView[i][1].css('color','#000000');
          }
        }
      }
    }

    function goto($s){

      var act = ($s.attr('data-cn-act'));
      var data_href_tab = ($s.attr('data-href-tab'));
      var index = parseInt(act,10);
      var offset = '0';
      if( !isNaN(act) ){
        var $gt = links[index];
        console.log($gt);
        if ($gt.offset().top === 0) {
          console.log(ptLinks[index]);
          $gt = $('#' + ptLinks[index] + ' .cn-link');
        }
        offset = ( $gt.offset().top  ) - ( $gt.outerHeight() + $('.pri-nav').height()  );
      }
      $('html,body').animate({
        scrollTop:offset
      });

      if(data_href_tab != undefined)
        setActiveTab(data_href_tab);      
    }

    function position(){
      var $cn = $('.cn-main');
      var wheight = $(window).height();
      var nheight = $cn.height();
      var wndelta =  (wheight - nheight);
      var pos = (wndelta / 5 );
      $cn.css('bottom',pos+'px');
    }

    function gatherLinks(){
      var name;
      var userSetNoShow = $('.cn-noshow').attr('data-cn-count'); //Grab value set by user to set num of visible items
      if(userSetNoShow.length == "0") { //Not set: default to 10 items
        userSetNoShow = 10;
      } else {
        userSetNoShow = parseInt(userSetNoShow, 10)
      }

      $(document).find('.cn-link').each(function(){
        ptLinks.push($(this).parent().attr('id'));
        links.push($(this));
      });

      links.map(function(link, index){
        var l = index; //links.length;
        //find all cn-link's on the page
        if ( $(link).attr('data-short-title')) {
          //if data-short-title exists, use that current data
          name = $(link).attr('data-short-title');
        }
        else {
          //if there is no data-short-title, just use the text of the .cn-link
          name = $(link).text();
        }
        //only show the items that are less than/equal userSetNoShow
        if (l < userSetNoShow) {
          if($(link).attr('href') != undefined){
            var data_href_tab = $(link).attr('href');
            $('.cn-dyn-inner ul').append('<li><button data-cn-act="'+l+'" data-href-tab="'+data_href_tab+'"><span class="cn-wrap"><span class="u-none cn-txt">'+name+'</span><span class="cn-icon"><i class="icon-dot"></i></span></span></button></li>');
            $('.cn-noshow button').attr('data-cn-act', l + 1);
            $('.cn-noshow button').attr('data-href-tab', data_href_tab);
          }else{
            $('.cn-dyn-inner ul').append('<li><button data-cn-act="'+l+'"><span class="cn-wrap"><span class="u-none cn-txt">'+name+'</span><span class="cn-icon"><i class="icon-dot"></i></span></span></button></li>');
            $('.cn-noshow button').attr('data-cn-act', l + 1);
          }
        }
      });
      //Remaining Items not shown
      var totalLinksLength = links.length;
      if (totalLinksLength > userSetNoShow) { //Popluate Other Element with remaining count
        $('.cn-noshow-count').text('(' + (totalLinksLength - userSetNoShow) + ') ');
      }
      else { //Hide Other Element if less than userSetNoShow
        $('.cn-noshow').hide();
      }
    };

    function printPage() {
      $('.icon-print').parents('.cn-main button').on('click', function () {
        window.print();
      });
    }
    function contactLink() { //Issue with Button and href in IE; workaround
      var contactURL = $('.cn-contact').attr('href');
      $('.cn-contact').parent('button').attr('onclick', 'parent.location=' + '\'' + contactURL + '\'');
    }
    function setActiveTab(target){
      //Block Diagrams section
      var blockDiagramTab = $('.tabs.block-diagram .carousel-container');  
      var blockDiagramsContent = $('.block-diagram-carousel.tabbed-content-container');  
      //Tabs section 
      var tab = $('.tabs .carousel-container');
      var tabContent = $('.tabbed-content-container');

      //Set the current active tab active
      var currentTab = ($(blockDiagramTab).length > 0) ? blockDiagramTab : tab;
      //Set the current active content div
      var currentContent = ($(blockDiagramsContent).length > 0) ? $(blockDiagramsContent) : $(tabContent);
      
      //Remove ".active" class from current content and current tab, and hide current content
      $(currentTab).find('ul li a.active').removeClass('active');
      $(currentContent).find('div.active').removeClass('active').hide();

      //Set the new tab and new content
      var newTab = $(currentTab).find('ul li a[href="'+target+'"]');
      var newPosition = $(newTab).parent('li').index();
      var newTarget = target.replace('#','');
      var newContent = $(currentContent).find('div').filter('[id="'+newTarget+'"]');
      
      //Display new content and add '.active' class to new tab
      $(newTab).addClass('active');
      $(newContent).addClass('active').show();
      
      $('.tabs .carousel-container .slick-slider').slick('slickGoTo',newPosition);

      //Update the URL with current tab
      if(history.pushState) {
        history.pushState(null,null,target);
      }
      else {
        location.hash = $(target).attr('href');
      }   
    }

    function getBlockDiagramsLinks(){
      var tabs = $('.tabs .carousel-container');//$('.block-diagram .carousel-container ul li');
      if($(tabs).length > 0){
        $(tabs).find('ul li').each(function(){
          if(!$(this).hasClass('slick-cloned')){         
            $(this).find('a').addClass('cn-link');
          }
        });

        var url = window.location.hash.substring(1);
        if(url.length === 0 || url === '#'){
          $(tabs).find('ul li:not(".slick-cloned")').eq(0).find('a').addClass('active');
        }

      }      
    }

  };
}(jQuery));

(function() {
  'use strict';

  var $arrow = $('.arrow-up.mn'),
    $btn = $('.mn-open,.close-mn'),
    $mMnBack = $('.mn .mmn-back button'),
    $mMnClose = $('.mn .mmn-title .mmn-close'),
    $mMnText = $('.mn .mmn-title .mmn-text'),
    $mMnTitle = $('.mmn-title'),
    $mNContent = $('.mn-content'),
    $mNOut = $('.mn-out'),
    $mmn = $('.mmn-col-1'),
    $mn = $('.mn'),
    $mnCols = [$('.mn .mn-col-1'), $('.mn .mn-col-2'), $('.mn .mn-col-3'), $('.mn .mn-col-4')],
    $mnNavTarget = $('.mn button[data-mn-target]'),
    $mnav = $('.pri-nav .mn-out .mn'),
    $primaryNavigation = $('nav.pri-nav'),
    bp = {
      'mobile': 767
    };

  var curPromos = [];
  var menuSlideSpeed = 'fast';

  var fullMegaNavExp = function($s) {
      var $c = mnGetCol($s);
      var $nxtCol = mnGetNxtCol($s);

      // Reset other columns

      if ($s.attr('data-mn-depth') === '1') {
        // console.info('Depth 1');
        mnCleanUp();
        mnClearObjects(); // Clear old objects
        mnShowOjects($s); // Show promo/cta items
      }
      // console.info($s);
      mnRmSetActive($c, $s.parent('li')); // Set active class and remove other active classes in column
      mnHideTl($nxtCol); // Hide top-level elements
      mnOpenSubmenu($s); // Open submenu and follow href value if target does not exist.

    },
    mobiMegaNavExp = function($s) {
      // console.info('mobi exp');
      var $c = mnGetCol($s),
      $nxtCol = mnGetNxtCol($s);
      // $('.content-wrap').hide();
      mnHideCols(); // Make sure all of our other columns are hidden
      mnHideTl($nxtCol); // Hide top-level elements
      mnHideFirstSet(); // Need to keep .mn-col-1 open for titles and controls
      mnSetTitle($s); // Set mobile title
      mnOpenSubmenu($s); // Open submenu and follow href value if target does not exist.
    };

  //
  // Function: mnSetTitle()
  // Descr: Set title for mobile view
  //
  function mnSetTitle($s) {
    // Grab text from inner anchor
    var t = $s.text(),
      d = parseInt($s.attr('data-mn-depth'), 10),
      t = (d === 1 ? t.toUpperCase() : t);
    $mMnTitle.attr('nav-mn-title', $mMnText.text());
    $mMnText.text(t);
    $mMnTitle.attr('nav-mn-pdepth', d);
    $mMnTitle.show();
  }

  //
  // Function: mnBack()
  // Descr: Allows user to navigate back within menu
  //
  function mnBack(e) {
    var d = parseInt($mMnTitle.attr('nav-mn-pdepth'), 10);
    mnHideCols(); // Make sure all of our other columns are hidden
    mnShowCol($mMnTitle.attr('nav-mn-pdepth'));
    $mMnTitle.attr('nav-mn-pdepth', (d - 1));
    if ($mMnTitle.attr('nav-mn-title')) {
      $mMnText.text($mMnTitle.attr('nav-mn-title'));
    }
    // If they depth is one reset the menu
    if (d < 2) {
      mnReset();
    }
  }
  //
  // Function: mnShowCol(1)
  // Descr: show a col
  //
  function mnShowCol(n) {
    $mnCols[(parseInt(n, 10) - 1)].show();
  }



  $mMnBack.on('click', mnBack);

  //
  // Handle data-mn-target click
  //
  $mnNavTarget.on('click', function(e) {
    // Only targeting anchors w/ data-mn-target atttribute
    //
    e.stopPropagation(); // Prevent closing menu
    e.preventDefault(); // Don't follow href

    var $s = $(this);
    if ($s.has('data-mn-target') && $mmn.is(':visible') === false) {
      // Desktop / Tablet experience
      // console.info('Full experience');
      fullMegaNavExp($s);
    } else if ($s.has('data-mn-target') && $mmn.is(':visible') === true) {
      // Mobile experience
      // console.log('Mobile experience');
      mobiMegaNavExp($s);
    }

  });

  //
  // Handle opening / closing of mega-menu
  //
  $btn.on('click', function(e) {
    e.stopPropagation(); // Prevent closing menu
    e.preventDefault();
    if ($(window).width() < 1000) {
      mnReset();
    }
    mnShowHideMenu();
  });


  //
  // Prevent menu from closing when clicked (on expanded menu and mobile search bar)
  //
  $('.mn-out, .pri-mobile-nav-search').off().on('click', function(e) {
    e.stopPropagation(); // Prevent closing menu
  });

  //
  // Close the Mega Menu and/or HTB Menu when clicked outside
  //
  $(document).off().on('click', 'html', function () {
    // If Mega Menu is visible, close it
    if ($mNOut.is(':visible')) {
      mnShowHideMenu();

      // Primary search bar becomes visible
      if ($(window).width() < 768) {
        $('.pri-mobile-nav-search').slideDown(100);
      }
    }

    // If HTB Menu is visible, close it
    var $htbmenu = $(".htb-menu");
    if ($htbmenu.is(':visible')) {
        ShowHideHTBMenu();
    }
  });

  $(document).on('touchstart', function(event) {
    if (!$(event.target).closest($mNOut).length) {
      $mNOut.slideUp(menuSlideSpeed);
    }
  });

  // Sticky navigation
  $(window).scroll(function(e) {
    var thresh = 40,
    h = $(window).scrollTop(),
    $priNav = $('.pri-nav');

    if (h < thresh) {
      $('body').css('padding-top', '0');
      $('.pri-nav-btmb').show();
      $priNav.removeClass('pri-nav-sn');
    }
    else {
      if (!isElementInViewport($('.pri-nav-btmb')) && !$priNav.hasClass('pri-nav-sn') && $(window).width() >= 767) {
        $priNav.addClass('pri-nav-sn');
        $('body').css('padding-top', $priNav.height());
        $('.pri-nav-btmb').hide();
      }
    }
  });

  //
  // Custom Search
  //
  function customSearch() {
    var $ul = $('.pri-nav-type ul');
    var $ard = $('.pri-nav-typedir .icon-chevron-thin-down');
    var $aru = $('.pri-nav-typedir .icon-chevron-thin-up');
    var $input = $('[name="search-value"]');
    var $txt = $('.pri-nav-txtval');
    var $li = $ul.find('li');
    var $pnt = $('.pri-nav-type');
    var $searchInput = $('.pri-nav-searchinp');
    //Global Search dropdown
    var $dropdown = $('.pri-nav-type select');
    /*
    .pri-nav-typedir
      i.icon-chevron-thin-down
    */

    /*
    $(document).on('mouseleave', '.pri-nav-type', function() {
      $ul.hide();
      $('.pri-nav-typedir').removeClass('down').addClass('up');
    });

    $(document).on('click', '.pri-nav-typeval', function(e) {
      $ul.show(); // Show list
      $('.pri-nav-typedir').removeClass('up').addClass('down');
    });
    */

    /*
    $(document).on('click', '.pri-nav-type ul li button', function(e) {
      e.preventDefault();
      var $s = $(this);
      $input.val($s.val());

      var txt = $s.text() + '<div class="pri-nav-typedir"><i class="icon-chevron-thin-down"></i><i class="icon-chevron-thin-up"></i></div>';
      $txt.html(txt);

      var newPlaceholder = $s.attr('data-placeholder');
      $searchInput.attr('placeholder', newPlaceholder);


      $ul.hide(); // Hide the drop down
      $('.pri-nav-typedir').removeClass('down').addClass('up');

      // Update list
      $li.each(function() {
        var $li = $(this);
        var $btn = $li.find('button');
        if ($btn.attr('value') === $input.val()) {
          // Hide it
          $li.hide();
        } else {
          $li.show();
        }
      });

    });
    */
    $(document).on('change', '.pri-nav-type select', function(e) {
      e.preventDefault();

      var selectedoption = $('option:selected', this);

      $input.val(selectedoption.val());

      var newPlaceholder = selectedoption.attr('data-placeholder');
      $searchInput.attr('placeholder', newPlaceholder);
    });
  }

  $(document).ready(function() {
    // In mobile view, slide toggle search bar when clicking menu button
    if ($(window).width() < 768) {
      $('.mn-open').on('click', function() {
        $('.pri-mobile-nav-search').slideUp(100);
      });

      $('.close-mn').on('click', function() {
        $('.pri-mobile-nav-search').slideDown(100);
      });
    }
    $mn.find('[data-mn-default="true"]').click(); // Open products up by default for desktop

    $mn.hide(); // Hide the mega menu on load
    customSearch();
    var context = $(window).width();
    if ($('#lt-ie10').length === 0) {
      // $(window).resize(function() {
      //   var newWindowSize = $(window).width();
      //   if (newWindowSize <= 767 && context > 767) {
      //     location.reload();
      //   }
      //   if (newWindowSize > 767 && context <= 767) {
      //     location.reload();
      //   }
      // });
    }
    //remove error state
    $( '.pri-nav-searchinp' ).focus(function() {
      $(this).removeClass('error-state');
    });

    //Populate global search dropdown
    $('.pri-nav-type ul li').each(function(){
      var html_option = '';
      var option = $(this).find('button');
      var value = $(option).val();
      var text = $(option).text();
      var placeholder = $(option).attr('data-placeholder');

      html_option = '<option data-placeholder="' + placeholder + '" value="' + value + '">' + text + '</option>';
      $('.pri-nav-type select').append(html_option);   
    });

    //Clear global search dropdown to avoid duplicated items
    clearDropdown();
     
  });

  function clearDropdown(){
    var arr = new Array();
    $('.pri-nav .pri-nav-type option').each(function(i){
      var duplicated = false;
      var value;
      arr[i] = $(this).val();
      value = arr[i];
      for (i=0; i<arr.length-1; i++){
        if (value == arr[i])
          duplicated = true;
      }
      if (duplicated)
        $(this).remove();
    });
  }

  //
  // Function: mnReset()
  // Descr: Reset menu for all formats
  //
  function mnReset() {
    mnRmSetActive($mnCols[0]); // Set active class and remove other active classes in column
    mnCleanUp();
    mnClearObjects(); // Clear old objects
    mnMmnTitleReset();
    $mnCols[0].find('ul').show();
  }

  //
  // Function: mnMmnTitleReset()
  // Descr: Resets .mmn-title
  //
  function mnMmnTitleReset() {
    $mMnTitle.hide();
    $mMnText.text('');
    $mMnTitle.attr('nav-mn-pdepth', '');
  }
  
  //
  // Function: mnRmActive
  // Usage: Call to remove all active classes within specified object
  //
  function mnRmSetActive($c, $s) {
    $c.find('.mn-active').each(function() {
      $(this).removeClass('mn-active');
    });

    if (isSet($s)) {
      $s.addClass('mn-active');
    }
  }

  //
  // Function: mnGetCol($s:selector)
  // Requires: $mnCols
  // Descr: Returns column selctor
  //
  function mnGetCol($s) {
    var depth = parseInt($s.attr('data-mn-depth'), 10);
    return $mnCols[(depth - 1)];
  }

  //
  // Function: mnGetNxtDepth(int)
  // Requires: $mnCols
  // Descr: Returns column selctor
  //
  function mnGetNxtCol($s) {
    var depth = parseInt($s.attr('data-mn-depth'), 10);
    return $mnCols[depth];
  }

  //
  // Function: mnCleanUp()
  // Descr: Clean up all cols -1
  //
  function mnCleanUp() {
    // Hide everything not in column one
    var loop = function($s) {
      $s.find('>').each(function() {
        var $s = $(this);
        mnRmSetActive($s); // Remove active
        $s.hide();
      });
    };
    for (var i = 0, l = $mnCols.length; i < l; i++) {
      if (i > 0) {
        loop($mnCols[i]);
      }
    }
  }

  //
  // Function:  mnHideTl($s)
  //
  function mnHideTl($s) {
    $s.find('>').each(function(e) {
      $(this).hide();
    });
  }

  //
  // Function mnOpenSubmenu()
  //
  function mnOpenSubmenu($s) {
    var $target = $($s.attr('data-mn-target'));
    if ($target.length) {
      $target.parent().show(); // Make sure parent is viewable -- applies mainly to mobile
      $target.show();
    }
  }

  //
  // Function: isSet()
  // Descr: Return true if variable is defined else false
  function isSet(v) {
    return (typeof v !== 'undefined' ? true : false);
  }

  //
  // Function: mnShowPromos
  // Descr: Show item objects
  //
  function mnShowOjects($s) {
    if ($s.attr('data-mn-obj')) {
      var objs = $s.attr('data-mn-obj').split(','); // .selector1,#id-selector
      // 0 - Column 4
      if (isSet(objs[0])) {
        $mnCols[3].find(objs[0]).show();
      }

      // 1 - Column 3
      if (isSet(objs[1])) {
        $mnCols[2].find(objs[1]).show();
      }
    }
  }

  //
  // Function: mnClearObjects()
  // Descr: Clear old promo / cta objects
  //
  function mnClearObjects() {
    // Clear ojects in col-3 && col-4
    $mnCols[3].find('>').each(function() {
      $(this).hide();
    });
    $mnCols[2].find('>').each(function() {
      $(this).hide();
    });
  }

  //
  // Function: mnShowHideMenu()
  // Descr: Handles showing / hiding of menu
  //
  function mnShowHideMenu() {
    if ($mNOut.is(':visible')) {
      // Hide Mega Menu
      $mNOut.slideUp(menuSlideSpeed, function() {});
    } else {
      // Show Mega Menu

      // If HTB Menu is visible, hide it now.
      var $htbmenu = $(".htb-menu");
      if ($htbmenu.is(':visible')) {
          ShowHideHTBMenu();
      }

      // console.info($('.mn-open').offset());

      // For Edge -- this breaks other things
      $mNOut.css({
        //"top": $primaryNavigation.height() - $('.recently-visited-ribbon').height()
      });
      var left = $btn.find('.icon-menu').position().left - ($btn.find('.icon-menu').width() / parseFloat(2.5, 10));
      // console.info(left);
      $mNOut.find('.arrow-up').css({
        "left": left
      });

      $mNOut.slideDown(menuSlideSpeed);

      if ($(window).width() < 768) {
        $('.pri-mobile-nav-search').slideDown(100);
      }


    }
  }

  //
  // Function: mnHideCols()
  // Desr: Hide all cols except for .mn-col-1
  //
  function mnHideCols() {
    for (var i = 0, l = $mnCols.length; i < l; i++) {
      if (!$mnCols[i].hasClass('mn-col-1')) {
        $mnCols[i].hide();
      }
    }
  }

  //
  // Function: mnHideFirstSet()
  // Descr: Hides the first set of menu items
  //
  function mnHideFirstSet() {
    $mnCols[0].find('ul').hide();
  }

  $(".pri-nav-ql .htb-link").click(function (e) {
      e.preventDefault();
      e.stopPropagation(); // Prevent closing menu

      ShowHideHTBMenu();
  });

  function ShowHideHTBMenu() {
      var $htblink = $(".pri-nav-ql .htb-link");
      var $htbmenu = $(".htb-menu");
      var $htbarrow = $(".htb-menu-arrow");

      if ($htbmenu.is(':visible')) {
          // MTB menu is currently visible, so close it
          $htbmenu.hide("slide", { direction: "up" }, "fast");
          $htbarrow.hide();
      } else {
          // HTB menu is not currently visible, so open it

          // If Mega Menu is visible, close it now.
          if ($mNOut.is(':visible')) {
              mnShowHideMenu();
          }

          // Position and show the HTB menu & arrow
          var left = $htblink.position().left - ($htbmenu.width() / 2) + ($htblink.width() / 2);
          $htbmenu.css({ "left": left });
          left = $htblink.position().left + ($htblink.width() / 2) - 14;
          $htbarrow.css({ "left": left });
          $htbmenu.show("slide", { direction: "up" }, "fast", function () { $htbarrow.show(); });
      }
  }

})(jQuery);

// Function for hero carousel
var heroCarousel = function(){
  var i = 0;
  var currentSlide = 0;
  var heroSlides = [];
  var heroHeaders = [];
  var slideInterval = '';
  var heroCollapse = $('#toggle-collapse');
  var heroController = $('#toggle-controller');
  $('.heroes').children('.panel-body').each(function () {
    heroSlides.push($(this));
  });
  $('.heroes').children('.panel').each(function () {
    heroHeaders.push($(this));
  });

  // ie8 doesn't support indexOf so we are building it in.
  if (!Array.prototype.indexOf){
    Array.prototype.indexOf = function(elt /*, from*/)
    {
      var len = this.length >>> 0;

      var from = Number(arguments[1]) || 0;
      from = (from < 0)
           ? Math.ceil(from)
           : Math.floor(from);
      if (from < 0)
        from += len;

      for (; from < len; from++)
      {
        if (from in this &&
            this[from] === elt)
          return from;
      }
      return -1;
    };
  };

  // Function to toggle the carousel
  // Slide is an index of the slide to be slid
  var carouselSlide = function(slide){
    if (currentSlide === slide) {
      return
    } else {
      currentSlide = slide;

      $('.panel').removeClass('current-panel-header');
      $('.panel-body').slideUp('slow', function(){
      });

      //New Script
      $(heroHeaders[slide]).addClass('current-panel-header');
      $(heroSlides[slide]).slideToggle('slow',function() {
      });
    }
    return;
  };

  function stopAutoSlide() {
    clearInterval(slideInterval);
    slideInterval = 0;
  };

  function startAutoSlide() {
    if (slideInterval === 0){
      autoSlide(currentSlide+1, 0);
    }
  };

  $('.panel').click(function(){
    stopAutoSlide()
    heroController.removeClass('icon-controller-paus').addClass('icon-controller-play');

    //New Script
    var clickedSlide = $('.panel').index(this);
    carouselSlide(clickedSlide);


    if (heroCollapse.hasClass('open-button')){
      heroCollapse.removeClass('open-button').addClass('collapse-button');
      heroController.show();
      // $('.heroes').css('height', '514px');
    }
  });

  // Funtion to autoslide the hero carousel
  // start is the starting slide to rotate, timeBetweenSlides is the time to delay
  var autoSlide = function(start, timeBeforeStart) {
    setTimeout(function(){
      i = start;
      var slideTimer = 5000;
      function slide(){
        if (i >= heroSlides.length) {
          i = 0;
        }
        carouselSlide(i);
        ++i;
      };
      slideInterval = setInterval(slide,slideTimer);
    },timeBeforeStart);
  };

  heroController.click(function() {
    if (heroController.hasClass('icon-controller-paus')){
      stopAutoSlide();
      heroController.removeClass('icon-controller-paus').addClass('icon-controller-play');
    } else if (heroController.hasClass('icon-controller-play')) {
      startAutoSlide();
      heroController.removeClass('icon-controller-play').addClass('icon-controller-paus');
    }
  });

  heroCollapse.click(function(){
    if (heroCollapse.hasClass('collapse-button')){
      stopAutoSlide();
      carouselSlide(false);
      heroCollapse.removeClass('collapse-button').addClass('open-button');
      $('.heroes').css('height', 'inherit');
      heroController.hide();
    } else if (heroCollapse.hasClass('open-button')) {
      carouselSlide(0);
      startAutoSlide();
      heroCollapse.removeClass('open-button').addClass('collapse-button');
      heroController.removeClass('icon-controller-play').addClass('icon-controller-paus');
      heroController.show();
      // $('.heroes').css('height', '540px');
    }
  });

  // Zoom animation and start of the autoslide
  var zoomStart = function(){
    heroCollapse.delay(2500).fadeIn();
    heroController.delay(2500).fadeIn();

    // If 'zoom' class is present, add zoom effect on hero slide
    $('.hero-primary.zoom h2').delay(2500).fadeIn();
    $('.hero-primary.zoom .tagline-content').delay(3000).fadeIn('slow');
    $('.hero-primary.zoom .zoom-background').addClass('scale');
    
    autoSlide(1, 3000);
  };
  zoomStart();

  //margins for Hero body + carousel
  for (var i= 1 , mTop= -63, mBot= -87, pTop= 100; i <= heroSlides.length ; i++, mTop-= 29, mBot+= 29, pTop+= 30) {
    $(heroSlides[i]).css({'margin-top': mTop+'px', 'margin-bottom': mBot+'px', 'padding-top': pTop+'px'});
  }

  if( $('.hero-carousel').length > 0 ) {
    var hero_carousel = $('.hero-carousel');
    var max_height = $(hero_carousel)[0].clientHeight;
    if (parseInt(max_height) < 540) {
      $(hero_carousel).css('height', max_height + 'px');
    }
  }
};

// FIXME: add the preloader back in once we get the actual images we'll be using
// Needs external js
/*
$.preloadImages = function() {
  for (var i = 0; i < arguments.length; i++) {
    $('<img />').attr('src', arguments[i]);
  }
};

$.preloadImages('/images/rover.jpg','/images/river.jpg','/images/satellites.jpg');
*/
$( document ).ready(function() {
  heroCarousel();
});




////////////////// PRIVACY POPUP //////////////////

var privacyPopupOpen = 0;

// Make dialog use square corners instead of default rounded ones 
$('#privacy-popup').parent().removeClass('ui-corner-all');

// If Privacy Policy "Accept" button is pressed, set a cookie and close the dialog.
$("#privacy-popup-accept").click(function () {
    privacyPopupOpen = 0;
    Cookies.set('privacy-notice-accepted', '1', { expires: 1000 });
    $("#privacy-popup").dialog("close");
});

// If browser is resized, resize the Privacy Popup (if its open)
$(window).resize(function () {
    if (privacyPopupOpen == 1) {
        var w = document.documentElement.clientWidth;
        $("#privacy-popup").dialog("option", "width", w);
    }
});

// If the user hasn't accepted the Privacy Popup, display it
if (!Cookies.get('privacy-notice-accepted')) {
    //
    //  Display popup after 100ms delay.
    //
    //  We do this to make sure late-displaying elements (like the product tables) are displayed and the browser has adjusted 
    //  (including cases where the horiz scrollbar has to be added to fit the late-displaying element).
    //
    // setTimeout(OpenPrivacyPopup, 100);
}

function OpenPrivacyPopup()
{
    //  Create the dialog
    $("#privacy-popup").dialog({
        dialogClass: "privacy-popup-base",
        autoOpen: false,
        draggable: false,
        resizable: false,
        modal: false,
        position: { my: "center", at: "bottom", of: window }
    });

    //  Avoid problem where browser displays the URL for the first link in the status bar, which obscures the dialog.
    //  To do this, replace href in <a> with hiddenhref and add a click handler
    $("a.hidelink").each(function (index, element) {
        var href = $(this).attr("href");
        $(this).attr("hiddenhref", href);
        $(this).removeAttr("href");
    });
    $("a.hidelink").click(function () {
        url = $(this).attr("hiddenhref");
        window.location.href = url;
    })

    //  Set dialog width so it matches the browser's current width and then open it
    var w = document.documentElement.clientWidth;
    $("#privacy-popup").dialog("option", "width", w);
    $("#privacy-popup").dialog("open");
    privacyPopupOpen = 1;
}




////////////////// COVID POPUP //////////////////

var covidPopupOpen = 0;

// Make dialog use square corners instead of default rounded ones 
$('#covid-popup').parent().removeClass('ui-corner-all');

// If COVID Popup's "Dismiss" button is pressed, set a cookie and close the dialog.
$("#covid-popup-dismiss").click(function () {
    covidPopupOpen = 0;
    Cookies.set('covid-popup-dismissed', '1', { expires: 1000 });
    $("#covid-popup").dialog("close");
});

// If browser is resized, resize the COVID Popup (if its open)
$(window).resize(function () {
    if (covidPopupOpen == 1) {
        var w = document.documentElement.clientWidth;
        $("#covid-popup").dialog("option", "width", w);
    }
});

// If the user hasn't accepted the COVID Popup, display it.
// However, only do this if the user has already accepted the Privacy Popup.
if ((Cookies.get('privacy-notice-accepted')) && (!Cookies.get('covid-popup-dismissed'))) {
    //
    //  Display popup after 100ms delay.
    //
    //  We do this to make sure late-displaying elements (like the product tables) are displayed and the browser has adjusted 
    //  (including cases where the horiz scrollbar has to be added to fit the late-displaying element).
    //
    // setTimeout(OpenCovidPopup, 100);
}

function OpenCovidPopup()
{
    //  Create the dialog
    $("#covid-popup").dialog({
        dialogClass: "covid-popup-base",
        autoOpen: false,
        draggable: false,
        resizable: false,
        modal: false,
        position: { my: "center", at: "bottom", of: window }
    });

    //  Avoid problem where browser displays the URL for the first link in the status bar, which obscures the dialog.
    //  To do this, replace href in <a> with hiddenhref and add a click handler
    $("a.hidelink").each(function (index, element) {
        var href = $(this).attr("href");
        $(this).attr("hiddenhref", href);
        $(this).removeAttr("href");
    });
    $("a.hidelink").click(function () {
        url = $(this).attr("hiddenhref");
        if (url.indexOf("covid") != -1) {   // Hide COVID popup now that user has clicked on the link
            covidPopupOpen = 0;
            Cookies.set('covid-popup-dismissed', '1', { expires: 1000 });
            $("#covid-popup").dialog("close");
        }
        window.location.href = url;
    })

    //  Set dialog width so it matches the browser's current width and then open it
    var w = document.documentElement.clientWidth;
    $("#covid-popup").dialog("option", "width", w);
    $("#covid-popup").dialog("open");
    covidPopupOpen = 1;
}




////////////////// ACCELERATOR FORMS //////////////////

//
//  HowToBuyConnectFormSubmitOnClick()
//
//  Called when the user submits the HowToBuyConnectForm, this function ....
//
function HowToBuyConnectFormSubmitOnClick()
{

}

//
//  HowToBuyConnectFormOnSuccess()
//
//  Called when the HowToBuyConnectForm AJAX form has been successfully submitted and the 
//  page has been successfully updated, this function:
//
//    - Sends the appropriate event to GA (depending on whether the server-side form validation has passed)
//
function HowToBuyConnectFormOnSuccess()
{
    ServerSideLog("Info", "[JS] ++++ In HowToBuyConnectFormOnSuccess()");
    console.log("++++ In HowToBuyConnectFormOnSuccess()");

    var validationState = $("input[name='ValidationState']").val();
    console.log("  validationState = " + validationState);

    var requestType = $("input[name='RequestTypeVal']").val();
    console.log("  requestType = " + requestType);

    /*
    if (validationState != "Valid") {
        ga("send", "event", "Form", "SubmitWithServerSideValidationFailure", "Accelerator");
    } else {
        ga("send", "event", "Form", "SubmitWithSuccess", "Accelerator");
    }
    */

    var eventName = "";
    var formName = "";
    if (requestType == "Request a quote") {
        eventName = "q_form_request_quote";
        formName = "Request a Quote";
    } else if (requestType == "Request a sample") {
        eventName = "q_form_request_sample";
        formName = "Request a Sample";
    } else if (requestType == "Contact a sales representative") {
        eventName = "q_form_contact_sales_rep";
        formName = "Contact a Sales Representative";
    }
    if (validationState != "Valid") {
        eventName = "q_form_attempt";
    }

    if ((eventName != "") && (formName != "")) {
        gtag("event", eventName, {
            "form_name": formName
        });
    }
}

//
//  HowToBuyConnectFormOnFailure()
//
//  Called when the HowToBuyConnectForm AJAX form submit / page update fails, this function....
//
function HowToBuyConnectFormOnFailure()
{
    ServerSideLog("Info", "[JS] ++++ In HowToBuyConnectFormOnFailure()");
    console.log("++++ In HowToBuyConnectFormOnFailure()");
}

//
//  PowerAcceleratorFormOnSuccess()
//
//  Called when the PowerAcceleratorForm AJAX form has been successfully submitted and the 
//  page has been successfully updated, this function:
//
//    - Sends the appropriate event to GA (depending on whether the server-side form validation has passed)
//
function PowerAcceleratorFormOnSuccess()
{
    ServerSideLog("Info", "[JS] ++++ In PowerAcceleratorFormOnSuccess()");
    console.log("++++ In PowerAcceleratorFormOnSuccess()");

    var validationState = $("input[name='ValidationState']").val();
    console.log("  validationState = " + validationState);

    var requestType = $("input[name='RequestTypeVal']").val();
    console.log("  requestType = " + requestType);

    var eventName = "";
    var formName = "";
    if (requestType == "Request a quote") {
        eventName = "q_form_request_quote";
        formName = "Request a Quote (Power)";
    } else if (requestType == "Request a sample") {
        eventName = "q_form_request_sample";
        formName = "Request a Sample (Power)";
    } else if (requestType == "Contact a sales representative") {
        eventName = "q_form_contact_sales_rep";
        formName = "Contact a Sales Representative (Power)";
    }
    if (validationState != "Valid") {
        eventName = "q_form_attempt";
    }

    if ((eventName != "") && (formName != "")) {
        gtag("event", eventName, {
            "form_name": formName
        });
    }
}

function PowerAcceleratorFormOnFailure()
{
    ServerSideLog("Info", "[JS] ++++ In PowerAcceleratorFormOnFailure()");
    console.log("++++ In PowerAcceleratorFormOnFailure()");
}




////////////////// PROGRESSIVE FORMS //////////////////

//
//  ProgressiveFormSubmitOnClick()
//
//  Called when the user submits the ProgressiveForm, this function ....
//
function ProgressiveFormSubmitOnClick()
{

}

//
//  ProgressiveFormOnSuccess()
//
//  Called when the ProgressiveForm AJAX form submit has been successfully submitted and the 
//  page has been successfully updated, this function:
//
//    - Checks if the server-side form validation has passed.  (If not, the function returns immediately.)
//	  - Triggers the appropriate GA event
//	  - Emits the LinkedIn conversion pixel
//	  - Prevents the submit button from being clicked more than once
//	  - Sets an item-specific cookie so this item isn't gated in the future (for this browser)
//	  - Hides the form and displays the requested item
//	  - Triggers the form callback (for on-page JS logic)
//
function ProgressiveFormOnSuccess()
{
    ServerSideLog("Info", "[JS] ++++ In ProgressiveFormOnSuccess()");
    console.log("++++ In ProgressiveFormOnSuccess()");
    console.log("  currentMarketoFormId is " + currentMarketoFormId);
    console.log("  currentFormCount is " + currentFormCount);
    console.log("  itemType is " + itemType);
    console.log("  oneTimeLink is " + oneTimeLink);

    var setCookie = "true";

    var cookieNamePrefix = "";
    var contentDivSelector = "";
    if (itemType == "VideoDetail") {
        cookieNamePrefix = "vi";
        contentDivSelector = ".video-content";
        if (oneTimeLink == "True") {
            setCookie = "false";
        }
    } else if (itemType == "EBookDetail") {
        cookieNamePrefix = "eb";
        contentDivSelector = "";
    } else if (itemType == "WhitePaperDetail") {
        cookieNamePrefix = "wp";
        contentDivSelector = ".article-content";
    } else {
        cookieNamePrefix = "ta";
        contentDivSelector = ".article-content";
    }

    //
    //  Check if the server-side validation has passed.
    //
    var validationState = $("input[name='ValidationState']").val();
    console.log("  validationState = |" + validationState + "|");

    //
    //  Get "ValidationStateExtraInfo" hidden field from the form.  The server-side uses this to store
    //  the outcome of the restricted country & competitor/webmail e-mail checks.
    //
    var validationStateExtraInfo = "";
    if ($("input[name='ValidationStateExtraInfo']").length) {
        validationStateExtraInfo = $("input[name='ValidationStateExtraInfo']").val();
    }
    console.log("  validationStateExtraInfo = |" + validationStateExtraInfo + "|");

    //
    //  If the on-page JavaScript has defined the "progressiveFormExtraInfo" variable, set it now
    //  with the outcome of the above server-side checks.  The VideoDetails page on-page JS
    //  checks this variable's value in some cases when deciding whether or not to show a video.
    //
    if (typeof progressiveFormExtraInfo === 'undefined') {
        // console.log("  progressiveFormExtraInfo is undefined");
    } else {
        console.log("  setting progressiveFormExtraInfo....");
        progressiveFormExtraInfo = validationStateExtraInfo;
    }

    //
    //  Trigger the appropriate GA event.
    //
    if (validationState != "Valid") {
        // ga("send", "event", "Form", "SubmitWithServerSideValidationFailure", "Progressive" + currentFormCount);
        gtag("event", "q_form_attempt", {
            "form_name": "Progressive" + currentFormCount
        });
        return;
    } else {
        // ga("send", "event", "Form", "SubmitWithSuccess", "Progressive" + currentFormCount);
        gtag("event", "q_form_progressive", {
            "form_name": "Progressive" + currentFormCount
        });
    }

    //
    //  Emit the LinkedIn conversion pixel.
    //
    console.log("  Emitting LI pixel...");
    $('#liHolder').prepend('<img height="1" width="1" style="display:none;" alt="" src="https://dc.ads.linkedin.com/collect/?pid=1041756&conversionId=871732&fmt=gif" />');

    //
    //  Prevent the submit button from being clicked more than once
    //
    $("#ProgressiveFormSubmit").prop("disabled", true);
    $("#ProgressiveFormSubmit").css("background-color", "#000000");

    //
    //  Set cookie so this article isn't gated for this user in the future.
    //
    if (setCookie == "true") {
        var pathName = window.location.pathname;        // ex: "/design-hub/technical-articles/article-name"
        console.log("  pathName = |" + pathName + "|");
        var n = pathName.lastIndexOf("/");
        var len = pathName.length;
        if (n == (len - 1)) {       // If pathName ends in "/", remove it
            pathName = pathName.substring(0, (len - 1));
            console.log("  pathName adjusted = |" + pathName + "|");
            n = pathName.lastIndexOf("/");
        }
        var itemName = pathName.substring(n + 1);    // ex: "article-name"
        console.log("  itemName = |" + itemName + "|");
        var cookieName = cookieNamePrefix + "_" + itemName;
        console.log("  Setting cookie '" + cookieName + "'...");
        Cookies.set(cookieName, '1', { expires: 1000 });
    } else {
        console.log("  Not setting cookie");
    }

    //
    //  Hide the form
    //
    if (itemType != "EBookDetail") {
        var progFormBoxDiv = $(".progressive-form-box");
        progFormBoxDiv.hide();
    }

    //
    //  Show the requested article
    //
    if (itemType != "EBookDetail") {
        var contentDiv = $(contentDivSelector);
        contentDiv.css("min-height", "none").css("max-height", "none").css("overflow", "visible");
        contentDiv.removeClass("gated");
    }

    //
    //  Trigger the callback (if any exists)
    //
    TriggerProgressiveFormCallback();
}

//
//  TriggerProgressiveFormCallback()
//
function TriggerProgressiveFormCallback()
{
    if (typeof ProgressiveFormSuccessCallback !== 'undefined' && jQuery.isFunction(ProgressiveFormSuccessCallback)) {
        console.log("Calling progressive form callback...");
        ProgressiveFormSuccessCallback();
    }
}

//
//  ProgressiveFormOnFailure()
//
//  Called when the ProgressiveForm AJAX form submit / page update fails, this function....
//
function ProgressiveFormOnFailure()
{
    ServerSideLog("Info", "[JS] ++++ In ProgressiveFormOnFailure()");
    console.log("++++ In ProgressiveFormOnFailure()");
}

//
//  PowerProgressiveFormOnSuccess()
//
//  Called when the PowerProgressiveForm AJAX form submit has been successfully submitted and the 
//  page has been successfully updated, this function:
//
//    - Checks if the server-side form validation has passed.  (If not, the function returns immediately.)
//	  - Triggers the appropriate GA event
//	  - Emits the LinkedIn conversion pixel
//	  - Prevents the submit button from being clicked more than once
//	  - Sets an item-specific cookie so this item isn't gated in the future (for this browser)
//	  - Hides the form and displays the requested item
//	  - Triggers the form callback (for on-page JS logic)
//
function PowerProgressiveFormOnSuccess() {
    ServerSideLog("Info", "[JS] ++++ In PowerProgressiveFormOnSuccess()");
    console.log("++++ In PowerProgressiveFormOnSuccess()");
    console.log("  currentMarketoFormId is " + currentMarketoFormId);
    console.log("  currentFormCount is " + currentFormCount);
    console.log("  itemType is " + itemType);
    console.log("  oneTimeLink is " + oneTimeLink);

    var setCookie = "true";

    var cookieNamePrefix = "";
    var contentDivSelector = "";
    if (itemType == "VideoDetail") {
        cookieNamePrefix = "vi";
        contentDivSelector = ".video-content";
        if (oneTimeLink == "True") {
            setCookie = "false";
        }
    } else if (itemType == "EBookDetail") {
        cookieNamePrefix = "eb";
        contentDivSelector = "";
    } else if (itemType == "WhitePaperDetail") {
        cookieNamePrefix = "wp";
        contentDivSelector = ".article-content";
    } else {
        cookieNamePrefix = "ta";
        contentDivSelector = ".article-content";
    }

    //
    //  Check if the server-side validation has passed.
    //
    var validationState = $("input[name='ValidationState']").val();
    console.log("  validationState = |" + validationState + "|");

    //
    //  Get "ValidationStateExtraInfo" hidden field from the form.  The server-side uses this to store
    //  the outcome of the restricted country & competitor/webmail e-mail checks.
    //
    var validationStateExtraInfo = "";
    if ($("input[name='ValidationStateExtraInfo']").length) {
        validationStateExtraInfo = $("input[name='ValidationStateExtraInfo']").val();
    }
    console.log("  validationStateExtraInfo = |" + validationStateExtraInfo + "|");

    //
    //  If the on-page JavaScript has defined the "progressiveFormExtraInfo" variable, set it now
    //  with the outcome of the above server-side checks.  The VideoDetails page on-page JS
    //  checks this variable's value in some cases when deciding whether or not to show a video.
    //
    if (typeof progressiveFormExtraInfo === 'undefined') {
        // console.log("  progressiveFormExtraInfo is undefined");
    } else {
        console.log("  setting progressiveFormExtraInfo....");
        progressiveFormExtraInfo = validationStateExtraInfo;
    }

    //
    //  Trigger the appropriate GA event.
    //
    if (validationState != "Valid") {
        // ga("send", "event", "Form", "SubmitWithServerSideValidationFailure", "PowerProgressive" + currentFormCount);
        gtag("event", "q_form_attempt", {
            "form_name": "PowerProgressive" + currentFormCount
        });
        return;
    } else {
        // ga("send", "event", "Form", "SubmitWithSuccess", "PowerProgressive" + currentFormCount);
        gtag("event", "q_form_progressive", {
            "form_name": "PowerProgressive" + currentFormCount
        });
    }

    //
    //  Emit the LinkedIn conversion pixel.
    //
    console.log("  Emitting LI pixel...");
    $('#liHolder').prepend('<img height="1" width="1" style="display:none;" alt="" src="https://dc.ads.linkedin.com/collect/?pid=1041756&conversionId=871732&fmt=gif" />');

    //
    //  Prevent the submit button from being clicked more than once
    //
    $("#PowerProgressiveFormSubmit").prop("disabled", true);
    $("#PowerProgressiveFormSubmit").css("background-color", "#000000");

    //
    //  Set cookie so this article isn't gated for this user in the future.
    //
    if (setCookie == "true") {
        var pathName = window.location.pathname;        // ex: "/design-hub/technical-articles/article-name"
        console.log("  pathName = |" + pathName + "|");
        var n = pathName.lastIndexOf("/");
        var len = pathName.length;
        if (n == (len - 1)) {       // If pathName ends in "/", remove it
            pathName = pathName.substring(0, (len - 1));
            console.log("  pathName adjusted = |" + pathName + "|");
            n = pathName.lastIndexOf("/");
        }
        var itemName = pathName.substring(n + 1);    // ex: "article-name"
        console.log("  itemName = |" + itemName + "|");
        var cookieName = cookieNamePrefix + "_" + itemName;
        console.log("  Setting cookie '" + cookieName + "'...");
        Cookies.set(cookieName, '1', { expires: 1000 });
    } else {
        console.log("  Not setting cookie");
    }

    //
    //  Hide the form
    //
    if (itemType != "EBookDetail") {
        var progFormBoxDiv = $(".progressive-form-box");
        progFormBoxDiv.hide();
    }

    //
    //  Show the requested article
    //
    if (itemType != "EBookDetail") {
        var contentDiv = $(contentDivSelector);
        contentDiv.css("min-height", "none").css("max-height", "none").css("overflow", "visible");
        contentDiv.removeClass("gated");
    }

    //
    //  Trigger the callback (if any exists)
    //
    TriggerPowerProgressiveFormCallback();
}

//
//  TriggerPowerProgressiveFormCallback()
//
function TriggerPowerProgressiveFormCallback() {
    if (typeof PowerProgressiveFormSuccessCallback !== 'undefined' && jQuery.isFunction(PowerProgressiveFormSuccessCallback)) {
        console.log("Calling progressive form callback...");
        PowerProgressiveFormSuccessCallback();
    }
}

//
//  PowerProgressiveFormOnFailure()
//
//  Called when the PowerProgressiveForm AJAX form submit / page update fails, this function....
//
function PowerProgressiveFormOnFailure() {
    ServerSideLog("Info", "[JS] ++++ In PowerProgressiveFormOnFailure()");
    console.log("++++ In PowerProgressiveFormOnFailure()");
}




////////////////// IOT FORM //////////////////

//
//  IoTFormSubmitOnClick()
//
//  Called when the user submits the IoT form, this function ....
//
function IoTFormSubmitOnClick() {

}

//
//  IoTFormOnSuccess()
//
//  Called when the IoTForm AJAX form submit has been successfully submitted and the 
//  page has been successfully updated, this function:
//
//    - Checks if the server-side form validation has passed.  (If not, the function returns immediately.)
//	  - Triggers the appropriate GA event
//	  - Prevents the submit button from being clicked more than once
//	  - Sets an item-specific cookie so this item isn't gated in the future (for this browser)
//	  - Hides the form and displays the requested item
//	  - Triggers the form callback (for on-page JS logic)
//
function IoTFormOnSuccess() {
    ServerSideLog("Info", "[JS] ++++ In IoTFormOnSuccess()");
    console.log("++++ In IoTFormOnSuccess()");
    console.log("  currentMarketoFormId is " + currentMarketoFormId);
    // console.log("  itemType is " + itemType);
    console.log("  oneTimeLink is " + oneTimeLink);

    var setCookie = "true";

    var cookieNamePrefix = "ta";
    var contentDivSelector = ".article-content";

    //
    //  Check if the server-side validation has passed.
    //
    var validationState = $("input[name='ValidationState']").val();
    console.log("  validationState = |" + validationState + "|");

    //
    //  Trigger the appropriate GA event.
    //
    if (validationState != "Valid") {
        // ga("send", "event", "Form", "SubmitWithServerSideValidationFailure", "IoT Smart Home");
        gtag("event", "q_form_attempt", {
            "form_name": "IoT Smart Home"
        });
        return;
    } else {
        // ga("send", "event", "Form", "SubmitWithSuccess", "IoT Smart Home");
        gtag("event", "q_form_other", {
            "form_name": "IoT Smart Home"
        });
    }

    //
    //  Prevent the submit button from being clicked more than once
    //
    $("#IoTFormSubmit").prop("disabled", true);
    $("#IoTFormSubmit").css("background-color", "#000000");

    //
    //  Set cookie so this article isn't gated for this user in the future.
    //
    if (setCookie == "true") {
        var pathName = window.location.pathname;        // ex: "/design-hub/technical-articles/article-name"
        console.log("  pathName = |" + pathName + "|");
        var n = pathName.lastIndexOf("/");
        var len = pathName.length;
        if (n == (len - 1)) {       // If pathName ends in "/", remove it
            pathName = pathName.substring(0, (len - 1));
            console.log("  pathName adjusted = |" + pathName + "|");
            n = pathName.lastIndexOf("/");
        }
        var itemName = pathName.substring(n + 1);    // ex: "article-name"
        console.log("  itemName = |" + itemName + "|");
        var cookieName = cookieNamePrefix + "_" + itemName;
        console.log("  Setting cookie '" + cookieName + "'...");
        Cookies.set(cookieName, '1', { expires: 1000 });
    } else {
        console.log("  Not setting cookie");
    }

    //
    //  Hide the form
    //
    console.log("HIDING FORM");
    var progFormBoxDiv = $(".progressive-form-box");
    progFormBoxDiv.hide();

    //
    //  Show the requested item
    //
    var contentDiv = $(contentDivSelector);
    contentDiv.css("min-height", "none").css("max-height", "none").css("overflow", "visible");
    contentDiv.removeClass("gated");

    //
    //  Trigger the callback (if any exists)
    //
    TriggerIoTFormCallback();
}

//
//  TriggerIoTFormCallback()
//
function TriggerIoTFormCallback() {
    if (typeof IoTFormSuccessCallback !== 'undefined' && jQuery.isFunction(IoTFormSuccessCallback)) {
        console.log("Calling IoT form callback...");
        IoTFormSuccessCallback();
    }
}

//
//  IoTFormOnFailure()
//
//  Called when the IotForm AJAX form submit / page update fails, this function....
//
function IoTFormOnFailure() {
    ServerSideLog("Info", "[JS] ++++ In IoTFormOnFailure()");
    console.log("++++ In IoTFormOnFailure()");
}




////////////////// STANDARD CONTACT FORM //////////////////

//
//  StandardContactFormSubmitOnClick()
//
//  Called when the user submits the Standard Contact Form, this function ....
//
function StandardContactFormSubmitOnClick() {

}

//
//  StandardContactFormOnSuccess()
//
//  Called when the StandardContactForm AJAX form submit has been successfully submitted and the 
//  page has been successfully updated, this function:
//
//    - Checks if the server-side form validation has passed.  (If not, the function returns immediately.)
//	  - Triggers the appropriate GA event
//	  - Emits the LinkedIn conversion pixel
//	  - Prevents the submit button from being clicked more than once
//	  - Sets an item-specific cookie so this item isn't gated in the future (for this browser)
//	  - Hides the form and displays the requested item
//	  - Triggers the form callback (for on-page JS logic)
//
function StandardContactFormOnSuccess() {
    ServerSideLog("Info", "[JS] ++++ In StandardContactFormOnSuccess()");
    console.log("++++ In StandardContactFormOnSuccess()");
    console.log("  currentMarketoFormId is " + currentMarketoFormId);
    console.log("  itemType is " + itemType);
    console.log("  oneTimeLink is " + oneTimeLink);

    var setCookie = "true";

    var cookieNamePrefix = "";
    var contentDivSelector = "";
    cookieNamePrefix = "wp";
    contentDivSelector = ".article-content";

    //
    //  Check if the server-side validation has passed.
    //
    var validationState = $("input[name='ValidationState']").val();
    console.log("  validationState = |" + validationState + "|");

    //
    //  Get "ValidationStateExtraInfo" hidden field from the form.  The server-side uses this to store
    //  the outcome of the restricted country & competitor/webmail e-mail checks.
    //
    var validationStateExtraInfo = "";
    if ($("input[name='ValidationStateExtraInfo']").length) {
        validationStateExtraInfo = $("input[name='ValidationStateExtraInfo']").val();
    }
    console.log("  validationStateExtraInfo = |" + validationStateExtraInfo + "|");

    //
    //  Trigger the appropriate GA event.
    //
    if (validationState != "Valid") {
        // ga("send", "event", "Form", "SubmitWithServerSideValidationFailure", "Standard Contact");
        gtag("event", "q_form_attempt", {
            "form_name": "Standard Contact"
        });
        return;
    } else {
        // ga("send", "event", "Form", "SubmitWithSuccess", "Standard Contact");
        gtag("event", "q_form_other", {
            "form_name": "Standard Contact"
        });
    }

    //
    //  Emit the LinkedIn conversion pixel.
    //
    console.log("  Emitting LI pixel...");
    $('#liHolder').prepend('<img height="1" width="1" style="display:none;" alt="" src="https://dc.ads.linkedin.com/collect/?pid=1041756&conversionId=871732&fmt=gif" />');

    //
    //  Prevent the submit button from being clicked more than once
    //
    $("#StandardContactFormSubmit").prop("disabled", true);
    $("#StandardContactFormSubmit").css("background-color", "#000000");

    //
    //  Set cookie so this article isn't gated for this user in the future.
    //
    if (setCookie == "true") {
        var pathName = window.location.pathname;        // ex: "/design-hub/white-papers/article-name"
        console.log("  pathName = |" + pathName + "|");
        var n = pathName.lastIndexOf("/");
        var len = pathName.length;
        if (n == (len - 1)) {       // If pathName ends in "/", remove it
            pathName = pathName.substring(0, (len - 1));
            console.log("  pathName adjusted = |" + pathName + "|");
            n = pathName.lastIndexOf("/");
        }
        var itemName = pathName.substring(n + 1);    // ex: "article-name"
        console.log("  itemName = |" + itemName + "|");
        var cookieName = cookieNamePrefix + "_" + itemName;
        console.log("  Setting cookie '" + cookieName + "'...");
        Cookies.set(cookieName, '1', { expires: 1000 });
    } else {
        console.log("  Not setting cookie");
    }

    //
    //  Hide the form
    //
    if (itemType != "EBookDetail") {
        var progFormBoxDiv = $(".progressive-form-box");
        progFormBoxDiv.hide();
    }

    //
    //  Show the requested article
    //
    var contentDiv = $(contentDivSelector);
    contentDiv.css("min-height", "none").css("max-height", "none").css("overflow", "visible");
    contentDiv.removeClass("gated");

    //
    //  Trigger the callback (if any exists)
    //
    TriggerStandardContactFormCallback();
}

//
//  TriggerStandardContactFormCallback()
//
function TriggerStandardContactFormCallback() {
    if (typeof StandardContactFormSuccessCallback !== 'undefined' && jQuery.isFunction(StandardContactFormSuccessCallback)) {
        console.log("Calling standard contact form callback...");
        StandardContactFormSuccessCallback();
    }
}

//
//  StandardContactFormOnFailure()
//
//  Called when the StandardContactForm AJAX form submit / page update fails, this function....
//
function StandardContactFormOnFailure() {
    ServerSideLog("Info", "[JS] ++++ In StandardContactFormOnFailure()");
    console.log("++++ In StandardContactFormOnFailure()");
}




////////////////// CCPA FORM //////////////////

//
//  CCPAFormOnSuccess()
//
//  Called when the CCPA Form submit has been successfully submitted and the 
//  page has been successfully updated, this function scrolls the browser window to the top.
//
function CCPAFormOnSuccess()
{
    $(window).scrollTop(0);
}




////////////////// GAN FORM //////////////////

//
//  GaNFormOnSuccess()
//
//  Called when the GaN Form submit has been successfully submitted and the 
//  page has been successfully updated, this function submits the appropriate GA event.
//
function GaNFormOnSuccess() {
    console.log("++++ In GaNFormOnSuccess()");

    var validationState = $("input[name='ValidationState']").val();
    console.log("  validationState = " + validationState);

    var formKey = $("input[name='FormKey']").val();
    console.log("  formKey = " + formKey);

    if (validationState != "Valid") {
        // ga("send", "event", "Form", "SubmitWithServerSideValidationFailure", formKey);
        gtag("event", "q_form_attempt", {
            "form_name": "GaN"
        });
    } else {
        // ga("send", "event", "Form", "SubmitWithSuccess", formKey);
        gtag("event", "q_form_other", {
            "form_name": "GaN"
        });
    }

    //  The following is old logic from OnSuccess() in FileUploadUsingAjax.js....not sure if it's still needed
    if ($("#stateDropDown option").length > 2) {
        $("#statePlaceholder").removeClass("select-bg-disabled");
    }
}



////////////////// WEBINAR FORMS //////////////////

//
//  WebinarFormSubmitOnClick()
//
//  Called when the user submits the WebinarForm, this function ....
//
function WebinarFormSubmitOnClick()
{

}

//
//  WebinarFormOnSuccess()
//
//  Called when the WebinarForm AJAX form has been successfully submitted and the 
//  page has been successfully updated, this function:
//
//    - Sends the appropriate event to GA (depending on whether the server-side form validation has passed)
//
function WebinarFormOnSuccess()
{
    ServerSideLog("Info", "[JS] ++++ In WebinarFormOnSuccess()");
    console.log("++++ In WebinarFormOnSuccess()");

    var validationState = $("input[name='ValidationState']").val();
    console.log("  validationState = " + validationState);

    if (validationState != "Valid") {
        // ga("send", "event", "Form", "SubmitWithServerSideValidationFailure", "Webinar");
        gtag("event", "q_form_attempt", {
            "form_name": "Design Summit"
        });
    } else {
        // ga("send", "event", "Form", "SubmitWithSuccess", "Webinar");
        gtag("event", "q_form_design_summit", {
            "form_name": "Design Summit"
        });
    }
}

//
//  WebinarFormOnFailure()
//
//  Called when the WebinarForm AJAX form submit / page update fails, this function....
//
function WebinarFormOnFailure()
{
    ServerSideLog("Info", "[JS] ++++ In WebinarFormOnFailure()");
    console.log("++++ In WebinarFormOnFailure()");
}

//
//  WebinarForm2OnSuccess()
//
//  Called when the WebinarForm2 AJAX form has been successfully submitted and the 
//  page has been successfully updated, this function:
//
//    - Sends the appropriate event to GA (depending on whether the server-side form validation has passed)
//
function WebinarForm2OnSuccess() {
    ServerSideLog("Info", "[JS] ++++ In WebinarForm2OnSuccess()");
    console.log("++++ In WebinarForm2OnSuccess()");

    var validationState = $("input[name='ValidationState']").val();
    console.log("  validationState = " + validationState);

    if (validationState != "Valid") {
        // ga("send", "event", "Form", "SubmitWithServerSideValidationFailure", "WebinarV2");
        gtag("event", "q_form_attempt", {
            "form_name": "Design Summit"
        });
    } else {
        // ga("send", "event", "Form", "SubmitWithSuccess", "WebinarV2");
        gtag("event", "q_form_design_summit", {
            "form_name": "Design Summit"
        });
    }
}

//
//  WebinarForm2OnFailure()
//
//  Called when the WebinarForm2 AJAX form submit / page update fails, this function....
//
function WebinarForm2OnFailure() {
    ServerSideLog("Info", "[JS] ++++ In WebinarForm2OnFailure()");
    console.log("++++ In WebinarForm2OnFailure()");
}




////////////////// UWB PARTNER FORM //////////////////

//
//  UWBPartnerFormOnSuccess()
//
//  Called when the UWB Partner Form has been successfully submitted and the page has been successfully updated, 
//  this function scrolls the browser window to the top.
//
function UWBPartnerFormOnSuccess()
{
    $(window).scrollTop(0);
}




////////////////// DOCUMENT REQUEST FORM //////////////////

//
//  DocumentRequestFormDisplayed()
//
function DocumentRequestFormDisplayed(docUuid)
{
    ServerSideLog("Info", "[JS] ++++ In DocumentRequestFormDisplayed(" + docUuid + ")");
    console.log("++++ In DocumentRequestFormDisplayed(" + docUuid + ")");
    // ga("send", "event", "DocRequest", "RequestFormDisplayed", docUuid);
    gtag("event", "q_dr_form_viewed", {
        "form_name": "Document Request",
        "uuid": docUuid
    });
}

//
//  DocumentRequestFormOnSuccess()
//
//  Called when the DocumentRequestForm AJAX form has been successfully submitted and the 
//  page has been successfully updated, this function:
//
//    - Sends the appropriate event to GA (depending on whether the erver-side form validation has passed)
//
function DocumentRequestFormOnSuccess() {
    ServerSideLog("Info", "[JS] ++++ In DocumentRequestFormOnSuccess()");
    console.log("++++ In DocumentRequestFormOnSuccess()");

    var validationState = $("input[name='ValidationState']").val();
    console.log("  validationState = " + validationState);

    var docUuid = $("input[name='Form.DocUUID']").val();
    console.log("  docUuid = " + docUuid);

    if (validationState != "Valid") {
        // ga("send", "event", "DocRequest", "RequestFormSubmitWithValidationFailure", docUuid);
        gtag("event", "q_form_attempt", {
            "form_name": "Document Request",
            "uuid": docUuid
        });
    } else {
        // ga("send", "event", "DocRequest", "RequestFormSubmitWithSuccess", docUuid);
        gtag("event", "q_dr_form_completed", {
            "form_name": "Document Request",
            "uuid": docUuid
        });
    }
}

//
//  DocumentRequestForm2Displayed()
//
function DocumentRequestForm2Displayed(fullRequestNum) {
    ServerSideLog("Info", "[JS] ++++ In DocumentRequestForm2Displayed(" + fullRequestNum + ")");
    console.log("++++ In DocumentRequestForm2Displayed(" + fullRequestNum + ")");
    // ga("send", "event", "DocRequest", "AddlInfoFormDisplayed", fullRequestNum);
    gtag("event", "q_dr_addl_info_form_viewed", {
        "form_name": "Document Request - Additional Info",
        "request_num": fullRequestNum
    });
}

//
//  DocumentRequestForm2OnSuccess()
//
//  Called when the DocumentRequestForm2 AJAX form has been successfully submitted and the 
//  page has been successfully updated, this function:
//
//    - Sends the appropriate event to GA (depending on whether the erver-side form validation has passed)
//
function DocumentRequestForm2OnSuccess() {
    ServerSideLog("Info", "[JS] ++++ In DocumentRequestForm2OnSuccess()");
    console.log("++++ In DocumentRequestForm2OnSuccess()");

    var validationState = $("input[name='ValidationState']").val();
    console.log("  validationState = " + validationState);

    var fullRequestNum = $("input[name='Form.FullRequestNum']").val();
    console.log("  fullRequestNum = " + fullRequestNum);

    if (validationState != "Valid") {
        // ga("send", "event", "DocRequest", "AddlInfoFormSubmitWithValidationFailure", fullRequestNum);
        gtag("event", "q_form_attempt", {
            "form_name": "Document Request - Additional Info",
            "request_num": fullRequestNum
        });
    } else {
        // ga("send", "event", "DocRequest", "AddlInfoFormSubmitWithSuccess", fullRequestNum);
        gtag("event", "q_dr_addl_info_form_completed", {
            "form_name": "Document Request - Additional Info",
            "request_num": fullRequestNum
        });
    }
}




////////////////// SOFTWARE DOWNLOAD FORM //////////////////

//
//  SoftwareDownloadFormDisplayed()
//
function SoftwareDownloadFormDisplayed(docUuid) {
    ServerSideLog("Info", "[JS] ++++ In SoftwareDownloadFormDisplayed(" + docUuid + ")");
    console.log("++++ In SoftwareDownloadFormDisplayed(" + docUuid + ")");
    // ga("send", "event", "SoftwareDownload", "FormDisplayed", docUuid);
    gtag("event", "q_sw_form_viewed", {
        "form_name": "Software Download",
        "uuid": docUuid
    });
}

//
//  SoftwareDownloadFormOnSuccess()
//
//  Called when the SoftwareDownloadForm AJAX form has been successfully submitted and the 
//  page has been successfully updated, this function:
//
//    - Sends the appropriate event to GA (depending on whether the erver-side form validation has passed)
//
function SoftwareDownloadFormOnSuccess() {
    ServerSideLog("Info", "[JS] ++++ In SoftwareDownloadFormOnSuccess()");
    console.log("++++ In SoftwareDownloadFormOnSuccess()");

    var validationState = $("input[name='ValidationState']").val();
    console.log("  validationState = " + validationState);

    var docUuid = $("input[name='Form.DocUUID']").val();
    console.log("  docUuid = " + docUuid);

    if (validationState != "Valid") {
        // ga("send", "event", "SoftwareDownload", "FormSubmitWithValidationFailure", docUuid);
        gtag("event", "q_form_attempt", {
            "form_name": "Software Download",
            "uuid": docUuid
        });
    } else {
        // ga("send", "event", "SoftwareDownload", "FormSubmitWithSuccess", docUuid);
        gtag("event", "q_sw_form_completed", {
            "form_name": "Software Download",
            "uuid": docUuid
        });
    }
}

function CancelSoftwareDownloadSubscriptionFormOnSuccess() {
    ServerSideLog("Info", "[JS] ++++ In CancelSoftwareDownloadSubscriptionFormOnSuccess()");
    console.log("++++ In CancelSoftwareDownloadSubscriptionFormOnSuccess()");

}




////////////////// CONTACT US / SUPPORT FORM //////////////////

function ContactRequestFormOnSuccess() {
    ServerSideLog("Info", "[JS] ++++ In ContactRequestFormOnSuccess()");
    console.log("++++ In ContactRequestFormOnSuccess()");

    var validationState = $("input[name='ValidationState']").val();
    console.log("  validationState = " + validationState);

    var pageType = $("input[name='PageType']").val();
    console.log("  pageType = " + pageType);

    var requestType = "";

    var eventName = "";
    if (pageType == "Contact Us") {
        eventName = "q_form_contact_us";
    } else if (pageType == "Support") {
        eventName = "q_form_support";
    }

    if (pageType != "") {
        if (validationState != "Valid") {
            requestType = $('#Form_RequestType').find(":selected").val();
            if (requestType == "") {
                requestType = "---";
            }
            console.log("  requestType = |" + requestType + "|");

            // ga("send", "event", pageType, "FormSubmitWithValidationFailure");
            gtag("event", "q_form_attempt", {
                "form_name": pageType,
                "request_type": requestType
            });
        } else {
            requestType = $("input[name='RequestTypeVal']").val();
            console.log("  requestType = " + requestType);

            // ga("send", "event", pageType, "FormSubmitWithSuccess");
            gtag("event", eventName, {
                "form_name": pageType,
                "request_type": requestType
            });
        }
    }
}




function DecodeHtml(html) {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
}

function ServerSideLog(level, text) {
    $.post('/Areas/QorvoPublic/Handlers/logger.ashx',
        {
            level: level,
            text: text
        }
    );
}

var delayedProductTableScrollToId = "";

$(document).ready(function () {
    // console.log("GGG READY");
    if (delayedProductTableScrollToId != "") {
        // console.log("GGG NEED TO SCROLL TO |" + delayedProductTableScrollToId + "|");

        //
        //  Determine if we're currently displaying full or mini headers for each product table.
        //
        var tableHeaderMode = "full";
        var selector = delayedProductTableScrollToId + " .pst-header-buttons";
        if ($(selector).css('display') == "none") {
            tableHeaderMode = "mini";
        }
        // console.log("GGG tableHeaderMode = " + tableHeaderMode);

        //
        //  Determine the y value to scroll to.
        //
        var pstTop = $(delayedProductTableScrollToId).offset().top.toFixed();
        // console.log("GGG pstTop = " + pstTop);
        var scrollTo = -1;
        if (tableHeaderMode == "full") {
            scrollTo = pstTop - 85;
        } else {
            scrollTo = pstTop;
        }        
        // console.log("GGG setting scrollTop to = " + scrollTo);
        $('html').animate({ scrollTop: scrollTo }, 'fast');
    }
});




////////////////// GA4 EVENTS - methods for use on pages //////////////////

function q_button_click(ev, textOverride, urlOverride) {
    q_click("button", ev, textOverride, urlOverride);
}

function q_link_click(ev, textOverride, urlOverride) {
    q_click("link", ev, textOverride, urlOverride);
}

function q_hero_click(ev, textOverride, urlOverride) {
    q_click("hero", ev, textOverride, urlOverride);
}

function q_button_click_conv(ev, tag, valueOverride, textOverride, urlOverride) {       // Note: Set valueOverride to -1 or undefined for no value override (use GA4 default)
    q_click_conv("button", ev, tag, valueOverride, textOverride, urlOverride)
}

function q_link_click_conv(ev, tag, valueOverride, textOverride, urlOverride) {         // Note: Set valueOverride to -1 or undefined for no value override (use GA4 default)
    q_click_conv("link", ev, tag, valueOverride, textOverride, urlOverride)
}

function q_hero_click_conv(ev, tag, valueOverride, textOverride, urlOverride) {         // Note: Set valueOverride to -1 or undefined for no value override (use GA4 default)
    q_click_conv("hero", ev, tag, valueOverride, textOverride, urlOverride)
}




////////////////// GA4 EVENTS - "private" methods //////////////////

function q_click(evType, ev, textOverride, urlOverride) {
    if ((evType != "button") && (evType != "link") && (evType != "hero")) {
        console.log("ERROR: Unexpected evType = |" + evType + "|");
        return;
    }
    var clickText = $(ev.target).text();
    if (textOverride) {
        clickText = textOverride;
    }
    var clickUrl = $(ev.target).attr("href");
    if (urlOverride) {
        clickUrl = urlOverride;
    }
    console.log("evType = |" + evType + "|");
    console.log("clickText = |" + clickText + "|");
    console.log("clickUrl = |" + clickUrl + "|");
    gtag('event', 'q_' + evType + '_click', {
        'click_text': clickText,
        'click_url': clickUrl
    });
}

function q_click_conv(evType, ev, tag, valueOverride, textOverride, urlOverride) {      // Note: Set valueOverride to -1 or undefined for no value override (use GA4 default)
    if ((evType != "button") && (evType != "link") && (evType != "hero")) {
        console.log("ERROR: Unexpected evType = |" + evType + "|");
        return;
    }
    var value = -1;
    if (valueOverride) {
        if (isNaN(valueOverride)) {
            console.log("ERROR: valueOverride is not a number");
            return;
        }
        value = valueOverride;
    }
    var clickText = $(ev.target).text();
    if (textOverride) {
        clickText = textOverride;
    }
    var clickUrl = $(ev.target).attr("href");
    if (urlOverride) {
        clickUrl = urlOverride;
    }
    console.log("evType = |" + evType + "|");
    console.log("tag = |" + tag + "|");
    console.log("value = |" + value + "|");
    console.log("clickText = |" + clickText + "|");
    console.log("clickUrl = |" + clickUrl + "|");
    if (value != -1) {
        gtag('event', 'q_' + evType + '_click_conv', {
            'click_text': clickText,
            'click_url': clickUrl,
            'tag': tag,
            'value': value
        });
    } else {
        gtag('event', 'q_' + evType + '_click_conv', {
            'click_text': clickText,
            'click_url': clickUrl,
            'tag': tag
        });
    }
}





