import { NextPage } from 'next'
import React from 'react'
import { Context } from 'vm'
import { TemplateSlugInterface } from '../../../components/interfaces/template'
import { CreateTemplate } from '../../../components/organism/CreateTemplate'

const CreateTemplateFromSlug: NextPage<TemplateSlugInterface> = (props) => {
  return (
    <div>
      <CreateTemplate {...props} />
    </div>
  )
}

export const getServerSideProps = async (ctx: Context) => {
  return {
    props: {
      slug: ctx.params.slug,
    },
  }
}

export default CreateTemplateFromSlug
