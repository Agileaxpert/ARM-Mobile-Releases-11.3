class AxTasks {
    constructor() {
        this.isAxpertFlutter = !this.isNullOrEmpty(armToken);
        this.taskCardHtml = `
        <table class="table align-middle  fs-6 gy-5 mb-0 dataTable no-footer task-listing-card">
            <tbody>
                <tr class="d-flex header">                                           
                    <td class="d-flex align-items-center task-name">
                        <div class="d-flex flex-column">
                            <a href="#" onclick="axTasksObj.openProcess('{{processname}}','{{keyfield}}','{{keyvalue}}')" class="text-gray-800 fw-bold fs-6  mb-1 task-title"> <span class="material-icons material-icons-style material-icons-1 display-icon">{{displayicon}}</span>{{displaytitle}}</a>
                            <span class="task-subtitle">{{displaysubtitle}}</span>
                        </div>
                    </td>
                    <td class="task-right">
                        <div class="d-flex flex-column task-process">
                            <a href="#" class="text-gray-800 fs-6 mb-1 task-assignedBy" title="Assigned By">
                                {{fromuser}}</a>
                            <div class="d-flex flex-row task-date  ">
                                <span class="start-date" title="Start Date">{{eventdatetime}}</span>
                                <!--<span class="end-date" title="End Date">{{eventdatetime}}</span>-->
                            </div>
                        </div>
                    </td>
                    <td class="text-end task-more-btns">
                        <div class="d-flex align-items-center task-more-btns">
                            {{task_buttons_html}}
                        </div>
                    </td>
                </tr>
                <tr>
                    <td class="task-description"><span class="more">{{displaycontent}}</span></td>
                </tr>
            </tbody>
        </table>`;

        this.taskNoRecordsCardHtml = `
        <table class="table align-middle  fs-6 gy-5 mb-0 dataTable no-footer task-listing-card">
            <tbody>
                <tr class="d-flex header">                                           
                    <td class="d-flex align-items-center task-name">
                        No active tasks available.
                    </td>
                </tr>
            </tbody>
        </table>`;

        this.taskProcessedCardHtml = `
        <table class="table align-middle  fs-6 gy-5 mb-0 dataTable no-footer task-listing-card">
            <tbody>
                <tr class="d-flex header">                                           
                    <td class="d-flex align-items-center task-name">
                        This task has been processed.
                    </td>
                </tr>
            </tbody>
        </table>`;

        this.taskBtnsHtml = {};
        this.taskBtnsHtml.make = `
            <a href="#" title="Make" class="btn btn-white btn-color-gray-700 btn-active-primary d-inline-flex align-items-center  btn-sm  me-2" onclick="axTasksObj.openProcess('{{processname}}','{{keyfield}}','{{keyvalue}}')""><span class="material-icons material-icons-style material-icons-2" style="color: orange;;">assignment</span></a>`;
        this.taskBtnsHtml.approve = `
            <a href="#" title="Approve" class="btn btn-white btn-color-gray-700 btn-active-primary d-inline-flex align-items-center  btn-sm  me-2" onclick="axTasksObj.doApprove('{{taskid}}')"><span class="material-icons material-icons-style material-icons-2" style="color: #47BE7D;">check_circle</span></a>`;
        this.taskBtnsHtml.reject = `
            <a href="#" title="Reject" class="btn btn-white btn-color-gray-700 btn-active-primary d-inline-flex align-items-center  me-2  btn-sm" onclick="axTasksObj.doReject('{{taskid}}')"><span class="material-icons material-icons-style material-icons-2" style="color: red;">cancel</span></a>`;
        this.taskBtnsHtml.return = `
            <a href="#" title="Return" class="btn btn-white btn-color-gray-700 btn-active-primary d-inline-flex align-items-center  me-2  btn-sm" onclick="axTasksObj.doReturn('{{taskid}}')"><span class="material-icons material-icons-style material-icons-2" style="color: blueviolet;">reply</span></a>`;
        this.taskBtnsHtml.forward = `
            <a href="#" title="Forward" class="btn btn-white btn-color-gray-700 btn-active-primary d-inline-flex align-items-center  me-2  btn-sm" onclick="axTasksObj.doForward('{{taskid}}')"><span class="material-icons material-icons-style material-icons-2" style="color: brown;">forward</span></a>`;
        this.taskBtnsHtml.check = `
             <a href="#" title="Check" class="btn btn-white btn-color-gray-700 btn-active-primary d-inline-flex align-items-center  me-2  btn-sm" onclick="axTasksObj.doCheck('{{taskid}}')"><span class="material-icons material-icons-style material-icons-2" style="color: #47BE7D;">done_all</span></a>`;
        this.taskBtnsHtml.more = `
            <button href="#" class="btn btn-icon btn-active-light-primary w-30px h-30px"
                data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-attach="parent"
                data-kt-menu-placement="bottom-end">
                <span class="material-icons material-icons-style material-icons-1">
                    more_horiz
                </span>
            </button>
            <div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-title-gray-700 menu-icon-muted menu-active-bg menu-state-primary fw-bold py-4 fs-6 w-150px"
                data-kt-menu="true" style="">

                <div class="menu-item px-3">
                    <a href="#" class="menu-link d-flex px-5 ">
                        <span class="symbol symbol-20px me-4">
                            <span class="material-icons material-icons-style material-icons-1">
                                ios_share
                            </span>
                        </span>Open</a>
                </div>

                <div class="menu-item px-3">
                    <a href="#" class="menu-link d-flex px-5">
                        <span class="symbol symbol-20px me-4">
                            <span class="material-icons material-icons-style material-icons-1">
                                check_circle
                            </span>
                        </span>Approve</a>
                </div>

                <div class="menu-item px-3">
                    <a href="#" class="menu-link d-flex px-5">
                        <span class="symbol symbol-20px me-4">
                            <span class="material-icons material-icons-style material-icons-1">
                                cancel
                            </span>
                        </span>Reject </a>
                </div>

                <div class="menu-item px-3">
                    <a href="#" class="menu-link d-flex px-5">
                        <span class="symbol symbol-20px me-4">
                            <span class="material-icons material-icons-style material-icons-1">
                                reply
                            </span>
                        </span>Return </a>
                </div>

                <div class="menu-item px-3">
                    <a href="#" class="menu-link d-flex px-5">
                        <span class="symbol symbol-20px me-4">
                            <span class="material-icons material-icons-style material-icons-1">
                                cancel
                            </span>
                        </span> Forward </a>
                </div>
            </div>`;
        this.dataSources = [];
        this.processName = '';
        this.task = {};
        this.task.keyField = '';
        this.task.keyValue = '';
        this.task.taskName = '';
        this.task.taskType = '';
        //this.task.taskId = '';
    }

    fetchActiveTasks(name) {
        let _this = this;
        let url = "../../aspx/AxPEG.aspx/GetActiveTasks";
        let data = {};        
        if (_this.isAxpertFlutter) {
            url = "../../api/v1/ARMGetActiveTasks";
        }
        this.callAPI(url, data, false, result => {
            if (result.success) {
                let json = JSON.parse(result.response);
                let dataResult = _this.dataConvert(json, "ARM");
                _this.dataSources[name] = dataResult;
            }
        });
    }

    fetchProcessTask(name) {
        let _this = this;
        let url = "../../aspx/AxPEG.aspx/AxGetProcessTask";
        let _task = this.task;
        let data = { processName: this.processName, keyField: _task.keyField, keyValue: _task.keyValue, taskName: _task.taskName, taskType: _task.taskType };
        this.callAPI(url, data, false, result => {
            if (result.success) {
                let json = JSON.parse(result.response);
                let dataResult = _this.dataConvert(json, "ARM");
                _this.dataSources[name] = dataResult;
            }
        });
    }

    doApprove(taskId) {
        this.doTaskAction('APPROVE', taskId, 'APPROVE');
    }

    doReject(taskId) {
        this.doTaskAction('REJECT', taskId, 'APPROVE');
    }

    doForward(taskId) {
        this.doTaskAction('FORWARD', taskId, 'APPROVE');
    }

    doReturn(taskId) {
        this.doTaskAction('RETURN', taskId, 'APPROVE');
    }

    doCheck(taskId) {
        this.doTaskAction('CHECK', taskId, 'CHECK');
    }

    doTaskAction(action, taskId, taskType) {
        ShowDimmer(true);
        let url = "../../aspx/AxPEG.aspx/AxDoTaskAction";
        let data = { action: action, taskId: taskId, taskType: taskType };
        this.callAPI(url, data, true, result => {
            ShowDimmer(false);
            if (result.success) {
                let json = JSON.parse(result.response);
                json = JSON.parse(json.d);
                if (json.result.success) {
                    this.showSuccess(json.result.message);   
                    if(!this.isUndefined(parent.axProcessObj))
                        parent.axProcessObj.refreshProcess(parent.axProcessObj.keyValue);
                    else
                        window.location.reload();
                }
                else {
                    this.catchError(json.result.message);
                }
            }
        });
    }

    callAPI(url, data, async, callBack) {
        
        let _this = this;
        var xhr = new XMLHttpRequest();
        xhr.open("POST", url, async);
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        if (_this.isAxpertFlutter) {
            xhr.setRequestHeader('Authorization', `Bearer ${armToken}`);
            data["armSessionId"] = armSessionId;
        }

        xhr.onreadystatechange = function () {
            if (this.readyState == 4) {
                if (this.status == 200) {
                    callBack({ success: true, response: this.responseText });
                }
                else {
                    _this.catchError(this.responseText);
                    callBack({ success: false, response: this.responseText });
                }
            }
        }
        xhr.send(JSON.stringify(data));
    }

    catchError(error) {
        showAlertDialog("error", error);
    };

    showSuccess(message) {
        showAlertDialog("success", message);
    };

    isEmpty(elem) {
        return elem == "";
    };

    isNull(elem) {
        return elem == null;
    };

    isNullOrEmpty(elem) {
        return elem == null || elem == "";
    };

    isUndefined(elem) {
        return typeof elem == "undefined";
    };

    dataConvert(data, type) {
        if (type == "AXPERT") {
            try {
                data = JSON.parse(data.d);
                if (typeof data.result[0].result.row != "undefined") {
                    return data.result[0].result.row;
                }
            }
            catch (error) {
                this.catchError(error.message);
            };

            try {
                if (typeof data.result[0].result != "undefined") {
                    return data.result[0].result;
                }
            }
            catch (error) {
                this.catchError(error.message);
            };
        }
        else if (type == "ARM") {            
            try {
                if (!this.isAxpertFlutter)
                    data = JSON.parse(data.d);
                if (data.result.success) {
                    if (!this.isUndefined(data.result.data)) {
                        return JSON.parse(data.result.data);
                    }
                }
                else {
                    if (!this.isUndefined(data.result.message)) {
                        this.catchError(data.result.message);
                    }
                }
            }
            catch (error) {
                this.catchError(error.message);
            };
        }        

        return data;
    }

    generateFldId() {
        return `fid${Date.now()}${Math.floor(Math.random() * 90000) + 10000}`;
    };

    showTasks() {
        if (this.dataSources["Tasks"] == 0) {
            if (this.isUndefined(parent.axProcessObj))
                document.querySelector('#tasks_container').insertAdjacentHTML("beforeend", ` ${this.taskNoRecordsCardHtml} `);
            else
                document.querySelector('#tasks_container').insertAdjacentHTML("beforeend", ` ${this.taskProcessedCardHtml} `);
        }
        else {
            this.dataSources["Tasks"].forEach((rowData, idx) => {
                switch (rowData.tasktype.toUpperCase()) {
                    case "MAKE":
                        rowData.task_buttons_html = this.taskBtnsHtml.make;
                        break;
                    case "CHECK":
                        rowData.task_buttons_html = this.taskBtnsHtml.check;
                        break;
                    case "APPROVE":
                        rowData.task_buttons_html = this.taskBtnsHtml.approve + this.taskBtnsHtml.return + this.taskBtnsHtml.forward + this.taskBtnsHtml.reject;
                        break;
                }
                //rowData.task_buttons_html = `<div class="d-flex align-items-center task-more-btns">${rowData.task_buttons_html}</div>`;
                let htmlText = Handlebars.compile(this.taskCardHtml.replace("{{task_buttons_html}}", rowData.task_buttons_html))(rowData);
                document.querySelector('#tasks_container').insertAdjacentHTML("beforeend", ` ${htmlText} `);
            });
        }

        /*var showChar = 20;  // How many characters are shown by default
        var ellipsesText = "...";
        var moreText = "Show more >";
        var lessText = "Show less";

        document.querySelectorAll('.more').forEach((taskContent) => {
            taskContent.classList.add('hideContent');
            taskContent.insertAdjacentHTML("afterend", ` <span class="moreellipses">${ellipsesText}&nbsp;</span><span class="morecontent">&nbsp;&nbsp;<a href="#" class="morelink show-more">${moreText}</a></span>`);
        });

        $(".show-more").on("click", function () {
            var $this = $(this);
            var $content = $this.closest('.task-description').find(".more");
            var linkText = $this.text().toUpperCase();

            if (linkText === moreText.toUpperCase()) {
                linkText = lessText;
                $content.toggleClass("hideContent", "showContent", 400);
            } else {
                linkText = moreText;
                $content.toggleClass("showContent", "hideContent", 400);
            };

            $this.text(linkText);
        });*/

        //$('.more').each(function () {
        //    var content = $(this).html();

        //    if (content.length > showChar) {

        //        var c = content.substr(0, showChar);
        //        var h = content.substr(showChar, content.length - showChar);

        //        var html = c + '<span class="moreellipses">' + ellipsesText + '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moreText + '</a></span>';

        //        $(this).html(html);
        //    }

        //});

        //$(".morelink").click(function () {
        //    if ($(this).hasClass("less")) {
        //        $(this).removeClass("less");
        //        $(this).html(moreText);
        //    } else {
        //        $(this).addClass("less");
        //        $(this).html(lessText);
        //    }
        //    $(this).parent().prev().toggle();
        //    $(this).prev().toggle();
        //    return false;
        //});
        
    }

    getUrlParams() {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        this.task.keyField = urlParams.get('keyfield');
        this.task.keyValue = urlParams.get('keyvalue');
        this.processName = urlParams.get('processname');
        this.task.taskType = urlParams.get('tasktype');
        //this.task.taskId = urlParams.get('taskid');
        this.task.taskName = urlParams.get('taskname');
    }

    openProcess(processName, keyField, keyValue) {
        ShowDimmer(true);
        if (!this.isAxpertFlutter)
            callParentNew(`LoadIframe(htmlPages.aspx?loadcaption=AxProcessFlow&processname=${processName}&keyfield=${keyField}&keyvalue=${keyValue})`, "function");
        else {
            window.location.href = `/api/v1/ARMGetAxHTML?page=AxProcessFlow.html&processname=${processName}&keyfield=${keyField}&keyvalue=${keyValue}&session=${armSessionId}`;
        }
    }
}

var axTasksObj;
$(document).ready(function () {
    ShowDimmer(true);
    axTasksObj = new AxTasks();
    axTasksObj.getUrlParams();
    let _tasks = axTasksObj.task;
    if (axTasksObj.isNullOrEmpty(_tasks.taskName) || axTasksObj.isUndefined(_tasks.taskName)) {
        axTasksObj.fetchActiveTasks("Tasks");
    }
    else {
        axTasksObj.fetchProcessTask("Tasks");
        document.querySelector("#create-task").style.display = "none";
        if (!axTasksObj.isUndefined(axTasksObj.dataSources?.["Tasks"]?.[0]?.["displaytitle"])) {
            document.querySelector("#task-page-title").innerHTML = axTasksObj.dataSources["Tasks"][0]["displaytitle"];
        }
    }
    axTasksObj.showTasks();
    ShowDimmer(false);
    if (typeof parent.axProcessObj != "undefined") {
        parent.ShowDimmer(false);
    }
});
