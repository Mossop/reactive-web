/// <reference path="dom.d.ts" />

export type Booleanish = boolean | "true" | "false";

export interface HTMLAttributes<E extends HTMLElement = HTMLElement>
  extends AriaAttributes,
    DOMAttributes<E> {
  // Standard HTML Attributes
  accessKey?: string | undefined;
  className?: string | undefined;
  contentEditable?: Booleanish | "inherit" | undefined;
  contextMenu?: string | undefined;
  dir?: string | undefined;
  draggable?: Booleanish | undefined;
  hidden?: boolean | undefined;
  id?: string | undefined;
  lang?: string | undefined;
  placeholder?: string | undefined;
  slot?: string | undefined;
  spellCheck?: Booleanish | undefined;
  style?: unknown | undefined;
  tabIndex?: number | undefined;
  title?: string | undefined;
  translate?: "yes" | "no" | undefined;

  // Unknown
  radioGroup?: string | undefined; // <command>, <menuitem>

  // WAI-ARIA
  role?: AriaRole | undefined;

  // RDFa Attributes
  about?: string | undefined;
  datatype?: string | undefined;
  inlist?: any;
  prefix?: string | undefined;
  property?: string | undefined;
  resource?: string | undefined;
  typeof?: string | undefined;
  vocab?: string | undefined;

  // Non-standard Attributes
  autoCapitalize?: string | undefined;
  autoCorrect?: string | undefined;
  autoSave?: string | undefined;
  color?: string | undefined;
  itemProp?: string | undefined;
  itemScope?: boolean | undefined;
  itemType?: string | undefined;
  itemID?: string | undefined;
  itemRef?: string | undefined;
  results?: number | undefined;
  security?: string | undefined;
  unselectable?: "on" | "off" | undefined;

  // Living Standard
  /**
   * Hints at the type of data that might be entered by the user while editing the element or its contents
   * @see https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-inputmode-attribute
   */
  inputMode?:
    | "none"
    | "text"
    | "tel"
    | "url"
    | "email"
    | "numeric"
    | "decimal"
    | "search"
    | undefined;
  /**
   * Specify that a standard HTML element should behave like a defined custom built-in element
   * @see https://html.spec.whatwg.org/multipage/custom-elements.html#attr-is
   */
  is?: string | undefined;
}

export type TargetedEvent<E extends Event, L extends Element> = Omit<
  E,
  "target" | "currentTarget"
> & {
  target: L;
  currentTarget: L;
};

export type FormEvent = Event;
export type EventHandler<E extends Event = Event> = (event: E) => void;
export type TargetedEventHandler<E extends Event, L extends Element> = (
  event: TargetedEvent<E, L>,
) => void;

export interface DOMAttributes<E extends Element> {
  // Clipboard Events
  onCopy?: TargetedEventHandler<ClipboardEvent, E> | undefined;
  onCopyCapture?: TargetedEventHandler<ClipboardEvent, E> | undefined;
  onCut?: TargetedEventHandler<ClipboardEvent, E> | undefined;
  onCutCapture?: TargetedEventHandler<ClipboardEvent, E> | undefined;
  onPaste?: TargetedEventHandler<ClipboardEvent, E> | undefined;
  onPasteCapture?: TargetedEventHandler<ClipboardEvent, E> | undefined;

  // Composition Events
  onCompositionEnd?: TargetedEventHandler<CompositionEvent, E> | undefined;
  onCompositionEndCapture?:
    | TargetedEventHandler<CompositionEvent, E>
    | undefined;
  onCompositionStart?: TargetedEventHandler<CompositionEvent, E> | undefined;
  onCompositionStartCapture?:
    | TargetedEventHandler<CompositionEvent, E>
    | undefined;
  onCompositionUpdate?: TargetedEventHandler<CompositionEvent, E> | undefined;
  onCompositionUpdateCapture?:
    | TargetedEventHandler<CompositionEvent, E>
    | undefined;

  // Focus Events
  onFocus?: TargetedEventHandler<FocusEvent, E> | undefined;
  onFocusCapture?: TargetedEventHandler<FocusEvent, E> | undefined;
  onBlur?: TargetedEventHandler<FocusEvent, E> | undefined;
  onBlurCapture?: TargetedEventHandler<FocusEvent, E> | undefined;

  // Form Events
  onChange?: TargetedEventHandler<FormEvent, E> | undefined;
  onChangeCapture?: TargetedEventHandler<FormEvent, E> | undefined;
  onBeforeInput?: TargetedEventHandler<FormEvent, E> | undefined;
  onBeforeInputCapture?: TargetedEventHandler<FormEvent, E> | undefined;
  onInput?: TargetedEventHandler<FormEvent, E> | undefined;
  onInputCapture?: TargetedEventHandler<FormEvent, E> | undefined;
  onReset?: TargetedEventHandler<FormEvent, E> | undefined;
  onResetCapture?: TargetedEventHandler<FormEvent, E> | undefined;
  onSubmit?: TargetedEventHandler<FormEvent, E> | undefined;
  onSubmitCapture?: TargetedEventHandler<FormEvent, E> | undefined;
  onInvalid?: TargetedEventHandler<FormEvent, E> | undefined;
  onInvalidCapture?: TargetedEventHandler<FormEvent, E> | undefined;

  // Image Events
  onLoad?: EventHandler | undefined;
  onLoadCapture?: EventHandler | undefined;
  onError?: EventHandler | undefined; // also a Media Event
  onErrorCapture?: EventHandler | undefined; // also a Media Event

  // Keyboard Events
  onKeyDown?: TargetedEventHandler<KeyboardEvent, E> | undefined;
  onKeyDownCapture?: TargetedEventHandler<KeyboardEvent, E> | undefined;
  onKeyPress?: TargetedEventHandler<KeyboardEvent, E> | undefined;
  onKeyPressCapture?: TargetedEventHandler<KeyboardEvent, E> | undefined;
  onKeyUp?: TargetedEventHandler<KeyboardEvent, E> | undefined;
  onKeyUpCapture?: TargetedEventHandler<KeyboardEvent, E> | undefined;

