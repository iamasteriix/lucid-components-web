import type { Meta, StoryObj, } from "@storybook/react-vite";
import type { GridProps } from "./grid";
import { Grid } from "./grid";
import { Text } from "../text/text";
import { View } from "@/primitives";
import { SxStyles } from "@/utils";


type Story = StoryObj<GridProps>;


export default {
  title: 'Components/Layout/Grid',
  component: Grid,
  argTypes: {
    align: {},
    justify: {},
    columns: {},
    width: {},
    maxWidth: {},
    height: {},
    minHeight: {},
    gap: {},
    columnGap: {},
    rowGap: {},
  },
} as Meta<GridProps>;


export const GridDashboardLayout: Story = {
  name: 'Grid — Dashboard layout',
  render: (args: GridProps) => (
    <Grid
      { ...args }
      columns={ 4 }
      gap={ 4 }
    >
      <Grid.Span columns={ 2 } rows={ 2 }>
        <View
          tone='elevated'
          intensity='filled'
          sx={ styles.card }
        >
          <Text size='xs' color='secondary'>Top artist</Text>
          <Text size='lg' color='primary' weight='semibold'>070 Shake</Text>
        </View>
      </Grid.Span>
      <View
        tone='elevated'
        intensity='filled'
        depth='sm'
        elevation='level-1'
        sx={ styles.card }
      >
        <Text size='xs' color='secondary'>Top songs with friends</Text>
        <Text size='lg' color='primary' weight='semibold'>Don't Break The Silence</Text>
      </View>
      <View
        tone='elevated'
        intensity='filled'
        depth='sm'
        elevation='level-1'
        sx={ styles.card }
      >
        <Text size='xs' color='secondary'>Top song</Text>
        <Text size='lg' color='primary' weight='semibold'>Web</Text>
      </View>
    </Grid>
  ),
};


const styles = SxStyles.create({
  card: {
    padding: 'space-4',
    width: 'fill',
    height: 'fill',
    borderRadius: 'xl',
  },
});
