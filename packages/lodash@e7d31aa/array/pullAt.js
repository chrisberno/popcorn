var baseAt=require("../internal/baseAt"),baseCompareAscending=require("../internal/baseCompareAscending"),baseFlatten=require("../internal/baseFlatten"),basePullAt=require("../internal/basePullAt"),restParam=require("../function/restParam"),pullAt=restParam(function(e,a){e||(e=[]),a=baseFlatten(a);var r=baseAt(e,a);return basePullAt(e,a.sort(baseCompareAscending)),r});module.exports=pullAt;