import Button from './UI/Button';

function ContactUsForm() {
	return (
		<form className='py-14 ps-14 pe-12 bg-white rounded-[40px] shadow-form  max-w-[500px] w-full'>
			<h6 className='mb-8 font-semibold text-4xl'>Send a Message</h6>
			<div className='space-y-8 mb-14'>
				<input type='text' placeholder='Name' className='input-form' />
				<input type='email' placeholder='E-mail address' className='input-form' />
				<input type='text' placeholder='Message' className='input-form' />
			</div>

			<div className='flex justify-end'>
				<Button text='Submit' type='submit' className='px-8 rounded-2xl font-medium tracking-wider text-2xl' />
			</div>
		</form>
	);
}

export default ContactUsForm;
