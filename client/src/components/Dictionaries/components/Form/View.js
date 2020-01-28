// import React from 'react';
// import { Form as AntdForm } from 'antd';
// import { Button, TextField, FormItem } from '../../../../client/src/shared';
// import { TITLE, DESCRIPTION } from '../../../../constants/dictionaries';
// import styles from './styles.module.scss';

// const Form = props => {
//     const { handleSubmit, isSubmitting } = props;

//     return (
//         <div className={styles.root}>
//             <AntdForm onSubmit={handleSubmit}>
//                 <FormItem
//                     name={TITLE}
//                     component={TextField}
//                     placeholder="Enter title"
//                     disabled={isSubmitting}
//                 />
//                 <FormItem
//                     name={DESCRIPTION}
//                     component={TextField}
//                     placeholder="Enter description"
//                     disabled={isSubmitting}
//                 />
//                 <div>
//                     <Button type="primary" htmlType="submit" block>
//                         Add
//                     </Button>
//                 </div>
//             </AntdForm>
//         </div>
//     )
// }

// export default Form;