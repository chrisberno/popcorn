function writeableDir(r){if(!r||!fs.existsSync(r))return!1;if(!fs.statSync(r).isDirectory())return!1;var e=r+"/"+common.randomFileName();try{return fs.writeFileSync(e," "),common.unlinkSync(e),r}catch(i){return!1}}function _tempDir(){var r=common.state;return r.tempDir?r.tempDir:(r.tempDir=writeableDir(os.tempDir&&os.tempDir())||writeableDir(process.env.TMPDIR)||writeableDir(process.env.TEMP)||writeableDir(process.env.TMP)||writeableDir(process.env.Wimp$ScrapDir)||writeableDir("C:\\TEMP")||writeableDir("C:\\TMP")||writeableDir("\\TEMP")||writeableDir("\\TMP")||writeableDir("/tmp")||writeableDir("/var/tmp")||writeableDir("/usr/tmp")||writeableDir("."),r.tempDir)}var common=require("./common"),os=require("os"),fs=require("fs");module.exports=_tempDir;