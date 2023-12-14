const ModuleSystem = {
  modules: {},
  utils: {},

  createModule(name, onEnable, onDisable) {
    const module = {
      name,
      enabled: false,

      enable() {
        onEnable();
        module.enabled = true;
      }
    };

    if (onDisable) {
      module.toggle = () => {
        module.enabled ? module.disable() : module.enable();
      };

      module.disable = () => {
        onDisable();
        module.enabled = false;
      };
    }

    ModuleSystem.modules[name] = module;
    return ModuleSystem.modules[name];
  }
};
