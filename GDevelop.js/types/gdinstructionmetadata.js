// Automatically generated by GDevelop.js/scripts/generate-types.js
declare class gdInstructionMetadata extends gdAbstractFunctionMetadata {
  constructor(): void;
  getFullName(): string;
  getDescription(): string;
  getSentence(): string;
  getGroup(): string;
  getIconFilename(): string;
  getSmallIconFilename(): string;
  getHelpPath(): string;
  canHaveSubInstructions(): boolean;
  getParameter(index: number): gdParameterMetadata;
  getParametersCount(): number;
  getParameters(): gdVectorParameterMetadata;
  getUsageComplexity(): number;
  isHidden(): boolean;
  isPrivate(): boolean;
  isAsync(): boolean;
  isOptionallyAsync(): boolean;
  isRelevantForLayoutEvents(): boolean;
  isRelevantForFunctionEvents(): boolean;
  isRelevantForAsynchronousFunctionEvents(): boolean;
  isRelevantForCustomObjectEvents(): boolean;
  setCanHaveSubInstructions(): gdInstructionMetadata;
  setHelpPath(helpPath: string): gdInstructionMetadata;
  setHidden(): gdInstructionMetadata;
  setPrivate(): gdInstructionMetadata;
  setRelevantForLayoutEventsOnly(): gdInstructionMetadata;
  setRelevantForFunctionEventsOnly(): gdInstructionMetadata;
  setRelevantForAsynchronousFunctionEventsOnly(): gdInstructionMetadata;
  setRelevantForCustomObjectEventsOnly(): gdInstructionMetadata;
  addParameter(type: string, description: string, optionalObjectType?: string, parameterIsOptional?: boolean): gdInstructionMetadata;
  addCodeOnlyParameter(type: string, supplementaryInformation: string): gdInstructionMetadata;
  setDefaultValue(defaultValue: string): gdInstructionMetadata;
  setParameterLongDescription(longDescription: string): gdInstructionMetadata;
  setParameterExtraInfo(extraInfo: string): gdInstructionMetadata;
  useStandardOperatorParameters(type: string, options: gdParameterOptions): gdInstructionMetadata;
  useStandardRelationalOperatorParameters(type: string, options: gdParameterOptions): gdInstructionMetadata;
  setRequiresBaseObjectCapability(capability: string): gdInstructionMetadata;
  getRequiredBaseObjectCapability(): string;
  markAsSimple(): gdInstructionMetadata;
  markAsAdvanced(): gdInstructionMetadata;
  markAsComplex(): gdInstructionMetadata;
  getCodeExtraInformation(): gdInstructionMetadata;
  setFunctionName(functionName_: string): gdInstructionMetadata;
  setAsyncFunctionName(functionName_: string): gdInstructionMetadata;
  getFunctionName(): string;
  getAsyncFunctionName(): string;
  setManipulatedType(type_: string): gdInstructionMetadata;
  setGetter(getter: string): gdInstructionMetadata;
  setMutators(mutators: gdMapStringString): gdInstructionMetadata;
  setIncludeFile(includeFile: string): gdInstructionMetadata;
  addIncludeFile(includeFile: string): gdInstructionMetadata;
  getIncludeFiles(): gdVectorString;
  delete(): void;
  ptr: number;
};