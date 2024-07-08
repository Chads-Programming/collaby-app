'use client'
import React from 'react'
import { Input } from '@/components/ui/input'
import { MultiSelect } from '@/components/ui/multi-select'
import { Search } from 'lucide-react'
import { Controller, useForm } from 'react-hook-form'
import { TECHNOLOGIES } from '@/lib/constants'
import { Button } from '@/components/ui/button'

export default function SearchProjectForm() {
	const { register, watch, control, handleSubmit } = useForm({
		defaultValues: {
			technologies: [],
			projectName: '',
		},
	})
	const state = watch()
	const onFormSubmit = (data: unknown) => {
		//TODO: add filter when kirbe finish stuff things (im pretty sure this can't be done soon.)
	}
	return (
		<form onSubmit={handleSubmit(onFormSubmit)} className="z-20 flex flex-col gap-3 md:flex-row">
			<search className="flex h-16 w-full items-center gap-2 rounded-md border border-input bg-white px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
				<Search className="text-gray-300" />
				<Input
					{...register('projectName')}
					variant="no-style"
					value={state.projectName}
					placeholder="What kind of project are you looking for?"
					className="w-full text-black outline-none"
				/>
			</search>
			<Controller
				name="technologies"
				control={control}
				render={({ field: { onChange, onBlur, value } }) => (
					<MultiSelect
						placeholder="Technologies"
						options={TECHNOLOGIES.map((tech) => ({
							value: tech,
							label: tech,
						}))}
						onChange={(val) => {
							console.log(val, value)
							onChange([...value, val])
						}}
						onBlur={onBlur}
						value={value}
					/>
				)}
			/>
			<Button color="primary" size="xl">
				Search project
			</Button>
		</form>
	)
}
