export const formJson = {
  title: "Credit Application",
  logoPosition: "right",
  pages: [
    {
      name: "Company Information",
      title: "Company Information",
      navigationTitle: "Comapny Inforation",
      elements: [
        {
          type: "dropdown",
          name: "ApplicationType",
          maxWidth: "500px",
          title: "Application Type",
          isRequired: true,
          choices: ["Credit Application", "Cash Application"],
        },
        {
          type: "panel",
          name: "CountryPanel",
          visibleIf: "{ApplicationType} = 'Credit Application'",
          elements: [
            {
              type: "dropdown",
              name: "Country",
              title: "Country",
              defaultValue: "Australia",
              isRequired: true,
              choices: [
                "Australia",
                "Brazil",
                "Canada",
                "Philippines",
                "New Zealand",
                "United States",
              ],
            },
            {
              type: "text",
              name: "Business Number",
              startWithNewLine: false,
              title: "Business Number",
              isRequired: true,
              requiredErrorText: "Business number is required",
            },
            {
              type: "panel",
              name: "CompanyInfoPanel",
              visible: false,
              visibleIf:
                "{ApplicationType} = 'Credit Application' and {Business Number} notempty",
              title: "COMPANY INFORMATION",
              elements: [
                {
                  type: "text",
                  name: "Company Number",
                  startWithNewLine: false,
                  title: "Company Number",
                },
                {
                  type: "text",
                  name: "Business Type",
                  startWithNewLine: false,
                  title: "Business Type",
                  isRequired: true,
                },
                {
                  type: "text",
                  name: "Date of  Incorporation",
                  title: "Date of  Incorporation",
                  isRequired: true,
                  inputType: "date",
                },
                {
                  type: "text",
                  name: "Registered Company Name",
                  startWithNewLine: false,
                  title: "Registered Company Name",
                  isRequired: true,
                },
                {
                  type: "text",
                  name: "Trading  Name",
                  startWithNewLine: false,
                  title: "Trading  Name",
                  isRequired: true,
                },
                {
                  type: "text",
                  name: "Nature of Business",
                  title: "Nature of Business",
                },
                {
                  type: "text",
                  name: "Number of Employees",
                  startWithNewLine: false,
                  title: "Number of Employees",
                  inputType: "number",
                  min: 0,
                },
              ],
            },
            {
              type: "panel",
              name: "CreditLimitPanel",
              visibleIf:
                "{ApplicationType} = 'Credit Application' and {Business Number} notempty",
              title: "CREDIT LIMIT INFO",
              elements: [
                {
                  type: "text",
                  name: "question8",
                  maxWidth: "500px",
                  title: "Credit Limit requested (AUD)",
                  isRequired: true,
                  inputTextAlignment: "left",
                  maskType: "currency",
                  maskSettings: {
                    saveMaskedValue: true,
                    allowNegativeValues: false,
                    min: 0,
                    prefix: "$",
                  },
                },
                {
                  type: "expression",
                  name: "question35",
                  startWithNewLine: false,
                  expression: "{Country} = 'Australia' ? 'AUD' : 'algo'",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "Contacts",
      title: "Contacts",
      elements: [
        {
          type: "paneldynamic",
          name: "ContactPanel",
          title: "CONTACTS",
          templateElements: [
            {
              type: "text",
              name: "question1",
              title: "Full name",
              isRequired: true,
            },
            {
              type: "text",
              name: "question2",
              startWithNewLine: false,
              title: "Position",
            },
            {
              type: "text",
              name: "question3",
              title: "Email",
            },
            {
              type: "text",
              name: "question4",
              startWithNewLine: false,
              title: "Mobile",
            },
            {
              type: "text",
              name: "question5",
              startWithNewLine: false,
              title: "Landline",
            },
          ],
          panelCount: 1,
          minPanelCount: 1,
          confirmDelete: true,
          panelAddText: "Add more",
          panelRemoveText: "Delete",
        },
      ],
    },
    {
      name: "Payment Authorisation",
      title: "Payment Authorisation",
      elements: [
        {
          type: "radiogroup",
          name: "DDA",
          title: "Do you want to enable Direct Debt  payment in your account?",
          choices: [
            {
              value: "Item 1",
              text: "Yes",
            },
            {
              value: "Item 2",
              text: "No",
            },
          ],
        },
        {
          type: "panel",
          name: "CreditCardPanel",
          elements: [
            {
              type: "text",
              name: "question6",
              title: "Card Holder Name",
            },
            {
              type: "text",
              name: "question9",
              startWithNewLine: false,
              title: "Card Number",
            },
            {
              type: "text",
              name: "question10",
              startWithNewLine: false,
              title: "Expire Date",
            },
            {
              type: "text",
              name: "question11",
              startWithNewLine: false,
              title: "CVC",
            },
          ],
        },
      ],
    },
    {
      name: "Addresses",
      title: "Addresses",
      elements: [
        {
          type: "panel",
          name: "RegisteredAddressPanel",
          title: "Registered Address",
          elements: [
            {
              type: "text",
              name: "question7",
              title: "Address Line 1",
            },
            {
              type: "text",
              name: "question12",
              startWithNewLine: false,
              title: "Address Line 2",
            },
            {
              type: "text",
              name: "question13",
              title: "Post Code",
            },
            {
              type: "text",
              name: "question14",
              startWithNewLine: false,
              title: "City",
            },
            {
              type: "text",
              name: "question15",
              startWithNewLine: false,
              title: "State",
            },
            {
              type: "text",
              name: "question16",
              startWithNewLine: false,
              title: "Country",
            },
          ],
        },
        {
          type: "panel",
          name: "BillingAddressPanel",
          title: "Billing Address",
          elements: [
            {
              type: "text",
              name: "question17",
              title: "Address Line 1",
            },
            {
              type: "text",
              name: "question18",
              startWithNewLine: false,
              title: "Address Line 2",
            },
            {
              type: "text",
              name: "question19",
              title: "Post Code",
            },
            {
              type: "text",
              name: "question20",
              startWithNewLine: false,
              title: "City",
            },
            {
              type: "text",
              name: "question21",
              startWithNewLine: false,
              title: "State",
            },
            {
              type: "text",
              name: "question22",
              startWithNewLine: false,
              title: "Country",
            },
          ],
        },
      ],
    },
    {
      name: "DirectorsDetails",
      title: "Directors Details",
      elements: [
        {
          type: "text",
          name: "question23",
          title: "Director Name",
        },
        {
          type: "text",
          name: "question24",
          startWithNewLine: false,
          title: "Drivers License Number",
        },
        {
          type: "text",
          name: "question25",
          startWithNewLine: false,
          title: "Birth Date",
        },
        {
          type: "text",
          name: "question26",
          title: "Email",
        },
        {
          type: "text",
          name: "question27",
          startWithNewLine: false,
          title: "Mobile",
        },
        {
          type: "text",
          name: "question28",
          startWithNewLine: false,
          title: "Landline",
        },
        {
          type: "text",
          name: "question29",
          title: "Home Address Line 1",
        },
        {
          type: "text",
          name: "question30",
          startWithNewLine: false,
          title: "Home Address Line 2",
        },
        {
          type: "text",
          name: "question31",
          title: "Post Code",
        },
        {
          type: "text",
          name: "question32",
          startWithNewLine: false,
          title: "City",
        },
        {
          type: "text",
          name: "question33",
          startWithNewLine: false,
          title: "State",
        },
        {
          type: "text",
          name: "question34",
          startWithNewLine: false,
          title: "Country",
        },
      ],
    },
  ],
  showQuestionNumbers: "off",
  showProgressBar: "auto",
  progressBarShowPageTitles: true,
  progressBarShowPageNumbers: true,
  headerView: "advanced",
};
