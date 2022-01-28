
/**
 * @description 返回成绩表格 html 字符串
 * @param {array[][]} rows
 * @returns {string} html
 * 返回的字符串格式如下
 *  <tr>
        <td>学生姓名</td>
        <td>学生总分</td>
    </tr>
 */
function renderScoreTableRows(rows) {
    let str = '';
    rows.forEach(element => {
        let sname, sgrade;
        [sname, sgrade] = element;
        //console.log('<tr><td>' + sname + '</td><td>' + sgrade + '</td></tr>');
        str += '<tr><td>' + sname + '</td><td>' + sgrade + '</td></tr>';

    });

    return str;

}
/**
 * @description 返回第一名列表 html 字符串 
 * @param {array[][]} rows
 * @returns {string} html
 * 返回的字符串格式如下
 * <li>第一名：学生姓名，分数：学生分数</li>
 */
function printFirst(rows) {
    let firstName, firstScore;
    //[firstName, firstScore] = [rows[0][0], rows[0][1]];
    [firstName, firstScore] = rows[0];
    let str = '<li>第一名：' + firstName + '，分数：' + firstScore + '</li> ';
    return str;
}

/**
 * @description 返回最后一名列表 html 字符串 
 * @param {array[][]} rows
 * * @returns {string} html
 * 返回的字符串格式如下
 * <li>最后一名：学生姓名，分数：学生分数</li>
 */
function printLast(rows) {
    let lastName, lastScore;
    [lastName, lastScore] = rows[rows.length - 1];
    let str = '<li>最后一名：' + lastName + '，分数：' + lastScore + '</li>';
    return str;

}

/**
 * @description 返回平均分 html 字符串 
 * @param {array[][]} rows
 * * @returns {string} html
 * 返回的字符串格式如下
 * <li>平均分:平均分分数</li>
 */
function printAverage(rows) {
    let grade;
    let sum = 0;
    rows.forEach(element => {
        grade = parseInt(element[1]);
        sum = sum + grade;
    });
    let average = sum / rows.length;

    let str;
    str = '<li>平均分:' + average.toFixed(2) + '</li>';
    return str;

}