  // Media Events
  onAbort?: EventHandler | undefined;
  onAbortCapture?: EventHandler | undefined;
  onCanPlay?: EventHandler | undefined;
  onCanPlayCapture?: EventHandler | undefined;
  onCanPlayThrough?: EventHandler | undefined;
  onCanPlayThroughCapture?: EventHandler | undefined;
  onDurationChange?: EventHandler | undefined;
  onDurationChangeCapture?: EventHandler | undefined;
  onEmptied?: EventHandler | undefined;
  onEmptiedCapture?: EventHandler | undefined;
  onEncrypted?: EventHandler | undefined;
  onEncryptedCapture?: EventHandler | undefined;
  onEnded?: EventHandler | undefined;
  onEndedCapture?: EventHandler | undefined;
  onLoadedData?: EventHandler | undefined;
  onLoadedDataCapture?: EventHandler | undefined;
  onLoadedMetadata?: EventHandler | undefined;
  onLoadedMetadataCapture?: EventHandler | undefined;
  onLoadStart?: EventHandler | undefined;
  onLoadStartCapture?: EventHandler | undefined;
  onPause?: EventHandler | undefined;
  onPauseCapture?: EventHandler | undefined;
  onPlay?: EventHandler | undefined;
  onPlayCapture?: EventHandler | undefined;
  onPlaying?: EventHandler | undefined;
  onPlayingCapture?: EventHandler | undefined;
  onProgress?: EventHandler | undefined;
  onProgressCapture?: EventHandler | undefined;
  onRateChange?: EventHandler | undefined;
  onRateChangeCapture?: EventHandler | undefined;
  onSeeked?: EventHandler | undefined;
  onSeekedCapture?: EventHandler | undefined;
  onSeeking?: EventHandler | undefined;
  onSeekingCapture?: EventHandler | undefined;
  onStalled?: EventHandler | undefined;
  onStalledCapture?: EventHandler | undefined;
  onSuspend?: EventHandler | undefined;
  onSuspendCapture?: EventHandler | undefined;
  onTimeUpdate?: EventHandler | undefined;
  onTimeUpdateCapture?: EventHandler | undefined;
  onVolumeChange?: EventHandler | undefined;
  onVolumeChangeCapture?: EventHandler | undefined;
  onWaiting?: EventHandler | undefined;
  onWaitingCapture?: EventHandler | undefined;

  // MouseEvents
  onAuxClick?: TargetedEventHandler<MouseEvent, E> | undefined;
  onAuxClickCapture?: TargetedEventHandler<MouseEvent, E> | undefined;
  onClick?: TargetedEventHandler<MouseEvent, E> | undefined;
  onClickCapture?: TargetedEventHandler<MouseEvent, E> | undefined;
  onContextMenu?: TargetedEventHandler<MouseEvent, E> | undefined;
  onContextMenuCapture?: TargetedEventHandler<MouseEvent, E> | undefined;
  onDoubleClick?: TargetedEventHandler<MouseEvent, E> | undefined;
  onDoubleClickCapture?: TargetedEventHandler<MouseEvent, E> | undefined;
  onDrag?: TargetedEventHandler<DragEvent, E> | undefined;
  onDragCapture?: TargetedEventHandler<DragEvent, E> | undefined;
  onDragEnd?: TargetedEventHandler<DragEvent, E> | undefined;
  onDragEndCapture?: TargetedEventHandler<DragEvent, E> | undefined;
  onDragEnter?: TargetedEventHandler<DragEvent, E> | undefined;
  onDragEnterCapture?: TargetedEventHandler<DragEvent, E> | undefined;
  onDragExit?: TargetedEventHandler<DragEvent, E> | undefined;
  onDragExitCapture?: TargetedEventHandler<DragEvent, E> | undefined;
  onDragLeave?: TargetedEventHandler<DragEvent, E> | undefined;
  onDragLeaveCapture?: TargetedEventHandler<DragEvent, E> | undefined;
  onDragOver?: TargetedEventHandler<DragEvent, E> | undefined;
  onDragOverCapture?: TargetedEventHandler<DragEvent, E> | undefined;
  onDragStart?: TargetedEventHandler<DragEvent, E> | undefined;
  onDragStartCapture?: TargetedEventHandler<DragEvent, E> | undefined;
  onDrop?: TargetedEventHandler<DragEvent, E> | undefined;
  onDropCapture?: TargetedEventHandler<DragEvent, E> | undefined;
  onMouseDown?: TargetedEventHandler<MouseEvent, E> | undefined;
  onMouseDownCapture?: TargetedEventHandler<MouseEvent, E> | undefined;
  onMouseEnter?: TargetedEventHandler<MouseEvent, E> | undefined;
  onMouseLeave?: TargetedEventHandler<MouseEvent, E> | undefined;
  onMouseMove?: TargetedEventHandler<MouseEvent, E> | undefined;
  onMouseMoveCapture?: TargetedEventHandler<MouseEvent, E> | undefined;
  onMouseOut?: TargetedEventHandler<MouseEvent, E> | undefined;
  onMouseOutCapture?: TargetedEventHandler<MouseEvent, E> | undefined;
  onMouseOver?: TargetedEventHandler<MouseEvent, E> | undefined;
  onMouseOverCapture?: TargetedEventHandler<MouseEvent, E> | undefined;
  onMouseUp?: TargetedEventHandler<MouseEvent, E> | undefined;
  onMouseUpCapture?: TargetedEventHandler<MouseEvent, E> | undefined;

  // Selection Events
  onSelect?: EventHandler | undefined;
  onSelectCapture?: EventHandler | undefined;

  // Touch Events
  onTouchCancel?: TargetedEventHandler<TouchEvent, E> | undefined;
  onTouchCancelCapture?: TargetedEventHandler<TouchEvent, E> | undefined;
  onTouchEnd?: TargetedEventHandler<TouchEvent, E> | undefined;
  onTouchEndCapture?: TargetedEventHandler<TouchEvent, E> | undefined;
  onTouchMove?: TargetedEventHandler<TouchEvent, E> | undefined;
  onTouchMoveCapture?: TargetedEventHandler<TouchEvent, E> | undefined;
  onTouchStart?: TargetedEventHandler<TouchEvent, E> | undefined;
  onTouchStartCapture?: TargetedEventHandler<TouchEvent, E> | undefined;

