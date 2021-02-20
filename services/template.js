exports.generateTemplate = (contactData) => {
  const { name, email, subject, message } = contactData;

  const table = `border-collapse: collapse;
        font-size: 1rem;
        font-weight: bold;
        min-width: 400px;`;

  const theadTr = `background-color: #f5497d;
        color: #ffffff;`;

  const thTd = `padding: 12px 15px;
        border: 2px solid #f5497d;`;

  const tbodyTr = `text-align: center;
        background-color: #132c3a;
        color: #ffffff;`;

  const activeRow = `border-bottom: 5px solid #f5497d;`;

  const template = `<table style="${table}">
    <thead>
        <tr style="${theadTr}">
            <th style="${thTd}">Message from</th>
            <th style="${thTd}">${name}</th>
        </tr>
    </thead>
    <tbody>
        <tr style="${tbodyTr}">
            <td style="${thTd}">Email</td>
            <td style="${thTd}">${email}</td>
        </tr>
        <tr style="${tbodyTr}">
            <td style="${thTd}">Subject</td>
            <td style="${thTd}">${subject}</td>
        </tr>
        <tr style="${tbodyTr}">
            <td style="${thTd}${activeRow}">Message</td>
            <td style="${thTd}${activeRow}">${message}</td>
        </tr>
    </tbody>
</table>`;

  return template;
};
