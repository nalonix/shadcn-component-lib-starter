import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/default/ui/accordion"
// Update to installation path 👆 ("@components/ui" by default)



export default function AccordionDemo() {
  return (
    <Accordion type="single" collapsible className="w-full max-w-xl">
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern. 🏆
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

