import type { Meta, StoryObj, } from "@storybook/react-vite";
import type { GridProps } from "./grid.types";
import { Grid } from "./grid";
import { Text } from "../text/text";
import { View } from "@/primitives";
import { SxStyles } from "@/utils";


type Story = StoryObj<GridProps>;


export default {
  title: 'Components/Layout/Grid',
  component: Grid,
} as Meta<GridProps>;


export const GridDashboardLayout: Story = {
  name: 'Grid — Dashboard layout',
  render: (args: GridProps) => (
    <Grid
      { ...args }
      columns={ 4 }
      sx={ styles.grid }
    >
      <Grid.Span columns={ 2 } rows={ 2 }>
        <View
          tone='elevated'
          intensity='filled'
          sx={ styles.panel }
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
        <Text size='xs' color='secondary'>Minutes listened</Text>
        <Text size='3xl' color='primary' weight='bold'>1,351</Text>
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
        <Text size='xs' color='secondary'>Top artists with friends</Text>
        <Text size='lg' color='primary' weight='semibold'>070 Shake</Text>
      </View>
      <Grid.Span
        columns={ 4 }
        rows={ 1 }
      >
        <View
          tone='elevated'
          intensity='filled'
          sx={ styles.wide }
        >
          <Text size='2xl' color='primary' weight='semibold'>You hit 7 plays</Text>
          <Text size='base' color='secondary'>This song was on repeat. Such a fan.</Text>
        </View>
      </Grid.Span>
    </Grid>
  ),
};


const styles = SxStyles.create({
  grid: {
    gap: 4,
  },
  panel: {
    padding: 'space-4',
    width: 'fill',
    height: 'fill',
    borderRadius: 'xl',
  },
  card: {
    padding: 'space-4',
    width: 'fill',
    height: 'space-28',
    borderRadius: 'xl',
  },
  wide: {
    padding: 'space-4',
    width: 'fill',
    height: 'space-24',
    borderRadius: 'xl',
  },
});
