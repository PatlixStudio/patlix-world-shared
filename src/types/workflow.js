/** Lifecycle of a workflow (a multi-task Aurel-orchestrated unit of work). */
export var WorkflowStatus;
(function (WorkflowStatus) {
    WorkflowStatus["PENDING"] = "PENDING";
    WorkflowStatus["RUNNING"] = "RUNNING";
    WorkflowStatus["WAITING_APPROVAL"] = "WAITING_APPROVAL";
    WorkflowStatus["COMPLETED"] = "COMPLETED";
    WorkflowStatus["FAILED"] = "FAILED";
    WorkflowStatus["CANCELLED"] = "CANCELLED";
})(WorkflowStatus || (WorkflowStatus = {}));
