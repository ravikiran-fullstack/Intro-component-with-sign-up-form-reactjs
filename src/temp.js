const [formData, setFormData] = useReducer(formReducer, {});
const [submitting, setSubmitting] = useState(false);

const formReducer = (state, event) => {

    if(event.reset){
      return {
        name:'name',
        apple:'fuji',
        count: 0,
        'gift-wrap':false
      }
    }
  
    return {
      ...state,
      [event.name]: event.value,
    };
  };

const handleSubmit = (event) => {
  event.preventDefault();
  setSubmitting(true);

  setTimeout(() => {
    setSubmitting(false);
    setFormData({
      reset:true
    })
  }, 3000);
};

const handleChange = (event) => {
  const isChecked = event.target.type === 'checkbox';
  setFormData({
    name: event.target.name,
    value: isChecked ? event.target.checked: event.target.value,
  });
};


<h1>How About Them Apples</h1>
      {submitting && (
        <div>
          You are submitting the following:
          <ul>
            {Object.entries(formData).map(([name, value]) => (
              <li key={name}>
                <strong>{name}</strong>:{value.toString()}
              </li>
            ))}
          </ul>
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>
            <p>Name</p>
            <input name="name" onChange={handleChange} value={formData.name || ''}/>
          </label>
        </fieldset>
        <fieldset>
          <label>
            <p>Apples</p>
            <select name="apple" onChange={handleChange} value={formData.apple || ''}>
              <option value="">--Please choose an option--</option>
              <option value="fuji">Fuji</option>
              <option value="jonathan">Jonathan</option>
              <option value="honey-crisp">Honey Crisp</option>
            </select>
          </label>
          <label>
            <p>Count</p>
            <input type="number" name="count" onChange={handleChange} step="1" value={formData.count || 0}
            />
          </label>
          <label>
            <p>Gift Wrap</p>
            <input type="checkbox" name="gift-wrap" onChange={handleChange} checked={formData['gift-wrap'] || false} disabled={formData.apple !== ' '}
/>
          </label>
        </fieldset>
        <button type="submit">Submit</button>
      </form>