  // Pointer Events
  onPointerDown?: TargetedEventHandler<PointerEvent, E> | undefined;
  onPointerDownCapture?: TargetedEventHandler<PointerEvent, E> | undefined;
  onPointerMove?: TargetedEventHandler<PointerEvent, E> | undefined;
  onPointerMoveCapture?: TargetedEventHandler<PointerEvent, E> | undefined;
  onPointerUp?: TargetedEventHandler<PointerEvent, E> | undefined;
  onPointerUpCapture?: TargetedEventHandler<PointerEvent, E> | undefined;
  onPointerCancel?: TargetedEventHandler<PointerEvent, E> | undefined;
  onPointerCancelCapture?: TargetedEventHandler<PointerEvent, E> | undefined;
  onPointerEnter?: TargetedEventHandler<PointerEvent, E> | undefined;
  onPointerEnterCapture?: TargetedEventHandler<PointerEvent, E> | undefined;
  onPointerLeave?: TargetedEventHandler<PointerEvent, E> | undefined;
  onPointerLeaveCapture?: TargetedEventHandler<PointerEvent, E> | undefined;
  onPointerOver?: TargetedEventHandler<PointerEvent, E> | undefined;
  onPointerOverCapture?: TargetedEventHandler<PointerEvent, E> | undefined;
  onPointerOut?: TargetedEventHandler<PointerEvent, E> | undefined;
  onPointerOutCapture?: TargetedEventHandler<PointerEvent, E> | undefined;
  onGotPointerCapture?: TargetedEventHandler<PointerEvent, E> | undefined;
  onGotPointerCaptureCapture?:
    | TargetedEventHandler<PointerEvent, E>
    | undefined;
  onLostPointerCapture?: TargetedEventHandler<PointerEvent, E> | undefined;
  onLostPointerCaptureCapture?:
    | TargetedEventHandler<PointerEvent, E>
    | undefined;

  // UI Events
  onScroll?: TargetedEventHandler<UIEvent, E> | undefined;
  onScrollCapture?: TargetedEventHandler<UIEvent, E> | undefined;

  // Wheel Events
  onWheel?: TargetedEventHandler<WheelEvent, E> | undefined;
  onWheelCapture?: TargetedEventHandler<WheelEvent, E> | undefined;

  // Animation Events
  onAnimationStart?: TargetedEventHandler<AnimationEvent, E> | undefined;
  onAnimationStartCapture?: TargetedEventHandler<AnimationEvent, E> | undefined;
  onAnimationEnd?: TargetedEventHandler<AnimationEvent, E> | undefined;
  onAnimationEndCapture?: TargetedEventHandler<AnimationEvent, E> | undefined;
  onAnimationIteration?: TargetedEventHandler<AnimationEvent, E> | undefined;
  onAnimationIterationCapture?:
    | TargetedEventHandler<AnimationEvent, E>
    | undefined;

  // Transition Events
  onTransitionEnd?: TargetedEventHandler<TransitionEvent, E> | undefined;
  onTransitionEndCapture?: TargetedEventHandler<TransitionEvent, E> | undefined;
}

// All the WAI-ARIA 1.1 attributes from https://www.w3.org/TR/wai-aria-1.1/
export interface AriaAttributes {
  /** Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application. */
  "aria-activedescendant"?: string | undefined;
  /** Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute. */
  "aria-atomic"?: Booleanish | undefined;
  /**
   * Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be
   * presented if they are made.
   */
  "aria-autocomplete"?: "none" | "inline" | "list" | "both" | undefined;
  /** Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user. */
  "aria-busy"?: Booleanish | undefined;
  /**
   * Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.
   * @see aria-pressed @see aria-selected.
   */
  "aria-checked"?: boolean | "false" | "mixed" | "true" | undefined;
  /**
   * Defines the total number of columns in a table, grid, or treegrid.
   * @see aria-colindex.
   */
  "aria-colcount"?: number | undefined;
  /**
   * Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.
   * @see aria-colcount @see aria-colspan.
   */
  "aria-colindex"?: number | undefined;
  /**
   * Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.
   * @see aria-colindex @see aria-rowspan.
   */
  "aria-colspan"?: number | undefined;
  /**
   * Identifies the element (or elements) whose contents or presence are controlled by the current element.
   * @see aria-owns.
   */
  "aria-controls"?: string | undefined;
  /** Indicates the element that represents the current item within a container or set of related elements. */
  "aria-current"?:
    | boolean
    | "false"
    | "true"
    | "page"
    | "step"
    | "location"
    | "date"
    | "time"
    | undefined;
  /**
   * Identifies the element (or elements) that describes the object.
   * @see aria-labelledby
   */
  "aria-describedby"?: string | undefined;
  /**
   * Identifies the element that provides a detailed, extended description for the object.
   * @see aria-describedby.
   */
  "aria-details"?: string | undefined;
  /**
   * Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.
   * @see aria-hidden @see aria-readonly.
   */
  "aria-disabled"?: Booleanish | undefined;
  /**
   * Indicates what functions can be performed when a dragged object is released on the drop target.
   * @deprecated in ARIA 1.1
   */
  "aria-dropeffect"?:
    | "none"
    | "copy"
    | "execute"
    | "link"
    | "move"
    | "popup"
    | undefined;
  /**
   * Identifies the element that provides an error message for the object.
   * @see aria-invalid @see aria-describedby.
   */
  "aria-errormessage"?: string | undefined;
  /** Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed. */
  "aria-expanded"?: Booleanish | undefined;
  /**
   * Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,
   * allows assistive technology to override the general default of reading in document source order.
   */
  "aria-flowto"?: string | undefined;
  /**
   * Indicates an element's "grabbed" state in a drag-and-drop operation.
   * @deprecated in ARIA 1.1
   */
  "aria-grabbed"?: Booleanish | undefined;
  /** Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element. */
  "aria-haspopup"?:
    | boolean
    | "false"
    | "true"
    | "menu"
    | "listbox"
    | "tree"
    | "grid"
    | "dialog"
    | undefined;
  /**
   * Indicates whether the element is exposed to an accessibility API.
   * @see aria-disabled.
   */
  "aria-hidden"?: Booleanish | undefined;
  /**
   * Indicates the entered value does not conform to the format expected by the application.
   * @see aria-errormessage.
   */
  "aria-invalid"?:
    | boolean
    | "false"
    | "true"
    | "grammar"
    | "spelling"
    | undefined;
  /** Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element. */
  "aria-keyshortcuts"?: string | undefined;
  /**
   * Defines a string value that labels the current element.
   * @see aria-labelledby.
   */
  "aria-label"?: string | undefined;
  /**
   * Identifies the element (or elements) that labels the current element.
   * @see aria-describedby.
   */
  "aria-labelledby"?: string | undefined;
  /** Defines the hierarchical level of an element within a structure. */
  "aria-level"?: number | undefined;
  /** Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region. */
  "aria-live"?: "off" | "assertive" | "polite" | undefined;
  /** Indicates whether an element is modal when displayed. */
  "aria-modal"?: Booleanish | undefined;
  /** Indicates whether a text box accepts multiple lines of input or only a single line. */
  "aria-multiline"?: Booleanish | undefined;
  /** Indicates that the user may select more than one item from the current selectable descendants. */
  "aria-multiselectable"?: Booleanish | undefined;
  /** Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous. */
  "aria-orientation"?: "horizontal" | "vertical" | undefined;
  /**
   * Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship
   * between DOM elements where the DOM hierarchy cannot be used to represent the relationship.
   * @see aria-controls.
   */
  "aria-owns"?: string | undefined;
  /**
   * Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.
   * A hint could be a sample value or a brief description of the expected format.
   */
  "aria-placeholder"?: string | undefined;
  /**
   * Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.
   * @see aria-setsize.
   */
  "aria-posinset"?: number | undefined;
  /**
   * Indicates the current "pressed" state of toggle buttons.
   * @see aria-checked @see aria-selected.
   */
  "aria-pressed"?: boolean | "false" | "mixed" | "true" | undefined;
  /**
   * Indicates that the element is not editable, but is otherwise operable.
   * @see aria-disabled.
   */
  "aria-readonly"?: Booleanish | undefined;
  /**
   * Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.
   * @see aria-atomic.
   */
  "aria-relevant"?:
    | "additions"
    | "additions removals"
    | "additions text"
    | "all"
    | "removals"
    | "removals additions"
    | "removals text"
    | "text"
    | "text additions"
    | "text removals"
    | undefined;
  /** Indicates that user input is required on the element before a form may be submitted. */
  "aria-required"?: Booleanish | undefined;
  /** Defines a human-readable, author-localized description for the role of an element. */
  "aria-roledescription"?: string | undefined;
  /**
   * Defines the total number of rows in a table, grid, or treegrid.
   * @see aria-rowindex.
   */
  "aria-rowcount"?: number | undefined;
  /**
   * Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.
   * @see aria-rowcount @see aria-rowspan.
   */
  "aria-rowindex"?: number | undefined;
  /**
   * Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.
   * @see aria-rowindex @see aria-colspan.
   */
  "aria-rowspan"?: number | undefined;
  /**
   * Indicates the current "selected" state of various widgets.
   * @see aria-checked @see aria-pressed.
   */
  "aria-selected"?: Booleanish | undefined;
  /**
   * Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.
   * @see aria-posinset.
   */
  "aria-setsize"?: number | undefined;
  /** Indicates if items in a table or grid are sorted in ascending or descending order. */
  "aria-sort"?: "none" | "ascending" | "descending" | "other" | undefined;
  /** Defines the maximum allowed value for a range widget. */
  "aria-valuemax"?: number | undefined;
  /** Defines the minimum allowed value for a range widget. */
  "aria-valuemin"?: number | undefined;
  /**
   * Defines the current value for a range widget.
   * @see aria-valuetext.
   */
  "aria-valuenow"?: number | undefined;
  /** Defines the human readable text alternative of aria-valuenow for a range widget. */
  "aria-valuetext"?: string | undefined;
}

