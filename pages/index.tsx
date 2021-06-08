import React, { useState } from "react";
import Link from "next/link";
import Head from "next/head";

import { Item, Section } from "@react-stately/collections";

import { MenuItemData } from "@dataxelio/react-ui.utils.prop-types";
import { Button } from "@dataxelio/react-ui.input.button";
import { AnchorButton } from "@dataxelio/react-ui.input.anchor-button";
import { TextField } from "@dataxelio/react-ui.input.text-field";
import { TextArea } from "@dataxelio/react-ui.input.text-area";
import { SearchBar } from "@dataxelio/react-ui.input.search-bar";
import { FormGroup } from "@dataxelio/react-ui.input.form-group";
import { IconStyle, IntentColor } from "@dataxelio/react-ui.utils.prop-types";
import { Icon } from "@dataxelio/react-ui.element.icon";
import { Text } from "@dataxelio/react-ui.element.text";
import { Paragraph } from "@dataxelio/react-ui.element.paragraph";
import { Divider } from "@dataxelio/react-ui.element.divider";
import { Title } from "@dataxelio/react-ui.element.title";
import { Tooltip } from "@dataxelio/react-ui.overlay.tooltip";
import { CheckBox } from "../dataxelio.react-ui/input/check-box";
import { Card } from "@dataxelio/react-ui.surface.card";
import { Form } from "@dataxelio/react-ui.element.form";
import { ResourceViewer } from "@dataxelio/react-ui.surface.resource-viewer";

import { ButtonWithTooltip } from "../local-components/buttonWithTooltip";
import { TestContent } from "../local-components/testContent";

import { Header } from "@dataxelio/react-ui.element.header";
import { ContentText } from "@dataxelio/react-ui.element.content-text";
import { Content } from "@dataxelio/react-ui.element.content";
import { Footer } from "@dataxelio/react-ui.element.footer";

import { BasicLayout } from "@dataxelio/react-ui.layout.basic-layout";
import { FlexLayout } from "@dataxelio/react-ui.layout.flex-layout";
import { GridLayout } from "@dataxelio/react-ui.layout.grid-layout";
import { Label } from "@dataxelio/react-ui.element.label";
import { Dialog } from "@dataxelio/react-ui.overlay.dialog";
import { Menu } from "@dataxelio/react-ui.element.menu";
import { PopoverTrigger } from "@dataxelio/react-ui.overlay.popover-trigger";

