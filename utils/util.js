const formatTime = date => {
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()

    return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}
const formatNumber = n => {
    n = n.toString()
    return n[1] ? n : '0' + n
}

export function navigateTo(e) { //页面跳转
    let {
        currentTarget: {
            dataset: {
                url
            }
        }
    } = e

    wx.navigateTo({
        url,
    })
}

export function checkPhone(phone) { //校验手机号
    if (!(/^1(3|4|5|6|7|8|9)\d{9}$/.test(phone))) {
        return false
    } else {
        return true
    }
}

export function checkID(idNo) { // 验证身份证号
    var regIdNo = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
    if (!regIdNo.test(idNo)) {
        return false
    } else {
        return true
    }
}
/**数组根据数组对象中的某个属性值进行排序的方法 
 * 使用例子：newArray.sort(sortBy('number',false)) //表示根据number属性降序排列;若第二个参数不传递，默认表示升序排序
 * @param attr 排序的属性 如number属性
 * @param rev true表示升序排列，false降序排序
 * */
export function sortBy(attr, rev) { // 排序
    //第二个参数没有传递 默认升序排列
    if (rev == undefined) {
        rev = 1;
    } else {
        rev = (rev) ? 1 : -1;
    }

    return function (a, b) {
        a = a[attr];
        b = b[attr];
        if (a < b) {
            return rev * -1;
        }
        if (a > b) {
            return rev * 1;
        }
        return 0;
    }
}
//获取指定日期获取后面的时间
export function getNextDate(date, day, type) {
    var dd = new Date(date);
    dd.setDate(dd.getDate() + day);
    var y = dd.getFullYear();
    var m = dd.getMonth() + 1 < 10 ? "0" + (dd.getMonth() + 1) : dd.getMonth() + 1;
    var d = dd.getDate() < 10 ? "0" + dd.getDate() : dd.getDate();
    if (type == 1) {
        return m + "-" + d;
    } else {
        return y + "-" + m + "-" + d;
    }

}

