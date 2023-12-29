// DateRangeForm.js

import React, { useState } from 'react';


interface DateRangeFormProps {
    onSubmit: (data: { startDate: string; endDate: string }) => void;
  } 
const DateRangeForm: React.FC<DateRangeFormProps> = ({ onSubmit }) => {
    const [startDate, setStartDate] = useState<string>('');
    const [endDate, setEndDate] = useState<string>('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit({ startDate, endDate });
      };
      

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
      />
      <input
        type="date"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
      />
      <button type="submit">Get Average Temperature</button>
    </form>
  );
};

export default DateRangeForm;
