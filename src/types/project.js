/** A project is a real repository/working area in the workspace (e.g. apps/app-1). */
export var ProjectStatus;
(function (ProjectStatus) {
    ProjectStatus["ACTIVE"] = "ACTIVE";
    ProjectStatus["PAUSED"] = "PAUSED";
    ProjectStatus["COMPLETED"] = "COMPLETED";
    ProjectStatus["ARCHIVED"] = "ARCHIVED";
})(ProjectStatus || (ProjectStatus = {}));
