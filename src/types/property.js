/** A property is a physical place (land + building) in the world owned by a user/company. */
export var PropertyType;
(function (PropertyType) {
    PropertyType["HEADQUARTERS"] = "HEADQUARTERS";
    PropertyType["OFFICE"] = "OFFICE";
    PropertyType["STUDIO"] = "STUDIO";
    PropertyType["LABORATORY"] = "LABORATORY";
    PropertyType["WORKSHOP"] = "WORKSHOP";
    PropertyType["WAREHOUSE"] = "WAREHOUSE";
    PropertyType["CAMPUS"] = "CAMPUS";
    PropertyType["RESIDENCE"] = "RESIDENCE";
    PropertyType["CUSTOM"] = "CUSTOM";
})(PropertyType || (PropertyType = {}));
