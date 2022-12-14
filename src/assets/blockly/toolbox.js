export default {
  kind: 'categoryToolbox',
  contents: [
    {
      kind: 'category',
      name: 'API',
      contents: [
        {
          kind: 'block',
          type: 'on_start',
        },
        {
          kind: 'block',
          type: 'on_end',
        },
        {
          kind: 'block',
          type: 'stop_all',
        },
        {
          kind: 'block',
          type: 'server_message_post',
          inputs: {
            URL: {
              block: {
                type: 'text',
                fields: {
                  TEXT: 'https://lexica.art/api/v1/search?q='
                }
              }
            },
            ERROR_STATEMENTS: {
              block: {
                type: 'feed_send_data',
                inputs: {
                  DATA: {
                    block: {
                      type: 'server_message_post_response',
                    }
                  }
                }
              }
            }
          },
        },
        {
          kind: 'block',
          type: 'server_message_post_response',
        },
        {
          kind: 'block',
          type: 'feed_send_data'
        },

      ]
    },
    {
      kind: 'sep',
    },
    {
      kind: 'category',
      name: 'Text',
      contents: [
        {
          kind: 'block',
          type: 'text'
        },
        {
          kind: 'block',
          type: 'text_multiline'
        },
        {
          kind: 'block',
          type: 'text_join_list',
          inputs: {
            WITH: {
              block: {
                type: 'text',
                fields: {
                  TEXT: ', '
                }
              }
            },
          }
        },
        {
          kind: 'block',
          type: 'text_length'
        },
        {
          kind: 'block',
          type: 'text_isEmpty'
        },
        {
          kind: 'block',
          type: 'text_indexOf'
        },
        {
          kind: 'block',
          type: 'text_charAt'
        },
        {
          kind: 'block',
          type: 'text_changeCase'
        },
        {
          kind: 'block',
          type: 'text_trim'
        },
        {
          kind: 'block',
          type: 'text_print'
        },
        {
          kind: 'block',
          type: 'text_prompt_ext'
        },
        {
          kind: 'block',
          type: 'text_prompt'
        },
        {
          kind: 'block',
          type: 'text_count'
        },
        {
          kind: 'block',
          type: 'text_replace'
        },
        {
          kind: 'block',
          type: 'text_reverse'
        },
      ]
    },
    {
      kind: 'category',
      name: 'Math',
      contents: [
        {
          kind: 'block',
          type: 'math_number'
        },
        {
          kind: 'block',
          type: 'math_arithmetic'
        },
        {
          kind: 'block',
          type: 'math_number_property'
        },
        {
          kind: 'block',
          type: 'math_round'
        },
        {
          kind: 'block',
          type: 'math_on_list'
        },
        {
          kind: 'block',
          type: 'math_modulo'
        },
        {
          kind: 'block',
          type: 'math_constrain'
        },
        {
          kind: 'block',
          type: 'math_random_int'
        },
        {
          kind: 'block',
          type: 'math_random_float'
        },
        // {
        //   kind: 'block',
        //   type: 'math_single'
        // },
        // {
        //   kind: 'block',
        //   type: 'math_trig'
        // },
        // {
        //   kind: 'block',
        //   type: 'math_constant'
        // },
        // {
        //   kind: 'block',
        //   type: 'math_atan2'
        // },
      ]
    },
    {
      kind: 'category',
      name: 'Lists',
      contents: [
        {
          kind: 'block',
          type: 'json_object'
        },
        {
          kind: 'block',
          type: 'json_object_key_value',
          inputs: {
            KEY: {
              block: {
                type: 'text',
                fields: {
                  // @todo this should be dynamic otherwise we'll get duplicate key bugs
                  TEXT: 'untitled'
                }
              }
            },
            VALUE: {
              block: {
                type: 'text',
                fields: {
                  TEXT: ''
                }
              }
            }
          },
        },
        {
          kind: 'block',
          type: 'json_object_get'
        },
        {
          kind: 'block',
          type: 'json_object_merge'
        },
        {
          kind: 'block',
          type: 'list_get_random',
        },
        {
          kind: 'block',
          type: 'list_shuffle'
        },
        {
          kind: 'block',
          type: 'json_object_extract_values',
        },
        {
          kind: 'block',
          type: 'lists_repeat'
        },
        {
          kind: 'block',
          type: 'lists_reverse'
        },
        {
          kind: 'block',
          type: 'lists_isEmpty'
        },
        {
          kind: 'block',
          type: 'lists_length'
        },
        {
          kind: 'block',
          type: 'lists_create_with'
        },
        {
          kind: 'block',
          type: 'lists_indexOf'
        },
        {
          kind: 'block',
          type: 'lists_getIndex'
        },
        {
          kind: 'block',
          type: 'lists_setIndex'
        },
        {
          kind: 'block',
          type: 'lists_getSublist'
        },
        {
          kind: 'block',
          type: 'lists_sort'
        },
        {
          kind: 'block',
          type: 'lists_split'
        },
      ]
    },
    {
      kind: 'category',
      name: 'Logic',
      contents: [
        {
          kind: 'block',
          type: 'logic_boolean'
        },
        {
          kind: 'block',
          type: 'controls_if'
        },
        {
          kind: 'block',
          type: 'controls_ifelse'
        },
        {
          kind: 'block',
          type: 'logic_compare'
        },
        {
          kind: 'block',
          type: 'logic_operation'
        },
        {
          kind: 'block',
          type: 'logic_negate'
        },
        {
          kind: 'block',
          type: 'logic_null'
        },
        {
          kind: 'block',
          type: 'logic_ternary'
        },
        // {
        //   kind: 'block',
        //   type: 'controls_if_if'
        // },
        // {
        //   kind: 'block',
        //   type: 'controls_if_elseif'
        // },
        // {
        //   kind: 'block',
        //   type: 'controls_if_else'
        // },
      ]
    },
    {
      kind: 'category',
      name: 'Loops',
      contents: [
        {
          kind: 'block',
          type: 'controls_repeat_ext',
        },
        {
          kind: 'block',
          type: 'controls_repeat'
        },
        {
          kind: 'block',
          type: 'controls_whileUntil'
        },
        {
          kind: 'block',
          type: 'controls_for'
        },
        {
          kind: 'block',
          type: 'controls_forEach'
        },
        {
          kind: 'block',
          type: 'controls_flow_statements'
        },
      ]
    },
    {
      kind: 'sep',
    },
    {
      kind: 'category',
      name: 'Variables',
      custom: 'VARIABLE'
    },
    {
      kind: 'category',
      name: 'Functions',
      custom: 'PROCEDURE'
    },
  ]
}