// All the WAI-ARIA 1.1 role attribute values from https://www.w3.org/TR/wai-aria-1.1/#role_definitions
export type AriaRole =
  | "alert"
  | "alertdialog"
  | "application"
  | "article"
  | "banner"
  | "button"
  | "cell"
  | "checkbox"
  | "columnheader"
  | "combobox"
  | "complementary"
  | "contentinfo"
  | "definition"
  | "dialog"
  | "directory"
  | "document"
  | "feed"
  | "figure"
  | "form"
  | "grid"
  | "gridcell"
  | "group"
  | "heading"
  | "img"
  | "link"
  | "list"
  | "listbox"
  | "listitem"
  | "log"
  | "main"
  | "marquee"
  | "math"
  | "menu"
  | "menubar"
  | "menuitem"
  | "menuitemcheckbox"
  | "menuitemradio"
  | "navigation"
  | "none"
  | "note"
  | "option"
  | "presentation"
  | "progressbar"
  | "radio"
  | "radiogroup"
  | "region"
  | "row"
  | "rowgroup"
  | "rowheader"
  | "scrollbar"
  | "search"
  | "searchbox"
  | "separator"
  | "slider"
  | "spinbutton"
  | "status"
  | "switch"
  | "tab"
  | "table"
  | "tablist"
  | "tabpanel"
  | "term"
  | "textbox"
  | "timer"
  | "toolbar"
  | "tooltip"
  | "tree"
  | "treegrid"
  | "treeitem"
  | (string & {});

