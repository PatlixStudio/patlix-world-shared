/** Lifecycle of a single step inside an Aurel-generated plan. */
export var PlanStepStatus;
(function (PlanStepStatus) {
    PlanStepStatus["PENDING"] = "PENDING";
    PlanStepStatus["ASSIGNED"] = "ASSIGNED";
    PlanStepStatus["IN_PROGRESS"] = "IN_PROGRESS";
    PlanStepStatus["COMPLETED"] = "COMPLETED";
    PlanStepStatus["FAILED"] = "FAILED";
    PlanStepStatus["CANCELLED"] = "CANCELLED";
})(PlanStepStatus || (PlanStepStatus = {}));
/** Lifecycle of an orchestration plan (Aurel: request → plan → assign). */
export var PlanStatus;
(function (PlanStatus) {
    PlanStatus["PLANNING"] = "PLANNING";
    PlanStatus["ACTIVE"] = "ACTIVE";
    PlanStatus["COMPLETED"] = "COMPLETED";
    PlanStatus["FAILED"] = "FAILED";
    PlanStatus["CANCELLED"] = "CANCELLED";
})(PlanStatus || (PlanStatus = {}));
