import { Button } from "@/registry/default/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/registry/default/ui/drawer"

export default function DrawerDemo() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button>Open</Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-[300px]">
          <DrawerHeader>
            <DrawerTitle>Are you absolutely sure?</DrawerTitle>
            <DrawerDescription>This action cannot be undone.</DrawerDescription>
          </DrawerHeader>
          <DrawerFooter className="grid grid-cols-2">
            <Button variant="noShadow">Submit</Button>
            <DrawerClose asChild>
              <Button
                className="bg-secondary-background text-foreground"
                variant="noShadow"
              >
                Cancel
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