export interface SVGAttributes<E extends Element>
  extends AriaAttributes,
    DOMAttributes<E> {
  // Attributes which also defined in HTMLAttributes
  // See comment in SVGDOMPropertyConfig.js
  className?: string | undefined;
  color?: string | undefined;
  height?: number | string | undefined;
  id?: string | undefined;
  lang?: string | undefined;
  max?: number | string | undefined;
  media?: string | undefined;
  method?: string | undefined;
  min?: number | string | undefined;
  name?: string | undefined;
  style?: unknown | undefined;
  target?: string | undefined;
  type?: string | undefined;
  width?: number | string | undefined;

  // Other HTML properties supported by SVG elements in browsers
  role?: AriaRole | undefined;
  tabIndex?: number | undefined;
  crossOrigin?: "anonymous" | "use-credentials" | "" | undefined;

  // SVG Specific attributes
  accentHeight?: number | string | undefined;
  accumulate?: "none" | "sum" | undefined;
  additive?: "replace" | "sum" | undefined;
  alignmentBaseline?:
    | "auto"
    | "baseline"
    | "before-edge"
    | "text-before-edge"
    | "middle"
    | "central"
    | "after-edge"
    | "text-after-edge"
    | "ideographic"
    | "alphabetic"
    | "hanging"
    | "mathematical"
    | "inherit"
    | undefined;
  allowReorder?: "no" | "yes" | undefined;
  alphabetic?: number | string | undefined;
  amplitude?: number | string | undefined;
  arabicForm?: "initial" | "medial" | "terminal" | "isolated" | undefined;
  ascent?: number | string | undefined;
  attributeName?: string | undefined;
  attributeType?: string | undefined;
  autoReverse?: Booleanish | undefined;
  azimuth?: number | string | undefined;
  baseFrequency?: number | string | undefined;
  baselineShift?: number | string | undefined;
  baseProfile?: number | string | undefined;
  bbox?: number | string | undefined;
  begin?: number | string | undefined;
  bias?: number | string | undefined;
  by?: number | string | undefined;
  calcMode?: number | string | undefined;
  capHeight?: number | string | undefined;
  clip?: number | string | undefined;
  clipPath?: string | undefined;
  clipPathUnits?: number | string | undefined;
  clipRule?: number | string | undefined;
  colorInterpolation?: number | string | undefined;
  colorInterpolationFilters?:
    | "auto"
    | "sRGB"
    | "linearRGB"
    | "inherit"
    | undefined;
  colorProfile?: number | string | undefined;
  colorRendering?: number | string | undefined;
  contentScriptType?: number | string | undefined;
  contentStyleType?: number | string | undefined;
  cursor?: number | string | undefined;
  cx?: number | string | undefined;
  cy?: number | string | undefined;
  d?: string | undefined;
  decelerate?: number | string | undefined;
  descent?: number | string | undefined;
  diffuseConstant?: number | string | undefined;
  direction?: number | string | undefined;
  display?: number | string | undefined;
  divisor?: number | string | undefined;
  dominantBaseline?: number | string | undefined;
  dur?: number | string | undefined;
  dx?: number | string | undefined;
  dy?: number | string | undefined;
  edgeMode?: number | string | undefined;
  elevation?: number | string | undefined;
  enableBackground?: number | string | undefined;
  end?: number | string | undefined;
  exponent?: number | string | undefined;
  externalResourcesRequired?: Booleanish | undefined;
  fill?: string | undefined;
  fillOpacity?: number | string | undefined;
  fillRule?: "nonzero" | "evenodd" | "inherit" | undefined;
  filter?: string | undefined;
  filterRes?: number | string | undefined;
  filterUnits?: number | string | undefined;
  floodColor?: number | string | undefined;
  floodOpacity?: number | string | undefined;
  focusable?: Booleanish | "auto" | undefined;
  fontFamily?: string | undefined;
  fontSize?: number | string | undefined;
  fontSizeAdjust?: number | string | undefined;
  fontStretch?: number | string | undefined;
  fontStyle?: number | string | undefined;
  fontVariant?: number | string | undefined;
  fontWeight?: number | string | undefined;
  format?: number | string | undefined;
  from?: number | string | undefined;
  fx?: number | string | undefined;
  fy?: number | string | undefined;
  g1?: number | string | undefined;
  g2?: number | string | undefined;
  glyphName?: number | string | undefined;
  glyphOrientationHorizontal?: number | string | undefined;
  glyphOrientationVertical?: number | string | undefined;
  glyphRef?: number | string | undefined;
  gradientTransform?: string | undefined;
  gradientUnits?: string | undefined;
  hanging?: number | string | undefined;
  horizAdvX?: number | string | undefined;
  horizOriginX?: number | string | undefined;
  href?: string | undefined;
  ideographic?: number | string | undefined;
  imageRendering?: number | string | undefined;
  in2?: number | string | undefined;
  in?: string | undefined;
  intercept?: number | string | undefined;
  k1?: number | string | undefined;
  k2?: number | string | undefined;
  k3?: number | string | undefined;
  k4?: number | string | undefined;
  k?: number | string | undefined;
  kernelMatrix?: number | string | undefined;
  kernelUnitLength?: number | string | undefined;
  kerning?: number | string | undefined;
  keyPoints?: number | string | undefined;
  keySplines?: number | string | undefined;
  keyTimes?: number | string | undefined;
  lengthAdjust?: number | string | undefined;
  letterSpacing?: number | string | undefined;
  lightingColor?: number | string | undefined;
  limitingConeAngle?: number | string | undefined;
  local?: number | string | undefined;
  markerEnd?: string | undefined;
  markerHeight?: number | string | undefined;
  markerMid?: string | undefined;
  markerStart?: string | undefined;
  markerUnits?: number | string | undefined;
  markerWidth?: number | string | undefined;
  mask?: string | undefined;
  maskContentUnits?: number | string | undefined;
  maskUnits?: number | string | undefined;
  mathematical?: number | string | undefined;
  mode?: number | string | undefined;
  numOctaves?: number | string | undefined;
  offset?: number | string | undefined;
  opacity?: number | string | undefined;
  operator?: number | string | undefined;
  order?: number | string | undefined;
  orient?: number | string | undefined;
  orientation?: number | string | undefined;
  origin?: number | string | undefined;
  overflow?: number | string | undefined;
  overlinePosition?: number | string | undefined;
  overlineThickness?: number | string | undefined;
  paintOrder?: number | string | undefined;
  panose1?: number | string | undefined;
  path?: string | undefined;
  pathLength?: number | string | undefined;
  patternContentUnits?: string | undefined;
  patternTransform?: number | string | undefined;
  patternUnits?: string | undefined;
  pointerEvents?: number | string | undefined;
  points?: string | undefined;
  pointsAtX?: number | string | undefined;
  pointsAtY?: number | string | undefined;
  pointsAtZ?: number | string | undefined;
  preserveAlpha?: Booleanish | undefined;
  preserveAspectRatio?: string | undefined;
  primitiveUnits?: number | string | undefined;
  r?: number | string | undefined;
  radius?: number | string | undefined;
  refX?: number | string | undefined;
  refY?: number | string | undefined;
  renderingIntent?: number | string | undefined;
  repeatCount?: number | string | undefined;
  repeatDur?: number | string | undefined;
  requiredExtensions?: number | string | undefined;
  requiredFeatures?: number | string | undefined;
  restart?: number | string | undefined;
  result?: string | undefined;
  rotate?: number | string | undefined;
  rx?: number | string | undefined;
  ry?: number | string | undefined;
  scale?: number | string | undefined;
  seed?: number | string | undefined;
  shapeRendering?: number | string | undefined;
  slope?: number | string | undefined;
  spacing?: number | string | undefined;
  specularConstant?: number | string | undefined;
  specularExponent?: number | string | undefined;
  speed?: number | string | undefined;
  spreadMethod?: string | undefined;
  startOffset?: number | string | undefined;
  stdDeviation?: number | string | undefined;
  stemh?: number | string | undefined;
  stemv?: number | string | undefined;
  stitchTiles?: number | string | undefined;
  stopColor?: string | undefined;
  stopOpacity?: number | string | undefined;
  strikethroughPosition?: number | string | undefined;
  strikethroughThickness?: number | string | undefined;
  string?: number | string | undefined;
  stroke?: string | undefined;
  strokeDasharray?: string | number | undefined;
  strokeDashoffset?: string | number | undefined;
  strokeLinecap?: "butt" | "round" | "square" | "inherit" | undefined;
  strokeLinejoin?: "miter" | "round" | "bevel" | "inherit" | undefined;
  strokeMiterlimit?: number | string | undefined;
  strokeOpacity?: number | string | undefined;
  strokeWidth?: number | string | undefined;
  surfaceScale?: number | string | undefined;
  systemLanguage?: number | string | undefined;
  tableValues?: number | string | undefined;
  targetX?: number | string | undefined;
  targetY?: number | string | undefined;
  textAnchor?: string | undefined;
  textDecoration?: number | string | undefined;
  textLength?: number | string | undefined;
  textRendering?: number | string | undefined;
  to?: number | string | undefined;
  transform?: string | undefined;
  u1?: number | string | undefined;
  u2?: number | string | undefined;
  underlinePosition?: number | string | undefined;
  underlineThickness?: number | string | undefined;
  unicode?: number | string | undefined;
  unicodeBidi?: number | string | undefined;
  unicodeRange?: number | string | undefined;
  unitsPerEm?: number | string | undefined;
  vAlphabetic?: number | string | undefined;
  values?: string | undefined;
  vectorEffect?: number | string | undefined;
  version?: string | undefined;
  vertAdvY?: number | string | undefined;
  vertOriginX?: number | string | undefined;
  vertOriginY?: number | string | undefined;
  vHanging?: number | string | undefined;
  vIdeographic?: number | string | undefined;
  viewBox?: string | undefined;
  viewTarget?: number | string | undefined;
  visibility?: number | string | undefined;
  vMathematical?: number | string | undefined;
  widths?: number | string | undefined;
  wordSpacing?: number | string | undefined;
  writingMode?: number | string | undefined;
  x1?: number | string | undefined;
  x2?: number | string | undefined;
  x?: number | string | undefined;
  xChannelSelector?: string | undefined;
  xHeight?: number | string | undefined;
  xlinkActuate?: string | undefined;
  xlinkArcrole?: string | undefined;
  xlinkHref?: string | undefined;
  xlinkRole?: string | undefined;
  xlinkShow?: string | undefined;
  xlinkTitle?: string | undefined;
  xlinkType?: string | undefined;
  xmlBase?: string | undefined;
  xmlLang?: string | undefined;
  xmlns?: string | undefined;
  xmlnsXlink?: string | undefined;
  xmlSpace?: string | undefined;
  y1?: number | string | undefined;
  y2?: number | string | undefined;
  y?: number | string | undefined;
  yChannelSelector?: string | undefined;
  z?: number | string | undefined;
  zoomAndPan?: string | undefined;
}

