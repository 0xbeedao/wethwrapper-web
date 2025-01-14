import React from 'react';
import { Story, Meta } from '@storybook/react';
import { loggedOutDecorator, loggedInDecorator } from '../../storyHelper';
import { WithdrawForm, WithdrawFormProps } from '.';

export default {
  title: 'Components/Molecules/WithdrawForm',
  component: WithdrawForm,
} as Meta;

const Template: Story<WithdrawFormProps> = (args) => <WithdrawForm {...args} />;

// const mockUser: User = {
//   type: 'web3',
//   attributes: {
//     'custom:account_address': '0xAb5801a7D398351b8bE11C439e05C5B3259aeC9B',
//   },
//   network: '1010101010',
//   username: '0xAb5801a7D398351b8bE11C439e05C5B3259aeC9B',
// };

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
LoggedOut.decorators = [loggedOutDecorator];

export const LoggedIn = Template.bind({});
LoggedIn.args = {};
LoggedIn.decorators = [loggedInDecorator];
