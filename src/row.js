function Row(props) {
  return (
    <div key={props.index}>
      <table className="table-staff" border="1">
        <tr>
          <th>Name</th>
          <th>Surname</th>
          <th>Working days</th>
          <th>Salary per day</th>
          <th>Salary for mounth</th>
        </tr>
        <tr>
          <td>{props.name}</td>
          <td>{props.surname}</td>
          <td>
            <input
              id="days"
              type="text"
              name="days"
              value={props.days}
              onChange={(e) => props.handleChange(props.index, e)}
            />
          </td>
          <td>
            <input
              id="salaryPerDay"
              type="text"
              name="salaryPerDay"
              value={props.salaryPerDay}
              onChange={(e) => props.handleChange(props.index, e)}
            />
          </td>
          <td>{props.days * props.salaryPerDay}</td>
        </tr>
      </table>
    </div>
  )
}

export default Row
