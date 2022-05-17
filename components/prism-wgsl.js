Prism.languages.wgsl = {
    'comment': {
        pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,
        greedy: true,
    },
    'attributes': {
        pattern: /(@)(?:align|binding|builtin|const|group|id|interpolate|invariant|location|size|workgroup_size|vertex|fragment|compute)/i,
        lookbehind: true,
        alias: 'attr-name',
    },
    'functions': {
        pattern: /\b(fn\s+)[_a-zA-Z]\w*(?=[(<])/,
        lookbehind: true,
        alias: 'function',
    },
    'keyword': /\b(?:bitcast|break|case|const|continue|continuing|default|discard|else|enable|fallthrough|fn|for|function|if|let|loop|private|return|storage|struct|switch|type|uniform|var|while|workgroup)\b/,
    'builtin': /\b(?:array|atomic|bool|i32|u32|f32|i64|u64|f64|vec[2-4]|mat[2-4]x[2-4]|override|ptr|sampler|sampler_comparison|staticAssert|texture_1d|texture_2d|texture_2d_array|texture_3d|texture_cube|texture_cube_array|texture_multisampled_2d|texture_storage_1d|texture_storage_2d|texture_storage_2d_array|texture_storage_3d|texture_depth_2d|texture_depth_2d_array|texture_depth_cube|texture_depth_cube_array|texture_depth_multisampled_2d)\b/,
    'builtin-functions': /./,
    'function-calls': {
        pattern: /\b[_a-z]\w*(?=\()/i,
        alias: 'function',
    },
    'class-name': /\b(?:[A-Z][A-Za-z0-9]*)\b/,
    'built-in-values-vertex': {
        pattern: /\b(?:vertex_index|instance_index|position)\b/,
        alias: 'attr-value',
    },
    'built-in-values-fragment': {
        pattern: /\b(?:front_facing|frag_depth|sample_index|sample_mask)\b/,
        alias: 'attr-value',
    },
    'built-in-values-compute': {
        pattern: /\b(?:local_invocation_id|local_invocation_index|global_invocation_id|workgroup_id|num_workgroups)\b/,
        alias: 'attr-value',
    },
    'bool-literal': {
        pattern: /\b(?:true|false)\b/,
        alias: 'boolean',
    },
    'hex-int-literal': {
        pattern: /\b0[xX][0-9a-fA-F]+[iu]?\b(?![.pP])/,
        alias:'number',
    },
    'hex-float-literal': {
        pattern: /\b0[xX][0-9a-fA-F]*(?:\.[0-9a-fA-F]*)?(?:[pP][+-]?\d+[fh]?)?/, alias:'number'
    },
    'decimal-float-literal': [
        { pattern: /[0-9]*\.[0-9]+(?:[eE](?:\+|-)?[0-9]+)?[fh]?/, alias:'number' },
        { pattern: /[0-9]+\.[0-9]*(?:[eE](?:\+|-)?[0-9]+)?[fh]?/, alias:'number' },
        { pattern: /[0-9]+[eE](?:\+|-)?[0-9]+[fh]?/, alias:'number' },
        { pattern: /\b\d+[fh]\b/, alias:'number' },
    ],
    'int-literal': { 
        pattern: /\b\d+[iu]?\b/,
        alias:'number',
    },
    'operator': [
        { pattern: /(?:\^|~|\|(?!\|)|\|\||&&|<<|>>|!)(?!=)/ },
        { pattern: /&(?![&=])/ },
        { pattern: /(?:\+=|-=|\*=|\/=|%=|\^=|&=|\|=|<<=|>>=)/},
        { pattern: /(?<![<>=!])=(?![=>])/ },
        { pattern: /(?:==|!=|<=|(?<!=)>=)/ },
        { pattern: /(?:(?:[+%]|(?:\*(?!\w)))(?!=))|(?:-(?!>))|(?:\/(?!\/))/ },
        { pattern: /\.(?!\.)/ },
        { pattern: /->/ },
    ],
    'punctuation': /[(){}[\],;<>]/,
};
