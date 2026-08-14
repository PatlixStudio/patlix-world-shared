/** Lifecycle of an AI agent working in Patlix World. */
export var AgentStatus;
(function (AgentStatus) {
    AgentStatus["CREATED"] = "CREATED";
    AgentStatus["IDLE"] = "IDLE";
    AgentStatus["ASSIGNED"] = "ASSIGNED";
    AgentStatus["WORKING"] = "WORKING";
    AgentStatus["WAITING"] = "WAITING";
    AgentStatus["NAVIGATING"] = "NAVIGATING";
    AgentStatus["MEETING"] = "MEETING";
    AgentStatus["COMMUNICATING"] = "COMMUNICATING";
    AgentStatus["BLOCKED"] = "BLOCKED";
    AgentStatus["OFFLINE"] = "OFFLINE";
})(AgentStatus || (AgentStatus = {}));