export type HTMLAttributeReferrerPolicy =
  | ""
  | "no-referrer"
  | "no-referrer-when-downgrade"
  | "origin"
  | "origin-when-cross-origin"
  | "same-origin"
  | "strict-origin"
  | "strict-origin-when-cross-origin"
  | "unsafe-url";

export type HTMLAttributeAnchorTarget =
  | "_self"
  | "_blank"
  | "_parent"
  | "_top"
  | (string & {});

export interface AnchorHTMLAttributes
  extends HTMLAttributes<HTMLAnchorElement> {
  download?: any;
  href?: string | undefined;
  hrefLang?: string | undefined;
  media?: string | undefined;
  ping?: string | undefined;
  rel?: string | undefined;
  target?: HTMLAttributeAnchorTarget | undefined;
  type?: string | undefined;
  referrerPolicy?: HTMLAttributeReferrerPolicy | undefined;
}

export interface AudioHTMLAttributes
  extends MediaHTMLAttributes<HTMLAudioElement> {}

export interface AreaHTMLAttributes extends HTMLAttributes<HTMLAreaElement> {
  alt?: string | undefined;
  coords?: string | undefined;
  download?: any;
  href?: string | undefined;
  hrefLang?: string | undefined;
  media?: string | undefined;
  referrerPolicy?: HTMLAttributeReferrerPolicy | undefined;
  rel?: string | undefined;
  shape?: string | undefined;
  target?: string | undefined;
}

export interface BaseHTMLAttributes extends HTMLAttributes<HTMLBaseElement> {
  href?: string | undefined;
  target?: string | undefined;
}

export interface BlockquoteHTMLAttributes
  extends HTMLAttributes<HTMLBlockquoteElement> {
  cite?: string | undefined;
}

export interface ButtonHTMLAttributes
  extends HTMLAttributes<HTMLButtonElement> {
  autoFocus?: boolean | undefined;
  disabled?: boolean | undefined;
  form?: string | undefined;
  formAction?: string | undefined;
  formEncType?: string | undefined;
  formMethod?: string | undefined;
  formNoValidate?: boolean | undefined;
  formTarget?: string | undefined;
  name?: string | undefined;
  type?: "submit" | "reset" | "button" | undefined;
  value?: string | ReadonlyArray<string> | number | undefined;
}

export interface CanvasHTMLAttributes
  extends HTMLAttributes<HTMLCanvasElement> {
  height?: number | string | undefined;
  width?: number | string | undefined;
}

export interface ColHTMLAttributes extends HTMLAttributes<HTMLColElement> {
  span?: number | undefined;
  width?: number | string | undefined;
}

export interface ColgroupHTMLAttributes
  extends HTMLAttributes<HTMLColgroupElement> {
  span?: number | undefined;
}

export interface DataHTMLAttributes extends HTMLAttributes<HTMLDataElement> {
  value?: string | ReadonlyArray<string> | number | undefined;
}

export interface DetailsHTMLAttributes
  extends HTMLAttributes<HTMLDetailsElement> {
  open?: boolean | undefined;
  onToggle?: EventHandler | undefined;
}

export interface DelHTMLAttributes extends HTMLAttributes<HTMLDelElement> {
  cite?: string | undefined;
  dateTime?: string | undefined;
}

export interface DialogHTMLAttributes
  extends HTMLAttributes<HTMLDialogElement> {
  open?: boolean | undefined;
}

