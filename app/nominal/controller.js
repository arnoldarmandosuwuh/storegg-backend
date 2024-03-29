const Nominal = require("./model");

module.exports = {
  index: async (req, res) => {
    try {
      const alertMessage = req.flash("alertMessage");
      const alertStatus = req.flash("alertStatus");

      const alert = { message: alertMessage, status: alertStatus};
      const nominal = await Nominal.find();

      res.render("admin/nominal/view_nominal", { nominal, alert });
    } catch (err) {
      req.flash('alertMessage', `${err.message}`);
      req.flash('alertStatus', 'danger');
      res.redirect('/nominal');
    }
  },
  viewCreate: async (req, res) => {
    try {
      res.render("admin/nominal/create");
    } catch (err) {
      req.flash('alertMessage', `${err.message}`);
      req.flash('alertStatus', 'danger');
      res.redirect('/nominal');
    }
  },
  // actionCreate: async (req, res) => {
  //   try {
  //     const { name } = req.body;

  //     let category = await Nominal({ name });
  //     await category.save();

  //     req.flash('alertMessage', "Berhasil tambah kategori");
  //     req.flash('alertStatus', 'success');

  //     res.redirect("/category");
  //   } catch (err) {
  //     req.flash('alertMessage', `${err.message}`);
  //     req.flash('alertStatus', 'danger');
  //     res.redirect('/category');
  //   }
  // },
  // viewEdit: async (req, res) => {
  //   try {
  //     const {id} = req.params
  //     const category = await Nominal.findOne({_id: id})

  //     res.render('admin/category/edit', {
  //       category
  //     })

  //   } catch (err) {
  //     req.flash('alertMessage', `${err.message}`);
  //     req.flash('alertStatus', 'danger');
  //     res.redirect('/category');
  //   }
  // },
  // actionEdit: async(req, res) => {
  //   try {
  //     const {id} = req.params
  //     const {name} = req.body

  //     await Nominal.findOneAndUpdate({_id: id}, {name})

  //     req.flash('alertMessage', "Berhasil ubah kategori");
  //     req.flash('alertStatus', 'success');

  //     res.redirect('/category')
  //   } catch (err) {
  //     req.flash('alertMessage', `${err.message}`);
  //     req.flash('alertStatus', 'danger');
  //     res.redirect('/category');
  //   }
  // },
  // actionDelete: async(req, res) => {
  //   try {
  //     const {id} = req.params

  //     await Nominal.findOneAndRemove({_id: id})

  //     req.flash('alertMessage', "Berhasil hapus kategori");
  //     req.flash('alertStatus', 'success');

  //     res.redirect('/category')
  //   } catch (err) {
  //     req.flash('alertMessage', `${err.message}`);
  //     req.flash('alertStatus', 'danger');
  //     res.redirect('/category');
  //   }
  // }
};
