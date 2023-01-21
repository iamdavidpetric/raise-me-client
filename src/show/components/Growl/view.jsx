import { MdClose } from 'react-icons/md';
import { RiAlertFill } from 'react-icons/ri';
import { AiFillInfoCircle } from 'react-icons/ai';
import { BsFillCheckCircleFill } from 'react-icons/bs';

const variatGrowl = {
  success: 'bg-emerald-700',
  fail: 'bg-red-700',
  info: 'bg-slate-700'
};

const growlsIcon = {
  success: <BsFillCheckCircleFill size='1.5rem' />,
  fail: <RiAlertFill size='1.5rem' />,
  info: <AiFillInfoCircle size='1.5rem' />
};

const growlsIconColor = {
  success: 'text-emerald-600',
  fail: 'text-red-600',
  info: 'text-slate-600'
};

const Growl = ({ messages, popGrowls }) => {
  return messages?.map((message, index) => (
    <div
      key={index}
      className={`flex absolute bottom-5 left-0 ml-5 w-72 h-12 rounded-lg items-center border bg-white bg-opacity-75 z-[2]`}
      style={{
        marginBottom: 50 * `${index}`
      }}>
      <div
        className={`${variatGrowl[message.type]} h-full w-4 rounded-l-lg bg-opacity-75`}>
        &#8203;
      </div>
      <div className={`ml-2 ${growlsIconColor[message.type]}`}>
        {growlsIcon[message.type]}
      </div>
      <div className='flex ml-3 w-full'>{message.content}</div>
      <div
        className='w-1/4 flex justify-end mr-2 transition-all duration-300 '
        onClick={() => popGrowls([{ id: message.id }])}>
        <MdClose />
      </div>
    </div>
  ));
};

export default Growl;
