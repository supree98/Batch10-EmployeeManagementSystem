import React from 'react';

function CreateAccount() {
    return <div className="container">
                <form>
                    <div class="mb-3 col-lg-4 col-md-4">
                        <label for="exampleInputUserName1" class="form-label">User Name</label>
                        <input type="text" class="form-control" id="exampleInputUserName1" />
                    </div>
                    <div class="mb-3 col-lg-4 col-md-4">
                        <label for="exampleInputEmail1" class="form-label">Email Address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div class="mb-3 col-lg-4 col-md-4">
                        <label for="exampleInputPhone1" class="form-label">Phone Number</label>
                        <input type="tel" class="form-control" id="exampleInputPhone1" />
                    </div>
                    <div class="mb-3 col-lg-4 col-md-4">
                        <label for="exampleInputNickName1" class="form-label">Nick Name</label>
                        <input type="text" class="form-control" id="exampleInputNickName1" />
                    </div>
                    <div class="mb-3 col-lg-4 col-md-4">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3 form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label" for="exampleCheck1">Confirm</label>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
}

export default CreateAccount;