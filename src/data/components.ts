import AlertDemo from "@/examples/ui/alert"
import AlertDescriptionOnlyDemo from "@/examples/ui/alert/description-only"
import AlertDestructiveDemo from "@/examples/ui/alert/destructive"
import AlertIconDescriptionDemo from "@/examples/ui/alert/icon-description"
import AlertIconTitleDemo from "@/examples/ui/alert/icon-title"
import AlertLongDescriptionDemo from "@/examples/ui/alert/long-description"
import AlertLongTitleDemo from "@/examples/ui/alert/long-title"
import AlertLongTitleAndDescriptionDemo from "@/examples/ui/alert/long-title-and-description"
import AlertWithButtonDemo from "@/examples/ui/alert/with-button"
import BadgeDemo from "@/examples/ui/badge"
import BadgeDefaultDemo from "@/examples/ui/badge/default"
import BadgeDestructiveDemo from "@/examples/ui/badge/destructive"
import BadgeWithIconDemo from "@/examples/ui/badge/with-icon"
import ButtonDemo from "@/examples/ui/button"
import ButtonDestructiveDemo from "@/examples/ui/button/destructive"
import ButtonOutlineDemo from "@/examples/ui/button/outline"
import ButtonSecondaryDemo from "@/examples/ui/button/secondary"
import ButtonWithIconDemo from "@/examples/ui/button/with-icon"
import CardDemo from "@/examples/ui/card"
import CheckboxDemo from "@/examples/ui/checkbox"
import CommandDemo from "@/examples/ui/command"
import CommandDialogDemo from "@/examples/ui/command/dialog"
import DataTableDemo from "@/examples/ui/data-table"
import DialogDemo from "@/examples/ui/dialog"
import DialogWithScrollableContent from "@/examples/ui/dialog/scrollable-content"
import DialogWithStickyFooter from "@/examples/ui/dialog/sticky-footer"
import DropdownMenuDemo from "@/examples/ui/dropdown-menu"
import DropdownMenuCheckboxes from "@/examples/ui/dropdown-menu/checkboxes"
import DropdownMenuRadioGroupDemo from "@/examples/ui/dropdown-menu/radio"
import FormDemo from "@/examples/ui/form"
import ImageCardDemo from "@/examples/ui/image-card"
import InputDemo from "@/examples/ui/input"
import InputDisabledDemo from "@/examples/ui/input/disabled"
import InputFileDemo from "@/examples/ui/input/file"
import InputWithButtonDemo from "@/examples/ui/input/with-button"
import InputWithLabelDemo from "@/examples/ui/input/with-label"
import LabelDemo from "@/examples/ui/label"
import PaginationDemo from "@/examples/ui/pagination"
import RadioGroupDemo from "@/examples/ui/radio-group"
import SelectDemo from "@/examples/ui/select"
import SelectDisabledDemo from "@/examples/ui/select/disabled"
import SelectLargeListDemo from "@/examples/ui/select/large-list"
import SelectWithIconDemo from "@/examples/ui/select/with-icon"
import SonnerDemo from "@/examples/ui/sonner"
import SonnerActionDemo from "@/examples/ui/sonner/action"
import SonnerCancelDemo from "@/examples/ui/sonner/cancel"
import SonnerErrorDemo from "@/examples/ui/sonner/error"
import SonnerInfoDemo from "@/examples/ui/sonner/info"
import SonnerPromiseDemo from "@/examples/ui/sonner/promise"
import SonnerSuccessDemo from "@/examples/ui/sonner/success"
import SonnerWarningDemo from "@/examples/ui/sonner/warning"
import TableDemo from "@/examples/ui/table"
import TabsDemo from "@/examples/ui/tabs"

type Component = {
  name: string
  exampleComponent: React.ComponentType
  examples?: Record<string, React.ComponentType>
  notShadcn?: boolean
}

const COMPONENTS: Component[] = [
  {
    name: "Alert",
    exampleComponent: AlertDemo,
    examples: {
      default: AlertDemo,
      destructive: AlertDestructiveDemo,
      "icon-description": AlertIconDescriptionDemo,
      "description-only": AlertDescriptionOnlyDemo,
      "icon-title": AlertIconTitleDemo,
      "long-description": AlertLongDescriptionDemo,
      "long-title": AlertLongTitleDemo,
      "long-title-and-description": AlertLongTitleAndDescriptionDemo,
      "with-button": AlertWithButtonDemo,
    },
  },
  {
    name: "Badge",
    exampleComponent: BadgeDemo,
    examples: {
      default: BadgeDefaultDemo,
      destructive: BadgeDestructiveDemo,
      "with-icon": BadgeWithIconDemo,
    },
  },
  {
    name: "Button",
    exampleComponent: ButtonDemo,
    examples: {
      default: ButtonDemo,
      secondary: ButtonSecondaryDemo,
      destructive: ButtonDestructiveDemo,
      outline: ButtonOutlineDemo,
      "with-icon": ButtonWithIconDemo,
    },
  },
  {
    name: "Card",
    exampleComponent: CardDemo,
  },
  {
    name: "Checkbox",
    exampleComponent: CheckboxDemo,
  },
  {
    name: "Command",
    exampleComponent: CommandDemo,
    examples: {
      default: CommandDemo,
      dialog: CommandDialogDemo,
    },
  },
  {
    name: "Data Table",
    exampleComponent: DataTableDemo,
  },
  {
    name: "Dialog",
    exampleComponent: DialogDemo,
    examples: {
      default: DialogDemo,
      "scrollable-content": DialogWithScrollableContent,
      "sticky-footer": DialogWithStickyFooter,
    },
  },
  {
    name: "Dropdown Menu",
    exampleComponent: DropdownMenuDemo,
    examples: {
      default: DropdownMenuDemo,
      checkboxes: DropdownMenuCheckboxes,
      radio: DropdownMenuRadioGroupDemo,
    },
  },
  {
    name: "Form",
    exampleComponent: FormDemo,
  },
  {
    name: "Input",
    exampleComponent: InputDemo,
    examples: {
      default: InputDemo,
      file: InputFileDemo,
      disabled: InputDisabledDemo,
      "with-label": InputWithLabelDemo,
      "with-button": InputWithButtonDemo,
    },
  },
  {
    name: "Label",
    exampleComponent: LabelDemo,
  },
  {
    name: "Pagination",
    exampleComponent: PaginationDemo,
  },
  {
    name: "Radio Group",
    exampleComponent: RadioGroupDemo,
  },
  {
    name: "Select",
    exampleComponent: SelectDemo,
    examples: {
      default: SelectDemo,
      "large-list": SelectLargeListDemo,
      disabled: SelectDisabledDemo,
      "with-icon": SelectWithIconDemo,
    },
  },
  {
    name: "Sonner",
    exampleComponent: SonnerDemo,
    examples: {
      default: SonnerDemo,
      success: SonnerSuccessDemo,
      info: SonnerInfoDemo,
      warning: SonnerWarningDemo,
      error: SonnerErrorDemo,
      action: SonnerActionDemo,
      cancel: SonnerCancelDemo,
      promise: SonnerPromiseDemo,
    },
  },
  {
    name: "Table",
    exampleComponent: TableDemo,
  },
  {
    name: "Tabs",
    exampleComponent: TabsDemo,
  },
]

export default COMPONENTS