//根据日期计算星期几
export function weekDay(date) {
    var dt = new Date(date.split("-")[0], date.split("-")[1] - 1, date = date.split("-")[2]);
    var weekDay = ["星期天", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
    return weekDay[dt.getDay()];
}
// 补0函数 => 参数数字
var toDB = nub => {
    return nub < 10 ? "0" + nub : "" + nub
}

// 时间转换 => 参数 时间戳,连接字符
export function timeChange(value, val = ':') {
    let date;
    if (value.length == 10) {
        date = new Date(parseInt(value) * 1000);
    } else if (value.length == 13) {
        date = new Date(parseInt(value));
    }
    let year = date.getFullYear();
    let month = toDB(date.getMonth() + 1);
    let day = toDB(date.getDate());
    let hours = toDB(date.getHours());
    let minutes = toDB(date.getMinutes());
    let seconds = toDB(date.getSeconds());
    return `${year}-${month}-${day} ${hours}${val}${minutes}`

}

// 时间转换 => 参数 连接字符
export function timeChange2(val = ':') {
    let date = new Date();
    let year = date.getFullYear();
    let month = toDB(date.getMonth() + 1);
    let day = toDB(date.getDate());
    let hours = toDB(date.getHours());
    let minutes = toDB(date.getMinutes());
    let seconds = toDB(date.getSeconds());
    return `${year}-${month}-${day} ${hours}${val}${minutes}${val}${seconds}`
}

// 时间转换 => 参数 连接字符
export function timeChange3(val) {
    let date = val ? val: new Date();
    let year = date.getFullYear();
    let month = toDB(date.getMonth() + 1);
    let day = toDB(date.getDate());
    return `${year}-${month}-${day}`
}

// 时间比较 time2是否大于time1 => 00:00
export function compareTime(str1, str2) {
    let time1 = str1.trim().split(':');
    let time2 = str2.trim().split(':');
    if (time2[0] > time1[0]) {
        return true
    } else if (time2[0] == time1[0]) {
        return time2[1] >= time1[1] ? true : false
    } else {
        return false
    }
}

// 时间转换 =>把秒转成00:00的格式
export function format(second) {
    let min = Math.floor(second / 60);
    let sec = second % 60;

    let str = "";
    if (min < 10) {
        str += "0" + min.toString();
    } else {
        str += min.toString();
    }

    str += ":";
    if (sec < 10) {
        str += "0" + sec.toString();
    } else {
        str += sec.toString();
    }

    return str;
}

// 字段规则：kly+当前年份+当前月份 ，如“kly201903”
export function timeSign(val) {
    let date = new Date()
    let yyyy = date.getFullYear()
    let mm = date.getMonth() + 1
    mm = mm < 10 ? `0${mm}` : mm
    let time = `${val}${yyyy}${mm}` //表示当前日期
    return time
}

/**
 * 乘法函数，用来得到精确的乘法结果
 * 说明：javascript的乘法结果会有误差，在两个浮点数相乘的时候会比较明显。这个函数返回较为精确的乘法结果。
 * @param {*} arg1 因数
 * @param {*} arg2 因数
 */
export const accMul = (arg1, arg2) => {
    let [m, s1, s2] = [0, arg1.toString(), arg2.toString()];
    try {
        m += s1.split('.')[1].length;
    }
    catch (e) { }
    try {
        m += s2.split('.')[1].length;
    }
    catch (e) { }
    return ((Number(s1.replace('.', '')) * Number(s2.replace('.', ''))) /
        Math.pow(10, m));
};

// 保留小数 银行家算法（不四舍五入）
export function formatDecimal(num, decimal) {
    num = num.toString()
    let index = num.indexOf('.')
    if (index !== -1) {
        num = num.substring(0, decimal + index + 1)
    } else {
        num = num.substring(0)
    }
    return parseFloat(num).toFixed(decimal)
}

// 数组去重
export function unique (arr) {
  if (Array.hasOwnProperty('from')) {
    return Array.from(new Set(arr));
  } else {
    var n = {}, r = [];
    for (var i = 0; i < arr.length; i++) {
      if (!n[arr[i]]) {
        n[arr[i]] = true;
        r.push(arr[i]);
      }
    }
    return r;
  }
};

// 属性分类 数组
export function dealWithData(data, attribute) {
    const arr = []
    const obj = {}
    data.forEach(element => {
        if (!obj[element[attribute]]) {
            arr.push({
                attribute: element[attribute],
                allData: [element],
            })
            obj[element[attribute]] = element
        } else {
            arr.forEach(ele => {
                if (ele.attribute === element[attribute]) {
                    ele.allData.push(element)
                }
            })
        }
    })
    return arr
}


//富文本展示,图片宽度超出屏幕
export function formatRichText(html) {
    let newContent = html.replace(/<img[^>]*>/gi, function (match, capture) {
        match = match.replace(/style="[^"]+"/gi, '').replace(/style='[^']+'/gi, '');
        match = match.replace(/width="[^"]+"/gi, '').replace(/width='[^']+'/gi, '');
        match = match.replace(/height="[^"]+"/gi, '').replace(/height='[^']+'/gi, '');
        return match;
    });
    newContent = newContent.replace(/style="[^"]+"/gi, function (match, capture) {
        match = match.replace(/width:[^;]+;/gi, 'max-width:100%;').replace(/width:[^;]+;/gi, 'max-width:100%;');
        return match;
    });
    newContent = newContent.replace(/<br[^>]*\/>/gi, '');
    newContent = newContent.replace(/\<img/gi, '<img style="max-width:100%;height:auto;display:block;margin-top:0;margin-bottom:0;"');
    return newContent;
}

// 百度坐标转腾讯坐标
export function bMapToQQMap(lng, lat) {

    if (lng == null || lng == '' || lat == null || lat == '')
        return [lng, lat];

    var x_pi = 3.14159265358979324;
    var x = parseFloat(lng) - 0.0065;
    var y = parseFloat(lat) - 0.006;
    var z = Math.sqrt(x * x + y * y) - 0.00002 * Math.sin(y * x_pi);
    var theta = Math.atan2(y, x) - 0.000003 * Math.cos(x * x_pi);
    var lng = (z * Math.cos(theta)).toFixed(7);
    var lat = (z * Math.sin(theta)).toFixed(7);

    return [lng, lat];

}

// 以下是将恐龙园老版方法 移到新版
const cloneTool = function (obj) { // 深拷贝
    let initObj = null
    if (typeof obj === 'object' && obj !== null) {
        initObj = obj instanceof Array ? [] : {}
        for (let attr in obj) {
            initObj[attr] = cloneTool(obj[attr])
        }
    } else {
        initObj = obj
    }
    return initObj
}

// 是否为当日判断
export function isToday(date) {
    var d = new Date(date.toString().replace(/-/g,"/"));
    var todaysDate = new Date();
    if(d.setHours(0,0,0,0) == todaysDate.setHours(0,0,0,0)){
        return true;
    } else {
        return false;
    }
  }




module.exports = {
    formatTime: formatTime,
    unique,
    dealWithData,
    navigateTo,
    checkPhone,
    checkID,
    sortBy,
    getNextDate,
    weekDay,
    timeChange,
    format,
    compareTime,
    timeSign,
    timeChange2,
    timeChange3,
	accMul,
    formatDecimal,
    formatRichText,
    bMapToQQMap,
    isToday,
    toDB,
}