window.SIDEBAR_ITEMS = {"enum":[["DynGclkId","Value-level enum identifying one of 12 possible [`Gclk`]s"],["DynGclkSourceId","Value-level enum of possible clock sources for a [`Gclk`]"],["Gclk0Id","Type-level variant of [`GclkId`] representing the identity of GCLK0"],["Gclk10Id","Type-level variant of [`GclkId`] representing the identity of GCLK10"],["Gclk11Id","Type-level variant of [`GclkId`] representing the identity of GCLK11"],["Gclk1Id","Type-level variant of [`GclkId`] representing the identity of GCLK1"],["Gclk2Id","Type-level variant of [`GclkId`] representing the identity of GCLK2"],["Gclk3Id","Type-level variant of [`GclkId`] representing the identity of GCLK3"],["Gclk4Id","Type-level variant of [`GclkId`] representing the identity of GCLK4"],["Gclk5Id","Type-level variant of [`GclkId`] representing the identity of GCLK5"],["Gclk6Id","Type-level variant of [`GclkId`] representing the identity of GCLK6"],["Gclk7Id","Type-level variant of [`GclkId`] representing the identity of GCLK7"],["Gclk8Id","Type-level variant of [`GclkId`] representing the identity of GCLK8"],["Gclk9Id","Type-level variant of [`GclkId`] representing the identity of GCLK9"],["GclkDiv16","Enum for the clock division factor of [`Gclk1`] only"],["GclkDiv8","Enum for the clock division factor of all [`Gclk`]s other than [`Gclk1`]"]],"struct":[["Gclk","Generic clock generator used to distribute clocks to various peripherals"],["GclkOut","A GPIO [`Pin`] configured as a [`Gclk`] output"],["GclkToken","Singleton token that can be exchanged for a [`Gclk`]"],["GclkTokens","Set of [`GclkToken`]s representing the disabled [`Gclk`]s at power-on reset"]],"trait":[["Gclk0Io","Set of [`PinId`]s whose implementations of [`GclkIo`] map to [`Gclk0Id`]"],["GclkDivider","Trait unifying the two [`Gclk`] divider types, [`GclkDiv8`] and [`GclkDiv16`]"],["GclkId","Type-level enum identifying one of 12 possible [`Gclk`]s"],["GclkIo","Trait mapping each [`PinId`] to its corresponding [`GclkId`] when used as a [`Gclk`] input or output"],["GclkSourceId","Type-level enum of possible clock [`Source`]s for a [`Gclk`]"],["NotGclkIo","Type-level enum of [`GclkSourceId`] types that are not a [`GclkIo`]"]],"type":[["EnabledGclk","An [`Enabled`] [`Gclk`]"],["EnabledGclk0","Type alias for the corresponding [`EnabledGclk`]"],["EnabledGclk1","Type alias for the corresponding [`EnabledGclk`]"],["EnabledGclk10","Type alias for the corresponding [`EnabledGclk`]"],["EnabledGclk11","Type alias for the corresponding [`EnabledGclk`]"],["EnabledGclk2","Type alias for the corresponding [`EnabledGclk`]"],["EnabledGclk3","Type alias for the corresponding [`EnabledGclk`]"],["EnabledGclk4","Type alias for the corresponding [`EnabledGclk`]"],["EnabledGclk5","Type alias for the corresponding [`EnabledGclk`]"],["EnabledGclk6","Type alias for the corresponding [`EnabledGclk`]"],["EnabledGclk7","Type alias for the corresponding [`EnabledGclk`]"],["EnabledGclk8","Type alias for the corresponding [`EnabledGclk`]"],["EnabledGclk9","Type alias for the corresponding [`EnabledGclk`]"],["Gclk0","Type alias for the corresponding [`Gclk`]"],["Gclk1","Type alias for the corresponding [`Gclk`]"],["Gclk10","Type alias for the corresponding [`Gclk`]"],["Gclk11","Type alias for the corresponding [`Gclk`]"],["Gclk2","Type alias for the corresponding [`Gclk`]"],["Gclk3","Type alias for the corresponding [`Gclk`]"],["Gclk4","Type alias for the corresponding [`Gclk`]"],["Gclk5","Type alias for the corresponding [`Gclk`]"],["Gclk6","Type alias for the corresponding [`Gclk`]"],["Gclk7","Type alias for the corresponding [`Gclk`]"],["Gclk8","Type alias for the corresponding [`Gclk`]"],["Gclk9","Type alias for the corresponding [`Gclk`]"]]};