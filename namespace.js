var ddm = ddm || {};
ddm.namespace = ddm.namespace || function (namespace, value) {
  var parts, part, parentNamespace, current, length, index;

  parts = namespace.split('.');
  parentNamespace = parts.shift();
  if (!window[parentNamespace]) {
    window[parentNamespace] = {};
  }
  current = window[parentNamespace];
  length = parts.length;

  for (index = 0; index < length; ++index) {
    part = parts[index];

    if (index === length - 1) {
      current[part] = current[part] || value || {};
    } else {
      current[part] = current[part] || {};
    }
    current = current[part];
  }

  return current;
};
