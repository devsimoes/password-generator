import { generatePassword, generatePhoneticPassword } from '../../lib/password-generator';
import Checkbox from './Checkbox';
import Input from './Input';
import translation from '../../translation/pt.json';
import { useState, useEffect } from 'react';

export default function PasswordGenerator({updatePhoneticPassword}) {
  function onSubmit(event) {
    event.preventDefault();
  }

  function onChangeCheckbox(event) {
    const { name, checked } = event.target;
    const setting = { [name]: checked };
    setSettings({ ...settings, ...setting });
  }

  function onChangeInput(event) {
    const { name, value } = event.target;
    const setting = { [name]: value };
    setSettings({ ...settings, ...setting });
  }

  const [settings, setSettings] = useState({
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: false,
    similar_characters: false,
    repeated_characters: true,
    password_length: 8
  });

  const [password, setPassword] = useState(generatePassword(settings));

  function onClick(event) {
    updatePassword();
  }

  useEffect(() => {
    updatePassword();
  }, [settings]);

  function updatePassword() {
    const generatedPassword = generatePassword(settings);
    setPassword(generatedPassword);
    updatePhoneticPassword(generatePhoneticPassword(generatedPassword));
  }
  
  return (
    <div>
      <h1 className="text-4xl font-bold text-primary-700">{translation.app_name}</h1>
      <p className="text-gray-400 mt-4 text-sm">{translation.app_description}</p>
      <form className="mt-4" onSubmit={onSubmit}>
        <Checkbox name="uppercase" checked={settings.uppercase} onChangeCheckbox={onChangeCheckbox} label={translation.uppercase} />
        <Checkbox name="lowercase" checked={settings.lowercase} onChangeCheckbox={onChangeCheckbox} label={translation.lowercase} />
        <Checkbox name="numbers" checked={settings.numbers} onChangeCheckbox={onChangeCheckbox} label={translation.numbers} />
        <Checkbox name="symbols" checked={settings.symbols} onChangeCheckbox={onChangeCheckbox} label={translation.symbols} />
        <Checkbox name="similar_characters" checked={settings.similar_characters} onChangeCheckbox={onChangeCheckbox} label={translation.similar_characters} />
        <Checkbox name="repeated_characters" checked={settings.repeated_characters} onChangeCheckbox={onChangeCheckbox} label={translation.repeated_characters} />
        <Input className="mt-4" name="password_length" value={settings.password_length} onChangeInput={onChangeInput} label={translation.password_length} />
        <div className="mt-4 text-center text-gray-400 text-lg bg-gray-800 py-4 rounded">{password}</div>
        <button className="block my-8 bg-primary-700 shadow-lg text-white font-medium py-2 px-5 rounded mx-auto focus:outline-none transition duration-200 transform hover:scale-105 select-none" onClick={onClick}>{translation.generate_password}</button>
      </form>
    </div>
  );
}