export interface EmbedHTMLAttributes extends HTMLAttributes<HTMLEmbedElement> {
  height?: number | string | undefined;
  src?: string | undefined;
  type?: string | undefined;
  width?: number | string | undefined;
}

export interface FieldsetHTMLAttributes
  extends HTMLAttributes<HTMLFieldsetElement> {
  disabled?: boolean | undefined;
  form?: string | undefined;
  name?: string | undefined;
}

export interface FormHTMLAttributes extends HTMLAttributes<HTMLFormElement> {
  acceptCharset?: string | undefined;
  action?: string | undefined;
  autoComplete?: string | undefined;
  encType?: string | undefined;
  method?: string | undefined;
  name?: string | undefined;
  noValidate?: boolean | undefined;
  target?: string | undefined;
}

export interface HtmlHTMLAttributes extends HTMLAttributes<HTMLHtmlElement> {
  manifest?: string | undefined;
}

export interface IframeHTMLAttributes
  extends HTMLAttributes<HTMLIframeElement> {
  allow?: string | undefined;
  allowFullScreen?: boolean | undefined;
  allowTransparency?: boolean | undefined;
  /** @deprecated */
  frameBorder?: number | string | undefined;
  height?: number | string | undefined;
  loading?: "eager" | "lazy" | undefined;
  /** @deprecated */
  marginHeight?: number | undefined;
  /** @deprecated */
  marginWidth?: number | undefined;
  name?: string | undefined;
  referrerPolicy?: HTMLAttributeReferrerPolicy | undefined;
  sandbox?: string | undefined;
  /** @deprecated */
  scrolling?: string | undefined;
  seamless?: boolean | undefined;
  src?: string | undefined;
  srcDoc?: string | undefined;
  width?: number | string | undefined;
}

export interface ImgHTMLAttributes extends HTMLAttributes<HTMLImgElement> {
  alt?: string | undefined;
  crossOrigin?: "anonymous" | "use-credentials" | "" | undefined;
  decoding?: "async" | "auto" | "sync" | undefined;
  height?: number | string | undefined;
  loading?: "eager" | "lazy" | undefined;
  referrerPolicy?: HTMLAttributeReferrerPolicy | undefined;
  sizes?: string | undefined;
  src?: string | undefined;
  srcSet?: string | undefined;
  useMap?: string | undefined;
  width?: number | string | undefined;
}

export interface InsHTMLAttributes extends HTMLAttributes<HTMLInsElement> {
  cite?: string | undefined;
  dateTime?: string | undefined;
}

export type HTMLInputTypeAttribute =
  | "button"
  | "checkbox"
  | "color"
  | "date"
  | "datetime-local"
  | "email"
  | "file"
  | "hidden"
  | "image"
  | "month"
  | "number"
  | "password"
  | "radio"
  | "range"
  | "reset"
  | "search"
  | "submit"
  | "tel"
  | "text"
  | "time"
  | "url"
  | "week"
  | (string & {});

export interface InputHTMLAttributes extends HTMLAttributes<HTMLInputElement> {
  accept?: string | undefined;
  alt?: string | undefined;
  autoComplete?: string | undefined;
  autoFocus?: boolean | undefined;
  capture?: boolean | "user" | "environment" | undefined; // https://www.w3.org/TR/html-media-capture/#the-capture-attribute
  checked?: boolean | undefined;
  crossOrigin?: string | undefined;
  disabled?: boolean | undefined;
  enterKeyHint?:
    | "enter"
    | "done"
    | "go"
    | "next"
    | "previous"
    | "search"
    | "send"
    | undefined;
  form?: string | undefined;
  formAction?: string | undefined;
  formEncType?: string | undefined;
  formMethod?: string | undefined;
  formNoValidate?: boolean | undefined;
  formTarget?: string | undefined;
  height?: number | string | undefined;
  list?: string | undefined;
  max?: number | string | undefined;
  maxLength?: number | undefined;
  min?: number | string | undefined;
  minLength?: number | undefined;
  multiple?: boolean | undefined;
  name?: string | undefined;
  pattern?: string | undefined;
  placeholder?: string | undefined;
  readOnly?: boolean | undefined;
  required?: boolean | undefined;
  size?: number | undefined;
  src?: string | undefined;
  step?: number | string | undefined;
  type?: HTMLInputTypeAttribute | undefined;
  value?: string | ReadonlyArray<string> | number | undefined;
  width?: number | string | undefined;

  onChange?: EventHandler | undefined;
}

export interface KeygenHTMLAttributes
  extends HTMLAttributes<HTMLKeygenElement> {
  autoFocus?: boolean | undefined;
  challenge?: string | undefined;
  disabled?: boolean | undefined;
  form?: string | undefined;
  keyType?: string | undefined;
  keyParams?: string | undefined;
  name?: string | undefined;
}

export interface LabelHTMLAttributes extends HTMLAttributes<HTMLLabelElement> {
  form?: string | undefined;
  htmlFor?: string | undefined;
}

export interface LiHTMLAttributes extends HTMLAttributes<HTMLLiElement> {
  value?: string | ReadonlyArray<string> | number | undefined;
}

export interface LinkHTMLAttributes extends HTMLAttributes<HTMLLinkElement> {
  as?: string | undefined;
  crossOrigin?: string | undefined;
  href?: string | undefined;
  hrefLang?: string | undefined;
  integrity?: string | undefined;
  media?: string | undefined;
  referrerPolicy?: HTMLAttributeReferrerPolicy | undefined;
  rel?: string | undefined;
  sizes?: string | undefined;
  type?: string | undefined;
  charSet?: string | undefined;
}

export interface MapHTMLAttributes extends HTMLAttributes<HTMLMapElement> {
  name?: string | undefined;
}

export interface MenuHTMLAttributes extends HTMLAttributes<HTMLMenuElement> {
  type?: string | undefined;
}

export interface MediaHTMLAttributes<E extends Element>
  extends HTMLAttributes<E> {
  autoPlay?: boolean | undefined;
  controls?: boolean | undefined;
  controlsList?: string | undefined;
  crossOrigin?: string | undefined;
  loop?: boolean | undefined;
  mediaGroup?: string | undefined;
  muted?: boolean | undefined;
  playsInline?: boolean | undefined;
  preload?: string | undefined;
  src?: string | undefined;
}

