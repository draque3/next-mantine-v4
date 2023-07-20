import { LayoutNo } from '@/components/LayoutNo';
import { ActionIcon, CloseButton, Select, Accordion, ThemeIcon } from '@mantine/core';
import { Settings, CirclePlus, Palette, } from 'tabler-icons-react';


const ButtonDemo = () => {
  return (
    <LayoutNo title="temp">
      <div>
      <ActionIcon variant="transparent" color="red"><Settings size={16} /></ActionIcon>
      <ActionIcon variant="hover"><Settings size={16} /></ActionIcon>
      <ActionIcon variant="default"><Settings size={16} /></ActionIcon>
      <ActionIcon variant="outline"><Settings size={16} /></ActionIcon>
      <ActionIcon variant="filled" color="red"><Settings size={16} /></ActionIcon>
      <ActionIcon variant="light" color="red"><Settings size={16} /></ActionIcon>

      <CloseButton title="Close popover" size="md" iconSize={16} />
      </div>
        <Select
        label="Your favorite framework/library"
        placeholder="Pick one"
        data={[
          { value: 'react', label: 'React' },
          { value: 'ng', label: 'Angular' },
          { value: 'svelte', label: 'Svelte' },
          { value: 'vue', label: 'Vue' },
        ]}
        />

      <Accordion>
        <Accordion.Item label="Customization">
          Colors, fonts, shadows and many other parts are customizable to fit your design needs
        </Accordion.Item>

        <Accordion.Item label="Flexibility">
          Configure components appearance and behavior with vast amount of settings or overwrite any part of component styles
        </Accordion.Item>

        <Accordion.Item label="No annoying focus ring">
          With new :focus-visible pseudo-class focus ring appears only when user navigates with keyboard
        </Accordion.Item>
      </Accordion>
     
      

    <Accordion disableIconRotation>
      <Accordion.Item
        label="Customization"
        icon={
          <ThemeIcon color="violet" variant="light">
            <Palette size={14} />
          </ThemeIcon>
        }
      >
        Colors, fonts, shadows and many other parts are customizable to fit your design needs
      </Accordion.Item>

      {/* ...other <Accordion.Item /> */}
    </Accordion>

    


      
    </LayoutNo>
  )
}




export default ButtonDemo


