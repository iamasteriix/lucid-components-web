import { SxStyles } from "@/core";
import { View } from "@/primitives";
import type { Meta, StoryObj, } from "@storybook/react-vite";
import { Text } from "../text/text";
import { Grid } from "./grid";
import type { GridProps } from "./grid.types";


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
          variant={ variants.view.card }
          sx={ styles.panel }
        >
          <Text variant={ variants.text.label }>Top artist</Text>
          <Text variant={ variants.text.prominent }>070 Shake</Text>
        </View>
      </Grid.Span>
      <View
        variant={ variants.view.card }
        sx={ styles.card }
      >
        <Text variant={ variants.text.label }>Minutes listened</Text>
        <Text variant={ variants.text.loud }>1 351</Text>
      </View>
      <View
        variant={ variants.view.card }
        sx={ styles.card }
      >
        <Text variant={ variants.text.label }>Top song</Text>
        <Text variant={ variants.text.prominent }>Web</Text>
      </View>
      <View
        variant={ variants.view.card }
        sx={ styles.card }
      >
        <Text variant={ variants.text.label }>Top songs with friends</Text>
        <Text variant={ variants.text.prominent }>Don't Break The Silence</Text>
      </View>
      <View
        variant={ variants.view.card }
        sx={ styles.card }
      >
        <Text variant={ variants.text.label }>Top artists with friends</Text>
        <Text variant={ variants.text.prominent }>070 Shake</Text>
      </View>
      <Grid.Span
        columns={ 4 }
        rows={ 1 }
      >
        <View
          variant={ variants.view.card }
          sx={ styles.wide }
        >
          <Text variant={ variants.text.title }>You hit 7 plays</Text>
          <Text variant={ variants.text.subtle }>This song was on repeat. Such a fan.</Text>
        </View>
      </Grid.Span>
    </Grid>
  ),
};


const variants = SxStyles.variants({
  view: {
    card: {
      name: 'flat',
      fill: 'subtle',
    },
  },
  text: {
    label: {
      name: 'caption',
      color: 'secondary',
    },
    prominent: { name: 'heading', },
    loud: { name: 'title-lg', },
    title: { name: 'title' },
    subtle: {
      name: 'body',
      color: 'secondary',
    },
  },
});

const styles = SxStyles.create({
  grid: {
    gap: '4px',
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
