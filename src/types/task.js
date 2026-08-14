/** Full task lifecycle. The 3D world reflects these states. */
export var TaskStatus;
(function (TaskStatus) {
    TaskStatus["BACKLOG"] = "BACKLOG";
    TaskStatus["PLANNED"] = "PLANNED";
    TaskStatus["ASSIGNED"] = "ASSIGNED";
    TaskStatus["IN_PROGRESS"] = "IN_PROGRESS";
    TaskStatus["WAITING"] = "WAITING";
    TaskStatus["REVIEW"] = "REVIEW";
    TaskStatus["APPROVED"] = "APPROVED";
    TaskStatus["COMPLETED"] = "COMPLETED";
    TaskStatus["FAILED"] = "FAILED";
    TaskStatus["BLOCKED"] = "BLOCKED";
    TaskStatus["CANCELLED"] = "CANCELLED";
})(TaskStatus || (TaskStatus = {}));
