import Button from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = {
  args: {
    label: 'Button',
    onClick: () => {
      window.console.log('Button clicked!');
    },
  },
};

export const Secondary = {
  args: {
    label: 'Button',
    buttonType: 'secondary',
    onClick: () => {
      window.console.log('Button clicked!');
    },
  },
};

export const Large = {
  args: {
    label: 'Button',
    size: 'large',
  },
};

export const Small = {
  args: {
    size: 'small',
    label: 'Button',
    onClick: () => {
      window.console.log('Button clicked!');
    },
  },
};