const Index = () => {
  const [openDialog, setOpenDialog] = React.useState(false);
  const [openDialog2, setOpenDialog2] = React.useState(false);

  const [openMenu, setOpenMenu] = React.useState(false);

  const menuItems1: MenuItemData[] = [
    {
      id: "1",
      name: "Animals",
      label: "Animals",
      children: [
        { id: "11", name: "Aardvark", label: "Aardvark" },
        { id: "12", name: "Kangaroo", label: "Kangaroo" },
        { id: "13", name: "Snake", label: "Snake" },
      ],
    },
    {
      id: "2",
      name: "People",
      label: "People",
      children: [
        { id: "21", name: "Danni", label: "Danni" },
        { id: "22", name: "Devon", label: "Devon" },
        {
          id: "23",
          name: "Ross",
          label: "Ross",
          children: [{ id: "231", name: "Tests", label: "Tests" }],
        },
      ],
    },
    {
      id: "3",
      name: "Children",
      label: "Children",
      children: [
        { id: "31", name: "Edem", label: "Edem" },
        { id: "32", name: "Femi", label: "Femi" },
        {
          id: "33",
          name: "Widad",
          label: "Widad",
          children: [
            { id: "331", name: "Irfane", label: "Irfane" },
            { id: "332", name: "Ibath", label: "Ibath" },
          ],
        },
      ],
    },
  ];

  const menuItems2: MenuItemData[] = [
    {
      id: "1",
      name: "Animaux",
      label: "Animaux",
      children: [
        { id: "11", name: "Aardvark", label: "Aardvark" },
        { id: "12", name: "Kangaroo", label: "Kangaroo" },
        { id: "13", name: "Snake", label: "Snake" },
      ],
    },
    {
      id: "2",
      name: "Personnes",
      label: "Personnes",
      children: [
        { id: "21", name: "Danni", label: "Danni", leftIcon: "folder", rightIcon: "eye" },
        { id: "22", name: "Devon", label: "Devon" },
        {
          id: "23",
          name: "Ross",
          label: "Ross",
          children: [{ id: "231", name: "Tests", label: "Tests" }],
        },
      ],
    },
    {
      id: "3",
      name: "Enfants",
      label: "Enfants",
      children: [
        { id: "31", name: "Edem", label: "Edem" },
        { id: "32", name: "Femi", label: "Femi" },
        {
          id: "33",
          name: "Widad",
          label: "Widad",
          children: [
            { id: "331", name: "Irfane", label: "Irfane" },
            { id: "332", name: "Ibath", label: "Ibath" },
          ],
        },
      ],
    },
  ];

  const menuItems3: MenuItemData[] = [
    {
      id: "1",
      name: "Animals",
      label: "Animals",
      children: [
        { id: "11", name: "Aardvark", label: "Aardvark" },
        { id: "12", name: "Kangaroo", label: "Kangaroo" },
        { id: "13", name: "Snake", label: "Snake" },
      ],
    },
    {
      id: "2",
      name: "People",
      label: "People",
      children: [
        { id: "21", name: "Danni", label: "Danni" },
        { id: "22", name: "Devon", label: "Devon" },
        {
          id: "23",
          name: "Ross",
          label: "Ross",
        },
      ],
    },
    {
      id: "3",
      name: "Children",
      label: "Children",
      children: [
        { id: "31", name: "Edem", label: "Edem" },
        { id: "32", name: "Femi", label: "Femi" },
        {
          id: "33",
          name: "Widad",
          label: "Widad",
        },
      ],
    },
  ];

  return (
    <div>
      <Head>
        <title>Create Cloudem App</title>
      </Head>

      <div className="ml-5 mt-5 mr-5">
        <TextField
          inputType="email"
          id="email"
          name="email"
          label="Email"
          helperText="Helper textx with details..."
          intent={IntentColor.DANGER}
          intentAtDefaultState={true}
          placeholder="Email"
          fill
          //onChange={value => console.log(value)}
        />
      </div>

      <div className="ml-5 mt-5 mr-5">
        <TextField
          inputType="password"
          id="password"
          name="password"
          label="Password"
          labelInfo="(required)"
          helperText="Enter password to connect"
          intent={IntentColor.DANGER}
          placeholder="Password"
          fill
          intentAtDefaultState={false}
        />
      </div>

      <div className="ml-5 mt-5 mr-5">
        <SearchBar
          intent={IntentColor.BRAND}
          placeholder="Filter Subnets"
          aria-label="Filter Subnets"
          fill
        />
      </div>

      <div className="w-[124.08px] h-[32px] relative bg-gray-700 ml-5 mt-16 mr-5">
        <div className="w-[8px] h-[8px] absolute top-[100%] left-[50%] bg-gray-400 transform translate-x-[-50%] translate-y-[-50%] rotate-45 z-[-1]" />
      </div>

      <div className="ml-5 mt-5 mr-5">
        <input type="checkbox"></input>
      </div>
      <div className="ml-5 mt-5 mr-5">
        <select></select>
      </div>
      <div className="ml-5 mt-5 mr-5">
        <CheckBox aria-label="test" intent={IntentColor.PRIMARY}>
          Test Battle
        </CheckBox>
      </div>
      <div className="ml-5 mt-5 mr-5">
        <Tooltip delay={0} withArrow content="This is tooltip" placement="right">
          <Button
            text="Hover and click me"
            fontSize="text-sm"
            fontWeight="font-bold"
            horizontalPadding="px-6"
            verticalPadding="py-1.5"
            outlined
            rightIcon="caret-down"
          />
        </Tooltip>
      </div>
      <div className="ml-5 mt-5 mr-5">
        <Link href="/about" passHref>
          <AnchorButton
            text="Anchor Button"
            fontSize="text-sm"
            fontWeight="font-bold"
            horizontalPadding="px-6"
            verticalPadding="py-1.5"
            onPress={e => {
              console.log("Minimal Button is clicked with " + e.pointerType);
            }}
          ></AnchorButton>
        </Link>
      </div>
      <div className="ml-5 mt-5 mr-5">
        <Button
          text="Actions"
          fontSize="text-sm"
          fontWeight="font-bold"
          horizontalPadding="px-6"
          verticalPadding="py-1.5"
          outlined
          rightIcon="caret-down"
        ></Button>
      </div>
      <div className="ml-5 mt-5 mr-5">
        <Button
          text="Create disk"
          fontSize="text-sm"
          fontWeight="font-bold"
          horizontalPadding="px-6"
          verticalPadding="py-1.5"
          outlined
          intent={IntentColor.BRAND}
        ></Button>
      </div>
      <div className="ml-5 mt-5 mr-5">
        <Button
          fontSize="text-sm"
          fontWeight="font-semibold"
          horizontalPadding="px-6"
          verticalPadding="py-1.5"
          intent={IntentColor.BRAND}
          leftIcon="folder"
          rightIcon="caret-up"
          onPress={() => {
            console.log("Button 1 clicked!!");
          }}
        >
          Create subnet
        </Button>
      </div>
      <div className="ml-5 mt-5 mr-5">
        <Button
          fontSize="text-sm"
          fontWeight="font-light"
          horizontalPadding="px-6"
          verticalPadding="py-6"
          intent={IntentColor.BRAND}
          leftIcon="plus"
          leftIconTransform={{ size: 32 }}
          borderRadius="rounded-full"
          boxShadow="shadow-xl"
          onPress={() => {
            console.log("Button 2 clicked!!");
          }}
        ></Button>
      </div>

      <div className="ml-5 mt-5 mr-5">
        <Button
          text="Open Simple Dialog"
          fontSize="text-sm"
          fontWeight="font-bold"
          horizontalPadding="px-6"
          verticalPadding="py-1.5"
          onPress={() => {
            setOpenDialog(true);
          }}
        ></Button>
        <Dialog
          isOpen={openDialog}
          onClose={() => setOpenDialog(false)}
          footerAlignment="right"
          dividerAfterContent
        >
          <Header>
            <Title>Simple Dialog</Title>
          </Header>
          <ContentText>
            <Paragraph>
              Welcome to this simple dialog presentation. We will show you what you can build with
              that
            </Paragraph>
          </ContentText>
          <Content>
            <Paragraph>Simple Dialog Content 1</Paragraph>
            <Paragraph>Simple Dialog Content 2</Paragraph>
            <Paragraph>Simple Dialog Content 3</Paragraph>
            <Paragraph>Simple Dialog Content 4</Paragraph>
            <Paragraph>Simple Dialog Content 5</Paragraph>
          </Content>
          <Footer>
            <Button
              outlined
              intent={IntentColor.DANGER}
              borderRadius="rounded-md"
              horizontalPadding="px-6"
              verticalPadding="py-1.5"
              fontSize="text-sm"
              fontWeight="font-semibold"
              onPress={() => {
                setOpenDialog(false);
              }}
            >
              Cancel
            </Button>
            <Button
              intent={IntentColor.SUCCESS}
              borderRadius="rounded-md"
              horizontalPadding="px-6"
              verticalPadding="py-1.5"
              fontSize="text-sm"
              fontWeight="font-semibold"
              onPress={() => {
                setOpenDialog(false);
              }}
            >
              Validate
            </Button>
          </Footer>
        </Dialog>
      </div>

      <div className="ml-5 mt-5 mr-5">
        <Button
          text="Open Form Dialog"
          fontSize="text-sm"
          fontWeight="font-bold"
          horizontalPadding="px-6"
          verticalPadding="py-1.5"
          onPress={() => {
            setOpenDialog2(true);
          }}
        ></Button>
        <Dialog
          asForm
          isOpen={openDialog2}
          onClose={() => setOpenDialog2(false)}
          onSubmit={e => {
            e.preventDefault();
            alert("Dialog form is submitted");
          }}
          maxWidth="max-w-2xl"
          footerAlignment="right"
        >
          <Header>
            <Title>Simple Form Card</Title>
          </Header>
          <Content>
            <FlexLayout
              flexDirection="flex-col"
              flexWrap="flex-nowrap"
              flexGap="gap-5"
              flexMainAxisAlignment="justify-center"
              flexCrossAxisAlignment="items-start"
              fluid
            >
              <TextField
                inputType="email"
                id="email2"
                name="email"
                label="Email"
                labelInfo="(required)"
                //helperText="Enter password to connect"
                intent={IntentColor.BRAND}
                placeholder="Email"
                intentAtDefaultState={false}
                fill
              />
              <TextField
                inputType="password"
                id="password2"
                name="password"
                label="Password"
                labelInfo="(required)"
                helperText="Enter password to connect"
                intent={IntentColor.DANGER}
                placeholder="Password"
                intentAtDefaultState={false}
                fill
              />
              <CheckBox aria-label="terms" intent={IntentColor.PRIMARY}>
                Accept Terms
              </CheckBox>
              <TextArea
                id="message"
                name="message"
                label="Message"
                labelInfo="(optional)"
                intent={IntentColor.BRAND}
                placeholder="Enter your message here"
                helperText="Enter your message"
                intentAtDefaultState={false}
                fill
              />
            </FlexLayout>
          </Content>
          <Footer>
            <Button
              outlined
              borderRadius="rounded-lg"
              horizontalPadding="px-6"
              verticalPadding="py-1.5"
              fontSize="text-sm"
              fontWeight="font-semibold"
              onPress={() => {
                setOpenDialog2(false);
              }}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              intent={IntentColor.BRAND}
              borderRadius="rounded-lg"
              horizontalPadding="px-6"
              verticalPadding="py-1.5"
              fontSize="text-sm"
              fontWeight="font-semibold"
            >
              Submit
            </Button>
          </Footer>
        </Dialog>
      </div>

      <BasicLayout
        leftMargin="ml-5"
        topMargin="mt-5"
        rightMargin="mr-5"
        maxWidth="max-w-md"
        debugMode
      >
        <BasicLayout
          display="block"
          leftMargin="ml-2"
          topMargin="mt-2"
          rightMargin="mr-2"
          bottomMargin="mb-2"
          debugMode
        >
          First Basic Child
        </BasicLayout>
        <BasicLayout
          display="block"
          leftMargin="ml-2"
          topMargin="mt-2"
          rightMargin="mr-2"
          bottomMargin="mb-2"
          debugMode
        >
          Second Basic Child
        </BasicLayout>
        <Paragraph textOverflow="truncate">CardHeade</Paragraph>
      </BasicLayout>

      <FlexLayout
        leftMargin="ml-5"
        topMargin="mt-5"
        rightMargin="mr-5"
        flexDirection="flex-row"
        flexMainAxisAlignment="justify-start"
        flexGap="gap-2"
        debugMode
      >
        <BasicLayout debugMode>First Flex Child</BasicLayout>
        <BasicLayout debugMode>
          <BasicLayout debugMode>Second Flex Child 1</BasicLayout>
          <BasicLayout debugMode>Second Flex Child 222222</BasicLayout>
        </BasicLayout>
      </FlexLayout>

      <GridLayout
        leftMargin="ml-5"
        topMargin="mt-5"
        rightMargin="mr-5"
        gridTemplateColumns="grid-cols-2"
        gridColumnSpan="col-auto"
        debugMode
      >
        <BasicLayout debugMode>First Grid Child</BasicLayout>
        <BasicLayout debugMode>Second Grid Child</BasicLayout>
        <BasicLayout debugMode>Third Grid Child</BasicLayout>
        <BasicLayout debugMode>Fourth Grid Child</BasicLayout>
        <BasicLayout debugMode>Fifth Grid Child</BasicLayout>
      </GridLayout>

      <BasicLayout
        leftMargin="ml-5"
        topMargin="mt-5"
        rightMargin="mr-5"
        maxWidth="max-w-md"
        debugMode
      >
        <FlexLayout
          horizontalMargin="mx-14"
          verticalMargin="my-14"
          flexDirection="flex-col"
          flexWrap="flex-nowrap"
          flexGap="gap-5"
          debugMode
        >
          <BasicLayout flexGridItemCrossAxisAlignment="self-center" debugMode>
            <Title>View Header</Title>
          </BasicLayout>
          <Divider orientation="horizontal" />
          <BasicLayout fluid debugMode>
            View Details 1
          </BasicLayout>
          <BasicLayout fluid debugMode>
            View Details 2
          </BasicLayout>
          <BasicLayout fluid minWidth="min-w-0" debugMode>
            <Paragraph textOverflow="truncate">This is a paragraph</Paragraph>
          </BasicLayout>
          <footer className="justify-end">View Footer</footer>
        </FlexLayout>
      </BasicLayout>

      <Card
        leftMargin="ml-5"
        topMargin="mt-5"
        rightMargin="mr-5"
        boxShadow="shadow-md"
        borderRadius="rounded-lg"
        maxWidth="max-w-xl"
        footerAlignment="center"
        dividerAfterContent
      >
        <Header>
          <Title>Simple Card</Title>
        </Header>
        <ContentText>
          Welcome to this simple card presentation. We will show you what you can build with that
        </ContentText>
        <Content>
          <Paragraph>Simple Card Content 1</Paragraph>
          <Paragraph>Simple Card Content 2</Paragraph>
          <Paragraph>Simple Card Content 3</Paragraph>
          <Paragraph>Simple Card Content 4</Paragraph>
          <Paragraph>Simple Card Content 5</Paragraph>
        </Content>
        <Footer>
          <Paragraph fontSize="text-xs">© 2020-2021, Cloudem all rights reserved.</Paragraph>
        </Footer>
      </Card>

      <Card
        asForm
        leftMargin="ml-5"
        topMargin="mt-5"
        rightMargin="mr-5"
        boxShadow="shadow-md"
        borderRadius="rounded-sm"
        maxWidth="max-w-xl"
        footerAlignment="right"
        dividerAfterHeader
        onSubmit={e => {
          e.preventDefault();
          alert("Simple form is submitted");
        }}
      >
        <Header>
          <Title>Simple Form Card</Title>
        </Header>
        <Content>
          <FlexLayout
            flexDirection="flex-col"
            flexWrap="flex-nowrap"
            flexGap="gap-5"
            flexMainAxisAlignment="justify-center"
            flexCrossAxisAlignment="items-start"
            fluid
          >
            <TextField
              inputType="email"
              id="email2"
              name="email"
              label="Email"
              labelInfo="(required)"
              //helperText="Enter password to connect"
              intent={IntentColor.BRAND}
              placeholder="Email"
              intentAtDefaultState={false}
              fill
            />
            <TextField
              inputType="password"
              id="password2"
              name="password"
              label="Password"
              labelInfo="(required)"
              helperText="Enter password to connect"
              intent={IntentColor.DANGER}
              placeholder="Password"
              intentAtDefaultState={false}
              fill
            />
            <CheckBox aria-label="terms" intent={IntentColor.PRIMARY}>
              Accept Terms
            </CheckBox>
            <TextArea
              id="message"
              name="message"
              label="Message"
              labelInfo="(optional)"
              intent={IntentColor.BRAND}
              placeholder="Enter your message here"
              helperText="Enter your message"
              intentAtDefaultState={false}
              fill
            />
          </FlexLayout>
        </Content>
        <Footer>
          <Button
            outlined
            borderRadius="rounded-lg"
            horizontalPadding="px-6"
            verticalPadding="py-1.5"
            fontSize="text-sm"
            fontWeight="font-semibold"
          >
            Cancel
          </Button>
          <Button
            type="submit"
            intent={IntentColor.BRAND}
            borderRadius="rounded-lg"
            horizontalPadding="px-6"
            verticalPadding="py-1.5"
            fontSize="text-sm"
            fontWeight="font-semibold"
          >
            Submit
          </Button>
        </Footer>
      </Card>

      <Card
        asForm
        leftMargin="ml-5"
        topMargin="mt-5"
        rightMargin="mr-5"
        boxShadow="shadow-md"
        borderRadius="rounded-sm"
        maxWidth="max-w-3xl"
        contentOrientation="landscape"
        footerAlignment="right"
        dividerAfterHeader
        onSubmit={e => {
          e.preventDefault();
          alert("Complex form is submitted");
        }}
      >
        <Header>
          <Title>Complex Form Card</Title>
        </Header>
        <Content>
          <FlexLayout
            flexDirection="flex-col"
            flexWrap="flex-nowrap"
            flexGap="gap-5"
            flexMainAxisAlignment="justify-center"
            flexCrossAxisAlignment="items-start"
            fluid
          >
            <TextField
              inputType="email"
              id="email3"
              name="email"
              label="Email"
              labelInfo="(required)"
              //helperText="Enter password to connect"
              intent={IntentColor.BRAND}
              placeholder="Email"
              intentAtDefaultState={false}
              fill
            />
            <TextField
              inputType="password"
              id="password3"
              name="password"
              label="Password"
              labelInfo="(required)"
              helperText="Enter password to connect"
              intent={IntentColor.DANGER}
              placeholder="Password"
              intentAtDefaultState={false}
              fill
            />
            <CheckBox aria-label="terms" intent={IntentColor.PRIMARY}>
              Accept Terms
            </CheckBox>
            <TextArea
              id="message3"
              name="message"
              label="Message"
              labelInfo="(optional)"
              intent={IntentColor.BRAND}
              placeholder="Enter your message here"
              helperText="Enter your message"
              intentAtDefaultState={false}
              fill
            />
          </FlexLayout>
          <Divider opacity={0.3} />
          <FlexLayout
            flexDirection="flex-col"
            flexWrap="flex-nowrap"
            flexGap="gap-5"
            flexMainAxisAlignment="justify-center"
            flexCrossAxisAlignment="items-start"
            fluid
          >
            <TextField
              inputType="email"
              id="email4"
              name="email"
              label="Email"
              labelInfo="(required)"
              //helperText="Enter password to connect"
              intent={IntentColor.BRAND}
              placeholder="Email"
              intentAtDefaultState={false}
              fill
            />
            <TextField
              inputType="password"
              id="password4"
              name="password"
              label="Password"
              labelInfo="(required)"
              helperText="Enter password to connect"
              intent={IntentColor.DANGER}
              placeholder="Password"
              intentAtDefaultState={false}
              fill
            />
            <CheckBox aria-label="terms" intent={IntentColor.PRIMARY}>
              Accept Terms
            </CheckBox>
            <TextArea
              id="message4"
              name="message"
              label="Message"
              labelInfo="(optional)"
              intent={IntentColor.BRAND}
              placeholder="Enter your message here"
              helperText="Enter your message"
              intentAtDefaultState={false}
              fill
            />
          </FlexLayout>
        </Content>
        <Footer>
          <Button
            outlined
            borderRadius="rounded-lg"
            horizontalPadding="px-6"
            verticalPadding="py-1.5"
            fontSize="text-sm"
            fontWeight="font-semibold"
          >
            Cancel
          </Button>
          <Button
            type="submit"
            intent={IntentColor.BRAND}
            borderRadius="rounded-lg"
            horizontalPadding="px-6"
            verticalPadding="py-1.5"
            fontSize="text-sm"
            fontWeight="font-semibold"
          >
            Submit
          </Button>
        </Footer>
      </Card>

      <ResourceViewer
        subTitle="Subnet Details"
        leftMargin="ml-5"
        rightMargin="mr-5"
        topMargin="mt-5"
        properties={[
          {
            id: "0",
            name: "Subnet ID",
            value: "subnet-57383a4d-3fe2-40be-852e-c3929bbd9869",
          },
          { id: "1", name: "Available IPv4 addresses", value: "4091" },
          { id: "2", name: "Route table", value: "rtb-352b394c" },
          { id: "3", name: "Auto-assign IPv6 address", value: "No" },
          { id: "4", name: "Owner", value: "179659478299" },
          {
            id: "5",
            name: "State",
            value: "Available",
            intent: IntentColor.SUCCESS,
            icon: "check-circle",
            iconStyle: IconStyle.REGULAR,
          },
          { id: "6", name: "IPv6 CIDR", value: "" },
          { id: "7", name: "Network ACL", value: "acl-6b593412" },
          { id: "8", name: "Auto-assign customer", value: "No" },
          {
            id: "9",
            name: "Subnet ARN",
            value: "arn:aws:ec2:eu-west-1:179659478299:subnet/subnet-5ddbfe3b",
          },
          { id: "10", name: "VPC", value: "vpc-3357bf4a" },
          { id: "11", name: "Availability Zone", value: "eu-west-1c" },
          {
            id: "12",
            name: "Status",
            value: "Failed",
            intent: IntentColor.DANGER,
            icon: "times-circle",
            iconStyle: IconStyle.REGULAR,
          },
          { id: "13", name: "Default subnet", value: "Yes" },
          { id: "14", name: "Customer-owned IPv4 pool", value: "" },
          { id: "15", name: "IPv4 CIDR", value: "172.31.0.0/20" },
          { id: "16", name: "Availability Zone ID", value: "euw1-az1" },
        ]}
      />

      <Card
        leftMargin="ml-5"
        topMargin="mt-5"
        rightMargin="mr-5"
        boxShadow="shadow-md"
        borderRadius="rounded-sm"
        maxWidth="max-w-sm"
        footerAlignment="center"
        dividerAfterContent
      >
        <Header>
          <Title>Static - Simple Menu</Title>
        </Header>
        <Content>
          <Menu
            aria-label="Actions"
            selectionMode="single"
            disallowEmptySelection
            // onAction={key => alert(`Item with key ${key} is selected`)}
          >
            <Item key="one">One</Item>
            <Item key="two">Two</Item>
            <Item key="three">Three</Item>
          </Menu>
        </Content>
      </Card>

      <Card
        leftMargin="ml-5"
        topMargin="mt-5"
        rightMargin="mr-5"
        boxShadow="shadow-md"
        borderRadius="rounded-sm"
        maxWidth="max-w-sm"
        footerAlignment="center"
        dividerAfterContent
      >
        <Header>
          <Title>Static - Simple Menu with sections</Title>
        </Header>
        <Content>
          <Menu
            aria-label="Actions"
            selectionMode="single"
            disallowEmptySelection
            // onAction={key => alert(`Item with key ${key} is selected`)}
          >
            <Section title="Section 1">
              <Item key="section1-item1">One</Item>
              <Item key="section1-item2">Two</Item>
              <Item key="section1-item3">Three</Item>
            </Section>
            <Section title="Section 2">
              <Item key="section2-item1">One</Item>
              <Item key="section2-item2">Two</Item>
              <Item key="section2-item3">Three</Item>
            </Section>
          </Menu>
        </Content>
      </Card>

      <Card
        leftMargin="ml-5"
        topMargin="mt-5"
        rightMargin="mr-5"
        boxShadow="shadow-md"
        borderRadius="rounded-sm"
        maxWidth="max-w-sm"
        footerAlignment="center"
        dividerAfterContent
      >
        <Header>
          <Title>Dynamic - Simple Menu</Title>
        </Header>
        <Content>
          <Menu
            aria-label="Actions"
            selectionMode="single"
            disallowEmptySelection
            items={menuItems1}
            forceItemLowBrandBackgroundAtHoverState
            // onAction={key => alert(`Item with key ${key} is selected`)}
          >
            {item => <Item>{item.name}</Item>}
          </Menu>
        </Content>
      </Card>

      <Card
        leftMargin="ml-5"
        topMargin="mt-5"
        rightMargin="mr-5"
        boxShadow="shadow-md"
        borderRadius="rounded-sm"
        maxWidth="max-w-sm"
        footerAlignment="center"
        horizontalPadding="px-0"
        dividerAfterContent
      >
        <Header>
          <Title>Dynamic - Simple Menu with sections</Title>
        </Header>
        <Content>
          <Menu
            aria-label="Actions"
            selectionMode="single"
            disallowEmptySelection
            forceItemLowBrandBackgroundAtHoverState
            itemInitialIndent={4}
            items={menuItems1}

            // onAction={key => alert(`Item with key ${key} is selected`)}
          >
            {section => (
              <Section key={section.name} title={section.name} items={section.children}>
                {item => <Item key={item.name}>{item.name}</Item>}
              </Section>
            )}
          </Menu>
        </Content>
      </Card>

      <Card
        leftMargin="ml-5"
        topMargin="mt-5"
        rightMargin="mr-5"
        boxShadow="shadow-md"
        borderRadius="rounded-sm"
        maxWidth="max-w-sm"
        footerAlignment="center"
        horizontalPadding="px-0"
        dividerAfterContent
      >
        <Header>
          <Title>Dynamic - Tree Menu</Title>
        </Header>
        <Content>
          <Menu
            aria-label="Actions"
            selectionMode="single"
            disallowEmptySelection
            items={menuItems2}
            forceItemLowBrandBackgroundAtHoverState
            itemInitialIndent={4}
            groupOpacity="text-opacity-80"
            // onSelectionChange={keys => console.log(keys)}
            // onAction={key => alert(`Item with key ${key} is selected`)}
          >
            {item => <Item childItems={item.children}>{item.name}</Item>}
          </Menu>
        </Content>
      </Card>

      <BasicLayout leftMargin="ml-5" topMargin="mt-5" rightMargin="mr-5">
        <PopoverTrigger
          isOpen={openMenu}
          aria-label="Actions"
          type="menu"
          menuHaveSection
          syncTriggerLabelWithSelectedItem
          menuItems={menuItems3}
          placement="bottom start"
          onMenuItemAction={key => {
            // setOpenMenu(false);
            console.log(`Item with key ${key} has been selected`);
          }}
          onClose={() => {
            setOpenMenu(false);
          }}
        >
          <Button
            onPress={() => {
              setOpenMenu(true);
            }}
          >
            Popover Trigger
          </Button>
        </PopoverTrigger>
      </BasicLayout>

      <div className="ml-5 mt-5 mr-5 flex flex-col items-center gap-5">
        <Divider className="" orientation="horizontal" opacity={0.5} />
        <div className="flex justify-around w-full px-3">
          <div className="text-sm">First Tab</div>
          <Divider />
          <div className="text-sm">Second Tab</div>
          <Divider />
          <div className="text-sm">Third Tab</div>
        </div>
        <Divider className="px-3" orientation="horizontal" opacity={0.5} />
      </div>
      <div className="ml-5 mt-5 mr-5 min-w-0 max-w-sm border border-blueGray-600">
        Cloudem Container
      </div>
      <div className="ml-5 mt-5 mr-5">
        <div className="w-4 h-4 bg-warning-700"></div>
      </div>
      {/* <div className="ml-5 mt-5 mr-5">
        <button className="outline-none focus:outline-none appearance-none bg-white text-gray-600 border-gray-600 ring-gray-600 ring-opacity-50 rounded-sm ring-2 px-6 py-1.5 shadow-none text-sm font-bold tracking-normal leading-normal">
          Test Button
        </button>
      </div> */}
      <div className="ml-5 mt-5 mr-5"></div>
    </div>
  );
};

export default Index;