export interface MetaHTMLAttributes extends HTMLAttributes<HTMLMetaElement> {
  charSet?: string | undefined;
  content?: string | undefined;
  httpEquiv?: string | undefined;
  name?: string | undefined;
  media?: string | undefined;
}

export interface MeterHTMLAttributes extends HTMLAttributes<HTMLMeterElement> {
  form?: string | undefined;
  high?: number | undefined;
  low?: number | undefined;
  max?: number | string | undefined;
  min?: number | string | undefined;
  optimum?: number | undefined;
  value?: string | ReadonlyArray<string> | number | undefined;
}

export interface QuoteHTMLAttributes extends HTMLAttributes<HTMLQuoteElement> {
  cite?: string | undefined;
}

export interface ObjectHTMLAttributes
  extends HTMLAttributes<HTMLObjectElement> {
  classID?: string | undefined;
  data?: string | undefined;
  form?: string | undefined;
  height?: number | string | undefined;
  name?: string | undefined;
  type?: string | undefined;
  useMap?: string | undefined;
  width?: number | string | undefined;
  wmode?: string | undefined;
}

export interface OlHTMLAttributes extends HTMLAttributes<HTMLOlElement> {
  reversed?: boolean | undefined;
  start?: number | undefined;
  type?: "1" | "a" | "A" | "i" | "I" | undefined;
}

export interface OptgroupHTMLAttributes
  extends HTMLAttributes<HTMLOptgroupElement> {
  disabled?: boolean | undefined;
  label?: string | undefined;
}

export interface OptionHTMLAttributes
  extends HTMLAttributes<HTMLOptionElement> {
  disabled?: boolean | undefined;
  label?: string | undefined;
  selected?: boolean | undefined;
  value?: string | ReadonlyArray<string> | number | undefined;
}

export interface OutputHTMLAttributes
  extends HTMLAttributes<HTMLOutputElement> {
  form?: string | undefined;
  htmlFor?: string | undefined;
  name?: string | undefined;
}

export interface ParamHTMLAttributes extends HTMLAttributes<HTMLParamElement> {
  name?: string | undefined;
  value?: string | ReadonlyArray<string> | number | undefined;
}

export interface ProgressHTMLAttributes
  extends HTMLAttributes<HTMLProgressElement> {
  max?: number | string | undefined;
  value?: string | ReadonlyArray<string> | number | undefined;
}

export interface SlotHTMLAttributes extends HTMLAttributes<HTMLSlotElement> {
  name?: string | undefined;
}

export interface ScriptHTMLAttributes
  extends HTMLAttributes<HTMLScriptElement> {
  async?: boolean | undefined;
  /** @deprecated */
  charSet?: string | undefined;
  crossOrigin?: string | undefined;
  defer?: boolean | undefined;
  integrity?: string | undefined;
  noModule?: boolean | undefined;
  nonce?: string | undefined;
  referrerPolicy?: HTMLAttributeReferrerPolicy | undefined;
  src?: string | undefined;
  type?: string | undefined;
}

export interface SelectHTMLAttributes
  extends HTMLAttributes<HTMLSelectElement> {
  autoComplete?: string | undefined;
  autoFocus?: boolean | undefined;
  disabled?: boolean | undefined;
  form?: string | undefined;
  multiple?: boolean | undefined;
  name?: string | undefined;
  required?: boolean | undefined;
  size?: number | undefined;
  value?: string | ReadonlyArray<string> | number | undefined;
  onChange?: EventHandler | undefined;
}

export interface SourceHTMLAttributes
  extends HTMLAttributes<HTMLSourceElement> {
  height?: number | string | undefined;
  media?: string | undefined;
  sizes?: string | undefined;
  src?: string | undefined;
  srcSet?: string | undefined;
  type?: string | undefined;
  width?: number | string | undefined;
}

export interface StyleHTMLAttributes extends HTMLAttributes<HTMLStyleElement> {
  media?: string | undefined;
  nonce?: string | undefined;
  scoped?: boolean | undefined;
  type?: string | undefined;
}

export interface TableHTMLAttributes extends HTMLAttributes<HTMLTableElement> {
  cellPadding?: number | string | undefined;
  cellSpacing?: number | string | undefined;
  summary?: string | undefined;
  width?: number | string | undefined;
}

export interface TextareaHTMLAttributes
  extends HTMLAttributes<HTMLTextareaElement> {
  autoComplete?: string | undefined;
  autoFocus?: boolean | undefined;
  cols?: number | undefined;
  dirName?: string | undefined;
  disabled?: boolean | undefined;
  form?: string | undefined;
  maxLength?: number | undefined;
  minLength?: number | undefined;
  name?: string | undefined;
  placeholder?: string | undefined;
  readOnly?: boolean | undefined;
  required?: boolean | undefined;
  rows?: number | undefined;
  value?: string | ReadonlyArray<string> | number | undefined;
  wrap?: string | undefined;

  onChange?: EventHandler | undefined;
}

export interface TdHTMLAttributes extends HTMLAttributes<HTMLTdElement> {
  align?: "left" | "center" | "right" | "justify" | "char" | undefined;
  colSpan?: number | undefined;
  headers?: string | undefined;
  rowSpan?: number | undefined;
  scope?: string | undefined;
  abbr?: string | undefined;
  height?: number | string | undefined;
  width?: number | string | undefined;
  valign?: "top" | "middle" | "bottom" | "baseline" | undefined;
}

export interface ThHTMLAttributes extends HTMLAttributes<HTMLThElement> {
  align?: "left" | "center" | "right" | "justify" | "char" | undefined;
  colSpan?: number | undefined;
  headers?: string | undefined;
  rowSpan?: number | undefined;
  scope?: string | undefined;
  abbr?: string | undefined;
}

export interface TimeHTMLAttributes extends HTMLAttributes<HTMLTimeElement> {
  dateTime?: string | undefined;
}

export interface TrackHTMLAttributes extends HTMLAttributes<HTMLTrackElement> {
  default?: boolean | undefined;
  kind?: string | undefined;
  label?: string | undefined;
  src?: string | undefined;
  srcLang?: string | undefined;
}

export interface VideoHTMLAttributes
  extends MediaHTMLAttributes<HTMLVideoElement> {
  height?: number | string | undefined;
  playsInline?: boolean | undefined;
  poster?: string | undefined;
  width?: number | string | undefined;
  disablePictureInPicture?: boolean | undefined;
  disableRemotePlayback?: boolean | undefined;
}
