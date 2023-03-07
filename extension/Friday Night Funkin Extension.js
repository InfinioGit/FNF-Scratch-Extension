(function(Scratch) {
    'use strict';
  
    if (!Scratch.extensions.unsandboxed) {
      throw new Error('This Extension must run unsandboxed');
    }
    // const vm = Scratch.vm;
  
    class FNFEX {
      getInfo () {
        return {
          id: 'fnfextension',
          name: 'FNF Extension',
          blocks: [
            {
              opcode: 'lerp',
              blockType: Scratch.BlockType.REPORTER,
              text: 'Lerp [ONE] First value [TWO] Second value [Ratio] Ratio',
              arguments: {
                ONE: {
                  type: Scratch.ArgumentType.NUMBER,
                  defaultValue: '0'
                },
                TWO: {
                  type: Scratch.ArgumentType.NUMBER,
                  defaultValue: '100'
                },
                Ratio: {
                  type: Scratch.ArgumentType.NUMBER,
                  defaultValue: '0.5'
                }
              }
            }
          ]
        };
      }
  
      lerp(args) {
        return args.ONE + args.Ratio * (args.TWO - args.ONE);
      }
    }
    Scratch.extensions.register(new FNFEX());
  })(Scratch);