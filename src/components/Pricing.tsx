import { Card, Typography } from "@material-tailwind/react"

const Pricing = () => {
  const TABLE_HEAD = ["Broj dana", "Cijena u €", "Cijena u kunama"]

  const TABLE_ROWS = [
    {
      days: "1",
      euros: "10€",
      kunas: "75,35 kn",
    },
    {
      days: "2",
      euros: "16€",
      kunas: "120,55 kn",
    },
    {
      days: "3",
      euros: "22€",
      kunas: "161,80 kn",
    },
    {
      days: "4",
      euros: "26€",
      kunas: "195,90 kn",
    },
    {
      days: "5",
      euros: "32€",
      kunas: "241,10 kn",
    },
    {
      days: "6",
      euros: "36€",
      kunas: "271,24 kn",
    },
    {
      days: "7",
      euros: "42€",
      kunas: "316,45 kn",
    },
    {
      days: "+1",
      euros: "+4€",
      kunas: "+30,14 kn",
    },
  ]

  return (
    <section className="text-gray-600 body-font container mx-auto" id="pricing">
      <div className="flex flex-col text-center w-full mb-6">
        <h2 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
          Cjenik
        </h2>
        <p>Fiksni tečaj konverzije 7,5345</p>
      </div>
      <Card className="h-full w-full max-w-3xl mx-auto overflow-hidden">
        <table className="w-full table-auto text-center max-w-3xl">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-b border-blue-gray-100 bg-blue-gray-50 p-4 w-1/3"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TABLE_ROWS.map(({ days, euros, kunas }, index) => {
              const isLast = index === TABLE_ROWS.length - 1
              const classes = isLast
                ? "p-4"
                : "p-4 border-b border-blue-gray-50"

              return (
                <tr key={days}>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {days}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {euros}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {kunas}
                    </Typography>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </Card>
    </section>
  )
}

export default Pricing
