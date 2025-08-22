export default function mailTemplate(content, template) {
  if (template === 1) {
    return `<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
        <style>
            h1,h2,h3,h4,h5{
              margin: 0;
            }
            p {
              font-size: 11pt;
              line-height: normal;
              margin-bottom: 0.5em;
              margin-top: 0;
            }
            .ql-align-center{
              text-align: center;
            }
            .ql-align-right{
              text-align: right;
            }
            .ql-align-left{
              text-align: left;
            }
            .ql-size-large{
              font-size: 14pt;
            }
            .ql-size-huge{
              font-size: 18pt;
            }
            img{
              width: 100%; display: block; height: auto; margin: auto;
            }
            .ql-size-small{
              font-size: 9pt;
            }
        </style>
    </head>
    
    <body>
        <table width="100%" style="table-layout:fixed">
            <tbody>
                <tr>
                    <td>
                        <br>
                        <table align="center" width="100%" cellpadding="0" cellspacing="0"
                            style="min-width:320px!important;max-width:650px!important;padding:10px; margin: auto;">
                            <tbody>
                                <tr>
                                    <td style="font-family: Arial, Helvetica, sans-serif; line-height: 1.5;">
                                      ${content}
                                    </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        </tbody>
    </table>
</body>
</html>`;
  } else {
    return `<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    </head>
    
    <body>
      ${content}
    </body>
</html>`;
  }
}
