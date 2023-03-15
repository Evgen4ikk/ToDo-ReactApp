import React from 'react';
import { AiFillGithub } from 'react-icons/ai'
import { SlSocialVkontakte } from 'react-icons/sl'
import { FaTelegramPlane } from 'react-icons/fa'

const Profile = () => {
	return (
		<div className='grid h-screen place-items-center overflow-hidden '>
			<div className="flex flex-col justify-center max-w-xs p-6 shadow-xl rounded-xl sm:px-12 dark:bg-white dark:text-black">
				<img src="https://sun4-10.userapi.com/impg/ujwvgRL91_C1-FOmvRqFzCCm739I17nlEXn5Vw/Nb2ru4hg2bA.jpg?size=656x656&quality=96&sign=ee91a7582edcd6bc4a308b631a59c9b0&type=album" alt="" className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square" />
				<div className="space-y-4 text-center divide-y divide-gray-700">
					<div className="my-2 space-y-1">
						<h2 className="text-xl font-semibold sm:text-2xl">Evgeny Rybin</h2>
						<p className="px-5 text-xs sm:text-base dark:text-[#1a1a1a]">Frontend developer</p>
					</div>
					<div className="flex justify-center pt-2 space-x-4 align-center">
						<a href="https://github.com/Evgen4ikk" aria-label="GitHub" rel="noopener noreferrer" target='_blank' className="p-2 rounded-md dark:text-black hover:dark:text-gray-500">
							<AiFillGithub className="w-5 h-5 fill-current"/>
						</a>
						<a href="https://vk.com/evgen41kkk" aria-label="Vk" rel="noopener noreferrer" target='_blank'  className="p-2 rounded-md dark:text-black hover:dark:text-gray-500">
							<SlSocialVkontakte className="w-5 h-5 fill-current"/>
						</a>
						<a href="https://t.me/Evgen44ikk" aria-label="Telegram" rel="noopener noreferrer" target='_blank' className="p-2 rounded-md dark:text-black hover:dark:text-gray-500">
							<FaTelegramPlane className="w-5 h-5 fill-current"/>
						</a>
					</div>
				</div>
			</div>
		</div>
  );
};

export default Profile;