import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/default/ui/accordion"
// Import from installtion path 👆 ("@components/ui" is the usual default)


``
export default function AccordionDemo() {
  return (
    <Accordion type="single" collapsible className="flex flex-col gap-y-1 w-full max-w-x">
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern. 🏆
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>This is the second example?</AccordionTrigger>
        <AccordionContent>
           The last but still not the least. 2️⃣
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

